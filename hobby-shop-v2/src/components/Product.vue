<template>
  <section class="product">
    <header class="product-header">
      <h2 class="title">
        <span class="en">PRODUCT</span>
        <span class="tw">產品介紹</span>
      </h2>
    </header>
    <ul>
      <li>
        <figure>
          <a href="#">
            <img src="https://picsum.photos/200/300?random=5" />
            <figcaption>
              <span class="en">SHOT GUN</span>
              <br />
              <span class="tw">這比魔法好用</span>
              <br />
              <span class="en">→</span>
            </figcaption>
          </a>
        </figure>
      </li>
      <li>
        <figure>
          <a href="#">
            <img src="https://picsum.photos/200/300?random=6" />
            <figcaption>
              <div class="top-figcaption">
                <span class="en">L STAR</span>
                <span class="tag red">2021.11.NEW</span>
              </div>
              <br />
              <span class="tw">逼逼啵啵</span>
              <br />
              <span class="en">→</span>
            </figcaption>
          </a>
        </figure>
      </li>
      <li>
        <figure>
          <a href="#">
            <img src="https://picsum.photos/200/300?random=7" />
            <figcaption>
              <div class="top-figcaption">
                <span class="en">R301</span>
                <span class="tag blue">2021.05.RENEWRAL</span>
              </div>
              <br />
              <span class="tw">瓜拉瓜拉瓜啦啦</span>
              <br />
              <span class="en">→</span>
            </figcaption>
          </a>
        </figure>
      </li>
    </ul>
    <p class="goBtn">
      <a href="#">產品介紹 →</a>
    </p>
  </section>
</template>

<script>
export default {
  name: "Product",
};
</script>

<style lang="scss">
.product {
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    li {
      text-align: center;
      margin: 0 30px;
      figure {
        width: 100%;
        display: flex;
        flex-direction: column;
        .red {
          color: #fff;
          background-color: red;
          padding: 0px 6px;
          font-size: 12px;
          margin-left: 10px;
        }
        .blue {
          color: #fff;
          background-color: #0000ff;
          padding: 0px 6px;
          font-size: 12px;
          margin-left: 10px;
        }
        a {
          display: block;
          color: #00446e;
          text-decoration: none;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          figcaption {
            padding-bottom: 18px;
            display: block;
            .en {
              font-size: 24px;
            }
            .tw {
              font-size: 14px;
              font-weight: 500;
            }
          }
        }
        img {
          margin-bottom: 30px;
        }
      }
    }
  }
  .product-header {
    width: 1080px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;
    h2 {
      margin: 0;
      font-weight: normal;
      color: #333355;
      .en {
        font-size: 42px;
        margin-right: 24px;
        letter-spacing: 0.05em;
        line-height: 1px;
      }
      .tw {
        line-height: 2em;
        letter-spacing: 0.05em;
      }
    }
  }
}
.en {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
}

.tw {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: 600;
}
/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .product > ul {
    display: block;
    justify-content: space-around;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .product > ul li figure img {
    margin-bottom: 30px;
    width: 60%;
  }
}
</style>