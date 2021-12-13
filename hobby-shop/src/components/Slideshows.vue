<template>
  <Carousel :autoplay="5000" :wrap-around="true" class="slideshows">
    <Slide v-for="slide in imgArray" :key="slide">
      <div
        class="carousel__item"
        :style="{ backgroundImage: `url(${slide.img})` }"
      >
        <!-- {{ imgArray }} -->
        {{ slide.title }}
      </div>
    </Slide>
    <template>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import hp from "../assets/img/hp.png";
import hp2 from "../assets/img/hp2.jpg";
import hp3 from "../assets/img/hp3.jpg";
import po from "../assets/img/po.png";
import cat from "../assets/img/cat.jpg";

import "vue3-carousel/dist/carousel.css";
export default {
  name: "slideshows",

  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      imgArray: [
        {
          title: "hp",
          img: hp,
        },
        {
          title: "po",
          img: po,
        },
        {
          title: "hp3",
          img: hp3,
        },
        {
          title: "cat",
          img: cat,
        },
        {
          title: "hp2",
          img: hp2,
        },
      ],
      bgimgUrl: "",
    };
  },
  mounted() {
    console.log(this.imgArray);
  },
  methods() {},
};
</script>

<style >
.slideshows {
  padding-top: 40px;
}
.carousel__item {
  min-height: 500px;
  width: 100%;
  /* background-color: var(--vc-clr-primary); */
  color: var(--vc-clr-white);
  font-size: 70px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  text-shadow: rgba(0, 0, 0, 0.836) 10px 5px 5px;
  padding-bottom: 30px;
}

.carousel__slide {
  padding: -50px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>