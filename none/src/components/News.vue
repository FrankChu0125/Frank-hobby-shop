<template>
  <div class="news">
    <div class="news-item">
      <p class="news-caption"><span>通知中心</span></p>
    </div>
    <div class="news-item">
      <p class="news-title red">
        <span>重要通知</span>
      </p>
      <div class="marquee">
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Laudantium,很重要!!!!!
        </span>
      </div>
    </div>
    <div class="news-item">
      <p class="news-title black">通知</p>
      <div class="marquee">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium,
          veniam?
        </p>
      </div>
    </div>
    <div class="news-item">
      <p class="news-title black">通知</p>
      <div class="marquee">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium,
          veniam?
        </p>
      </div>
    </div>
    <div class="news-item">
      <p class="news-title black">通知</p>
      <div class="marquee">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium,
          veniam?
        </p>
      </div>
    </div>
    <p class="goBtn">
      <a href="#">詳情請見 →</a>
    </p>
  </div>
</template>

<script >
export default {
  name: "news",
};
</script>

<style lang="scss">
.news-caption {
  text-align: center;
}
.news-item {
  display: flex;
}

.news {
  background-color: #eeeeee;
  width: 100%;
  height: 387.6px;
}
.news-item {
  margin-left: auto;
  margin-right: auto;
  width: 1080px;
  align-items: center;
  font-size: 15px;
  min-height: 50px;
  max-width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  .news-title {
    padding: 5px;
    color: #fff;
    margin-right: 30px;
    display: inline-block;
  }
  .red {
    background-color: #f53f3c;
  }
  .black {
    background-color: rgb(134, 134, 134);
  }
}
.news-caption {
  white-space: nowrap;
  display: block;
  width: 100%;
  line-height: 1em;
  padding: 20px 0px;
  font-size: 3em;
  font-weight: 550;
}

.goBtn {
  text-align: center;
  padding-bottom: 2em;
  a {
    white-space: nowrap;
    background-color: #676767;
    width: 300px;
    display: inline-block;
    text-align: center;
    line-height: 3em;
    font-size: 18px;
    max-width: 100%;
    margin-top: 20px;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }
}

/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .news-caption {
    text-align: center;
    font-size: 2em;
  }
  // .news .news-item
  .news-item {
    width: 100%;
    font-size: 3vmin;
    letter-spacing: 0em;
    .marquee span {
      text-align: center;
    }
    p.news-title {
      display: block;
      text-align: center;
      width: 100%;
      line-height: 1em;
      padding: -5px;
    }
  }
  .news {
    height: 650px;
  }
}
</style>