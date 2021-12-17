<template>
  <div class="slideshow-container">
    <ul class="slides">
      <li class="slide">
        <div class="img"></div>
      </li>
      <li class="slide">
        <div class="img"></div>
      </li>
      <li class="slide">
        <div class="img"></div>
      </li>
      <div class="slideshow-text">
        <p class="title">我是標題</p>
        <span class="content">13215465468797987321</span>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Slide",
};
</script>

<style lang="scss">
.slideshow-container {
  display: flex;
  width: 100%;
  margin: auto;
  .slides {
    position: relative;
    width: 100%;
    height: 720px;
    margin: 0;
    padding: 0;
    background-color: #aaa;
    /* 超出範圍 隱藏 */
    overflow: hidden;
  }
  .slide {
    margin: 0;
    padding: 0;
    /* inherit 繼承父層數值 */
    width: inherit;
    height: inherit;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Helvetica;
    font-size: 120px;
    color: #fff;
    animation: round 50s ease-in-out infinite;
  }
}

.slide:nth-of-type(1) {
  background-color: rgb(250, 204, 120);
  background-image: url("https://picsum.photos/1920/720?random=1");
}
.slide:nth-of-type(2) {
  background-color: #f25c05;
  background-image: url("https://picsum.photos/1920/720?random=2");
  /* 第二張圖在右邊 */
  left: 100%;
}
.slide:nth-of-type(3) {
  background-color: #495f85;
  background-image: url("https://picsum.photos/1920/720?random=3");
  left: 200%;
}

.slideshow-text {
  position: absolute;
  width: 100%;
  bottom: 100px;
  /* margin-left: -20px; */
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.836) 10px 5px 5px;
}
.slideshow-text .title {
  font-size: 45px;
  margin: 0 5px;
  color: #fff;
  letter-spacing: 0.8vw;
}
.slideshow-text .content {
  font-size: 20px;
  margin: 10px 5px;
  letter-spacing: 0.3vw;
  color: #fff;
}
.slideshow-container .slides .slide .img {
  position: relative;
  background-size: cover;
  width: 100%;
  height: 100%;
}

@keyframes round {
  20% {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translateX(-100%);
    animation-delay: 3s;
    /* 0-1秒 淡入*/
  }
  50% {
    opacity: 0.8;
    filter: alpha(opacity=100);
    transform: translateX(-200%);
    animation-delay: 3s;
    /* 1-5秒 靜止*/
  }
  80% {
    opacity: 0.5;
    filter: alpha(opacity=0);
    transform: translateX(0%);
    animation-delay: 3s;
    /* 6-7秒 淡出*/
  }
}
</style>