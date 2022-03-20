<template>
  <section class="content">
    <div class="container">
      <div class="content__wrapper">
        <div class="content__dashline"></div>
        <div class="content__title">
          <p>ĐẶT SẢN ĐẤT</p>
          <p>HÀ THÀNH</p>
        </div>

        <div class="content__desc">
          <p>
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

          <div class="content__box">
            <div class="image-wrapper" v-for="item in listImage" :key="item.src">
              <img
                :src="IMAGE_URL + item.src"
                alt=""
                class="content__des-image"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- content__wrapper -->
    </div>
  </section>
</template>

<script>
import { IMAGE_URL } from "../define";
export default {
  data() {
    return {
      IMAGE_URL,
      listImage: [
        {
          src: "2018/11/IMG_3740-300x200.jpg",
        },
        {
          src: "2018/10/bundau-e1542700354476.png",
        },
        {
          src: "2018/09/lau-3-400x270.gif",
        },

        {
          src: "2018/09/lau-3-400x270.gif",
        },
      ],
    };
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
