<template>
  <section>
    <Header />
    <div class="banner d-flex justify-content-center align-items-center" style="margin-bottom:50px">
      <div class="banner-text">
        <vue-typed-js
          :strings="['歡迎來到炤選物~']"
          :fadeOut="true"
          :startDelay="1000"
        >
          <h3 class="text-white text-center">
            <span class="typing"></span>
          </h3>
        </vue-typed-js>
      </div>
    </div>
    <div class="container" id="products">
      <div class="content">
        <div class="category-list">
          <ul class="list-items sticky-list">
            <li>
              <a class="items" href="#products"
                ><img
                  class="items-img"
                  src="https://picsum.photos/50/50?random=8"
                />
                <div>全部商品</div>
              </a>
            </li>
            <li>
              <a class="items" href="#products"
                ><img
                  class="items-img"
                  src="https://picsum.photos/50/50?random=9"
                />
                <div>熱門商品</div>
              </a>
            </li>
            <li>
              <a class="items" href="#products"
                ><img
                  class="items-img"
                  src="https://picsum.photos/50/50?random=10"
                />
                <div>組合優惠</div>
              </a>
            </li>
            <li>
              <a class="items" href="#products"
                ><img
                  class="items-img"
                  src="https://picsum.photos/50/50?random=11"
                />
                <div>哈利波特</div>
              </a>
            </li>
            <li>
              <a class="items" href="#products"
                ><img
                  class="items-img"
                  src="https://picsum.photos/50/50?random=12"
                />
                <div>pokemon</div>
              </a>
            </li>
            <li>
              <a class="items" href="#products"
                ><img
                  class="items-img"
                  src="https://picsum.photos/50/50?random=13"
                />
                <div>寵物系列</div>
              </a>
            </li>
          </ul>
        </div>
        <div class="products">
          <h3>全部商品</h3>
          <ul class="products-list">
            <li class="products-item">
              <div class="products-top text-center">
                <div class="badge badge-danger category-top"></div>
                <img
                  class="card-img"
                  src="https://picsum.photos/150/200?random=14"
                />
              </div>

              <div class="products-content p-2">
                <h6 class="font-weight-bold">商品一</h6>
                <div>
                  <div class="description text-truncate">
                    商品介紹123商品介紹123商品介紹123商品介紹123商品介紹123商品介紹123商品介紹123
                  </div>
                </div>
              </div>

              <div class="products-footer">
                <div class="price">
                  <del><small>NT$ 8000</small></del>
                  特價 NT$ 5000
                </div>
                <div class="products-btn">
                  <a class="btn btn-outline-secondary btn-block" href="#">
                    <font-awesome-icon
                      :icon="['fas', 'cat']"
                    ></font-awesome-icon
                    >了解詳情
                  </a>
                  <!-- </router-link> -->
                  <a class="btn btn-outline-danger btn-block" href="#">
                    <font-awesome-icon
                      :icon="['fa', 'cart-plus']"
                    ></font-awesome-icon
                    >手刀搶購
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "Products",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.banner {
  background-image: url("https://picsum.photos/1920/1080?random=16");
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 60px;
  height: 300px;
}
.banner-text {
  background-color: rgba(0, 0, 0, 0.534);
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  display: flex;
}
.confound {
  position: absolute;
  width: 100px;
  top: -40%;
  left: -24%;
  opacity: 0;
  transition: all 0.5s;
}
.sticky-list {
  background-color: #fff;
  top: 99.88px;
  position: sticky;
}
.content {
  display: flex;
  .category-list {
    width: 20%;
    @media (max-width: 992px) {
      width: 100%;
    }
  }
  .products {
    width: 80%;
    @media (max-width: 992px) {
      width: 100%;
    }
  }
  @media (max-width: 992px) {
    display: block;
  }
}
.list-items {
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 992px) {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    text-align: center;
    margin-bottom: 5px;
    @media (max-width: 992px) {
      width: 33.33333333%;
    }
  }
  .items {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #ced4da;
    transition: all 0.5s;
    color: #769bd3;
    font-weight: 800;
    text-decoration: none;
    &:hover {
      color: #044273;
      border: 1px solid #769bd3;
    }
    &.active {
      color: #044273;
      border: 1px solid #769bd3;
    }
    @media (max-width: 992px) {
      flex-direction: column;
    }
  }
}
.products {
  margin-left: 40px;
  @media (max-width: 992px) {
    margin-left: 0px;
  }
  .products-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
.products-item {
  display: flex;
  box-shadow: 0 1px 5px #000;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0 2px 10px #000;
  }
  .products-top {
    width: 20%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .products-content {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: start;
    h6 {
      font-size: 25px;
      color: #00446e;
      font-weight: bold;
      padding: 10px;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .products-footer {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    .price {
      padding-right: 8px;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .products-btn {
    width: 100%;
    display: flex;
    justify-content: end;
    flex-direction: column;
    a {
      margin: 5px;
    }
    @media (max-width: 768px) {
      a {
        width: 100%;
      }
    }
  }
  .products-btn-disabled {
    width: 100%;
  }
  .description {
    // 自動換行
    white-space: pre-line;
    padding: 0px 10px 0px 10px;
  }
  @media (max-width: 768px) {
    display: block;
  }
}
.items-img {
  max-width: 50px;
  margin-right: 10px;
}
.products-top {
  position: relative;
  .category-top {
    position: absolute;
    top: 0px;
    right: 0px;
  }
}
.card-img {
  width: 150px;
  @media (max-width: 992px) {
    width: 100px;
  }
}
</style>