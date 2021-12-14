<template>
  <div class="wrap-header">
    <header id="header">
      <label class="hamburger" for="switch">
        <i></i>
      </label>
      <div class="logo">
        <a class="logo img" href="#"
          ><img src="https://picsum.photos/40/40?random=1"
        /></a>
        <p class="logo text" href="#">123</p>
      </div>
      <nav class="header-nav">
        <input type="checkbox" id="switch" />
        <ul class="header-menu">
          <li>
            <a href="#">關於</a>
          </li>
          <li><a href="#">商城</a></li>
          <li><a href="#">訂單</a></li>
          <li><a href="#">登入</a></li>
          <li><a href="#">貼圖</a></li>
        </ul>
        <a href="#" class="cart">
          <span class="cart-count">-</span>
        </a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style lang="scss">
/* 一般尺寸 */
@media screen and (min-width: 768px) {
  .wrap-header header {
    display: flex;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    height: 100px;
    padding: 0 48px;
    .hamburger {
      display: none;
    }
  }
}
/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .wrap-header header {
    align-items: center;
    height: 16vmin;
    padding: 0;
  }
  .wrap-header .header-nav {
    .header-menu {
      display: none;
      position: absolute;
      top: 90px;
      left: 0;
      background-color: #00446e;
      width: 100%;
      li a {
        border-bottom: 1px solid #c2c2c2;
        font-size: 4.68vmin;
        line-height: 3em;
      }
    }
    .cart {
      display: block;
      position: relative;
      content: "";
      width: 20px;
      height: 21px;
      margin-right: 6vw;
      margin-left: 6vw;
    }
  }
  .wrap-header header .hamburger {
    display: flex;
    position: absolute;
    align-items: center;
    height: 100%;
    background-color: #00446e;
    padding-right: 6vw;
    padding-left: 6vw;
    margin-right: 6vw;
    i {
      transition: all 0.4s;
      width: 30px;
      height: 2px;
      background-color: #c2c2c2;
      position: relative;
    }
    i::after {
      top: -8px;
      left: 0;
      position: absolute;
      content: "";
      width: 30px;
      height: 2px;
      background-color: #c2c2c2;
    }
  }

  .wrap-header header .logo {
    margin: 0;
    justify-content: center;
    height: 100%;
  }
  .wrap-header nav .cart {
    position: absolute;
    top: -16vmin;
  }
}

// logo
.logo {
  display: flex;
  align-items: center;
  padding: 0 5px;
  img {
    border-radius: 50%;
  }
  .text {
    font-size: 32px;
    color: #fff;
    bottom: 0;
  }
}

.wrap-header {
  top: 0;
  left: 0;
  width: 100%;
  background-color: #444444;
  position: fixed;
  z-index: 999;
  .header-nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    -webkit-box-pack: end;
    font-size: 15px;
    height: 100%;
  }
  .header-menu {
    display: flex;
    margin-top: 20px;
  }
  nav {
    a {
      font-size: 16px;
      color: #fff;
      text-decoration: none;
      display: inline-block;
      line-height: 100px;
      padding: 0px 10px;
      width: 100%;
    }
    .cart {
      position: relative;
      width: 20px;
      height: 21px;
      background-image: url("../assets/img/cart.png");
      background-repeat: no-repeat;
      background-size: contain;
      margin-left: 25px;
      .cart-count {
        width: 16px;
        height: 16px;
        position: absolute;
        top: -5px;
        right: 8px;
        font-size: 20px;
        background-color: #c2c2c2;
        color: #444444;
        text-align: center;
        line-height: 12px;
        border-radius: 100%;
      }
    }
  }
  input {
    display: none;
  }
}

#switch:checked ~ .header-menu {
  display: block;
}
</style>
