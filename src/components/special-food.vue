<template>
  <section class="special-food">
    <div class="container">
      <div class="special-food__top">
        <div class="special-food__top--left">
          <p>Vermicelli noodle</p>
        </div>

        <div class="special-food__top--right">
          <p class="special-food__t">Kumquat</p>
          <img
            class="image--small"
            src="https://dauhomemade.vn/apps/themes/bundau/img/tac.png"
            alt=""
          />
        </div>
      </div>

      <div class="special-food__right">
        <div class="special-food__right--center">
          <img
            src="https://dauhomemade.vn/apps/themes/bundau/img/la.png"
            alt=""
            class="image--small"
          />
        </div>
      </div>

      <div class="special-food__center">
        <img
          class="image--large"
          src="https://dauhomemade.vn/apps/themes/bundau/img/bundaufull.png"
          alt=""
        />
      </div>

      <div class="special-food__bottom">
        <div class="special-food__bottom--left">
          <p>Green sticky rice roll</p>
          <img
            class="image--small"
            src="https://dauhomemade.vn/apps/themes/bundau/img/chanhot.png"
            alt=""
          />
          <p>Lemon & Chillies</p>
        </div>

        <div class="special-food__bottom--right">
          <p>Fried Tofu</p>
          <img
            class="image--small"
            src="https://dauhomemade.vn/apps/themes/bundau/img/chenmamtom.png"
            alt=""
          />
          <p>Shrimp Paste Sauces</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "special-food",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/special-food.scss";
</style>
