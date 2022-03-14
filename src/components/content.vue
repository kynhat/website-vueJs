<template>
  <section class="special-food">
    <div class="container">
      <div class="special-food__wrapper">
        <div class="special-food__dashline"></div>
        <div class="special-food__title">ĐẶT SẢN ĐẤT HÀ THÀNH</div>

        <div class="container">
          <p class="special-food__content">
            Hà Nội là cái nôi của một nền ẩm thực giản dị, đơn sơ nhưng chứa
            đựng trong từng món ăn sự chăm chút, tinh tế và tỉ mỉ của người nấu.
            Chỉ cần một chút thay đổi trong cách chế biến thì người Hà Nội cũng
            nhận ra món ăn đã bị biến thể ít nhiều. Đến đậu hũ cho món bún đậu
            cũng phải chiên lửa thật khéo, để mặt ngoài vẫn giòn nhưng bên trong
            thì đậu vẫn còn mềm, béo và thơm khi cắt ra, hay đến món chả rươi
            cũng phải làm thật kỹ lưỡng để chả không bị khô, và rươi trong chả
            vẫn không bị mất vị. Đến chén nước chấm cũng phải tỉ mỉ trong từng
            nguyên liệu thêm vào, vì chỉ thiếu một thành phần thì phần linh hồn
            của món ăn đã mất đi quá nửa.
          </p>
          <img
            src="https://dauhomemade.vn/apps/uploads/2018/11/IMG_3740-300x200.jpg"
            alt=""
            class="special-food__content-image"
          />
          <img
            src="https://dauhomemade.vn/apps/uploads/2018/10/bundau-e1542700354476.png"
            alt=""
            class="special-food__content-image"
          />
        </div>
      </div>
      <!-- special-food__wrapper -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "content",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/content.scss";
</style>
