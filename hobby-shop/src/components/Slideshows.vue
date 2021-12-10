<template>
  <div class="slideshows">
    <div
      class="bg"
      :style="'background-image: url(' + carousels[show].img + ')'"
    ></div>
    <div class="container">
      <div
        class="carousel-wrap"
        ref="carousel"
        data-auto="true"
        data-delay="5000"
        @mouseenter.stop="toggleTimer = false"
        @mouseleave.stop="toggleTimer = true"
        @touchstart.stop="touchStart"
        @touchmove.stop="touchMove"
        :style="'min-height:' + minHeight"
      >
        <keep-alive>
          <transition :name="carouselName">
            <div class="item">
              <!-- v-if="show == i" -->
              <div v-for="(s, i) in carousels" :key="i" >
                <a :href="s.href" v-if="show == i">
                  <img :src="s.img" />
                </a>
              </div>
            </div>
          </transition>
        </keep-alive>
        <a class="button-prev" href="#" @click.prevent="toPrev">
          <img
            src="//akveo.github.io/eva-icons/outline/png/128/arrow-ios-back-outline.png"
          />
        </a>
        <a class="button-next" href="#" @click.prevent="toNext"
          ><img
            src="//akveo.github.io/eva-icons/outline/png/128/arrow-ios-forward-outline.png"
        /></a>
        <div class="dot-group">
          <a
            v-for="(l, i) in len"
            :key="i"
            href="#"
            :class="{ active: show == i }"
            @click.prevent="show = i"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const carousels = [
  {
    img: "https://picsum.photos/900/506?image=1081",
    href: "#",
  },
  {
    img: "https://picsum.photos/900/506?image=1068",
    href: "#",
  },
  {
    img: "https://picsum.photos/900/506?image=989",
    href: "#",
  },
];
export default {
  name: "slideshows",
  data() {
    return {
      carouselName: "carousel-next",
      carousels: carousels,
      len: 0,
      show: 0,
      xDown: null, // for swiper
      yDown: null, // for swiper
      autoplay: false, // 是否自動輪播
      timer: null, // auto play
      timerDelay: 3000, // 自動輪播間隔秒數
      toggleTimer: true, // pause auto play
      minHeight: 0, // 抓最小高度
    };
  },
  methods: {
    toNext() {
      this.carouselName = "carousel-next";
      this.show + 1 >= this.len ? (this.show = 0) : (this.show = this.show + 1);
    },
    toPrev() {
      this.carouselName = "carousel-prev";
      this.show - 1 < 0
        ? (this.show = this.len - 1)
        : (this.show = this.show - 1);
    },
    // swiper event(for mobile)
    touchStart(e) {
      this.xDown = e.touches[0].clientX;
      this.yDown = e.touches[0].clientY;
    },
    touchMove(e) {
      const _this = this;
      if (!this.xDown || !this.yDown) {
        return;
      }

      let xUp = e.touches[0].clientX;
      let yUp = e.touches[0].clientY;

      let xDiff = this.xDown - xUp;
      let yDiff = this.yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        xDiff > 0 ? _this.toNext() : _this.toPrev();
      }
      this.xDown = null;
      this.yDown = null;
    },
    // 自動輪播
    autoPlay() {
      setInterval(() => {
        if (this.toggleTimer) this.toNext();
      }, this.timerDelay);
    },
  },
};
</script>

<style lang="sass">
*, *::before, *::after
  box-sizing: border-box

// full background
html, body, .container
  height: 100vh
  overflow-y: hidden
.bg
  position: fixed
  z-index: -1
  width: 100vw
  height: 100vh
  background-size: cover
  background-repeat: no-repeat
  background-position: center center
  filter: blur(30px)
  transition: background-image .5s
  &::before
    content: ''
    position: absolute
    top: 0
    right: 0
    left: 0
    bottom: 0
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,.2) 100%)

.container
  display: flex
  justify-content: center
  align-items: center
  margin-right: auto
  margin-left: auto
  padding-top: 5vh
  max-width: 900px

// carousel items
.carousel-wrap
  position: relative
  width: 100%
  overflow: hidden
  border: 2px solid rgba(#fff, .1)
  box-shadow: 0 10px 20px rgba(0, 0, 0, .19), 0 6px 6px rgba(0, 0, 0, .23)
  .item
    position: absolute
    top: 0
    right: 0
    left: 0
    bottom: 0
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    background: #000
    color: #FFF
    opacity: 1
    &:first-of-type
      position: relative
      img
        display: block
        max-width: 100%
        a
          display: block

// buttons: prev, next
.button-prev, .button-next, .dot-group
  position: absolute
  z-index: 1
.button-prev, .button-next
  top: 50%
  transform: translateY(-50%)
  transition: opacity .3s
  &:hover
    opacity: .7
    img
      display: block
      max-width: 50px
.button-next
  right: 0

// dots
.dot-group
  right: 0
  bottom: 8px
  left: 0
  display: flex
  justify-content: center
  a
    display: block
    margin-right: 8px
    margin-left: 8px
    width: 16px
    height: 16px
    background: rgba(#fff, .5)
    border: 2px solid rgba(#FFF, .5)
    border-radius: 50%
    transition: .3s
    &:hover, &.active
      background: #fff

// carousel effect
.carousel-prev-enter-active, .carousel-prev-leave-active,
.carousel-next-enter-active, .carousel-next-leave-active
  transition: transform 1s cubic-bezier(0.215, 0.610, 0.355, 1.000)
  will-change: transform
.carousel-next-enter, .carousel-prev-leave-to
  transform: translateX(100%)
.carousel-next-leave-to, .carousel-prev-enter
  transform: translateX(-100%)
</style>