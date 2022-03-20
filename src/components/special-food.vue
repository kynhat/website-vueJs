<template>
  <section class="special-food">
    <div class="container">
      <div class="special-food__wrapper">
        <div class="special-food__left-content">
          <div class="special-food__content-top">
            <div class="special-food__title-gray">HÀNH TRÌNH</div>
            <div class="special-food__title-red">BÚN ĐẬU</div>
            <p>
              Bún đậu mắm tôm là một món ăn dân dã rất được ưa chuộng tại miền
              Bắc Việt Nam.<br />$breakpoint-xs-min Một mẹt bún đậu mắm tôm luôn
              có đầy đủ chất dinh dưỡng: bún lá ép chặt làm từ bột gạo, đậu mơ
              rán giòn ngoài mặt nhưng vẫn thơm bùi bên trong, thêm vài lát thịt
              chân giò hấp và chả cốm chiên ráo dầu, ăn kèm với rau kinh giới,
              rau tía tô và dưa leo. Tất cả đều tạo nên một bản giao hưởng bằng
              vị giác cuốn hút thực khách, bất kể tuổi tác, địa vị.
            </p>
          </div>
        </div>

        <div class="special-food__box">
          <div class="special-food__top">
            <div class="special-food__top--left">
              <p class="special-food__title-left">Vermicelli noodle</p>
            </div>

            <div class="special-food__top--right">
              <p class="special-food__title-right">Kumquat</p>
              <img
                class="image--small special-food__kumquat"
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
              <p class="special-food__title-left">Green sticky rice roll</p>
              <img
                class="image--small special-food__lemon"
                src="https://dauhomemade.vn/apps/themes/bundau/img/chanhot.png"
                alt=""
              />
              <p class="special-food__title-left">Lemon & Chillies</p>
            </div>

            <div class="special-food__bottom--right">
              <p class="special-food__title-right">Fried Tofu</p>
              <img
                class="image--small special-food__fried"
                src="https://dauhomemade.vn/apps/themes/bundau/img/chenmamtom.png"
                alt=""
              />
              <p class="special-food__title-right">Shrimp Paste Sauces</p>
            </div>
          </div>
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
