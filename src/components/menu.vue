<template>
  <section class="menu">
    <div class="container">
      <div class="menu__wrapper">
        <div class="menu__tab">
          <div class="menu__item" v-for="item in ListMenu" :key="item.id">
            {{ item.title }}
          </div>
        </div>

        <div class="menu__list-product">
          <div class="menu__product" v-for="item in listItem" :key="item.id">
            <img class="menu__product-image" :src="IMAGE_URL + item.src" />
            <div class="menu__wrapper">
              <div class="menu__product-title">{{ item.title }}</div>
              <div>*****</div>
              <div class="menu__product-desc"> A popular streetfood which has crispy and golden brown shell,...</div>
              <div class="menu__product-price">{{ item.price }}</div>
              <div class="menu__product-count">1</div>
              <div class="menu__product-btn-order">order now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { IMAGE_URL } from "../define";
export default {
  data() {
    return {
      IMAGE_URL,
    };
  },
  computed: {
    listItem() {
      return this.$store.state.dataFoodHomeDade;
    },

    ListMenu() {
      return this.$store.state.menuProduct;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/menu.scss";
</style>
