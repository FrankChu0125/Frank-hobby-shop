<template>
  <div class="home">
    <Header />
    <Slideshows />
    <News />
    <Product />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Slideshows from "../components/Slideshows.vue";
import News from "../components/News.vue";
import Product from "../components/Product.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    Slideshows,
    News,
    Product,
  },
};
</script>
