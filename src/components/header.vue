<template>
  <section class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__block-left">
          <div class="header__logo">
            <img
              src="https://dauhomemade.vn/apps/uploads/2018/09/logo.png"
              alt=""
            />
          </div>

          <div class="header__menu" @click="toggleActiveClass()">
            <i class="fa fa-bars header__menu-bar"></i>
            <h3 class="header__menu-title">MENU</h3>
          </div>

          <div class="header__toggle">
            <ul class="header__dropdown-menu">
              <li header__dropdown-item v-for="item in titleMenu" :key="item.title">
                {{ item.title }}
              </li>
            </ul>
          </div>
        </div>

        <div class="header__block-center">
          <div class="header__title-top">THỜI BÁO</div>
          <div class="header__title-center">BÚN ĐẬU</div>
          <ul class="header__title-bottom">
            <li>TÂN THỜI</li>
            <li>MÁT MẺ</li>
            <li>TIỆN NGHI</li>
          </ul>

          <div class="header__title-special">
            SỐ ĐẶC - BIỆT, DUY NHẤT CHỈ CÓ TẠI ĐẬU
          </div>
        </div>

        <div class="header__block-right">
          <div class="header__info">
            <span class="">ĐẬU HOMEMADE</span>
            <span class="">BÚN ĐẬU MẮM TÔM &</span>
            <span class="">MORE</span>
            <span class="fade-righr">******</span>
            <span class="header__address">
              91 Xuân Thuỷ, phường Thảo Điền, quận 2, TP. Hồ Chí Minh
            </span>
            <span class="fade-righr">******</span>
            <span class="header__phone">3588853</span>
            <span class="fade-righr">******</span>
            <span class="header__mail">info@bundaumamtom.com</span>
          </div>
        </div>
      </div>
      <!-- header__wrapper -->

      <div class="header__languge">
        <span class="header__languge-vn">TIẾNG VIỆT</span>
        <span class="header__languge-us">ENGLISH</span>
      </div>

      <div class="header__video-wrapper">
        <div class="header__breakpoint"></div>
        <video class="header__video" muted loop Autoplay>
          <source
            src="https://dauhomemade.vn/apps/uploads/2018/10/output.mp4"
            type="video/mp4"
          />
          Trình duyệt của bạn không hỗ trợ HTML5.
        </video>
      </div>
    </div>
    <!-- container -->
  </section>
</template>

<script>
// import {

// } from '../define';
export default {
  data() {
    return {
      titleMenu: [
        { title: "TRANG CHỦ" },
        { title: "MENU" },
      ],
    };
  },
  methods: {
    toggleActiveClass() {
      let toggle = document.querySelector(".header__toggle");
      toggle.classList.toggle("is-show");
    },
  },
  name: "header",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/header.scss";
</style>
