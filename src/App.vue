<template >
  <Header />
  <BgSite />
  <BgDirty />
  <Content/>
  <SpecialFood/>
</template>

<script>
import Header from "./components/header.vue";
import BgSite from "./components/bg-site.vue";
import BgDirty from "./components/bg-dirty.vue";
import Content from "./components/content.vue";
import SpecialFood from "./components/special-food.vue";

export default {
  props: {
  },
  methods: {},
  name: "App",
  components: {
    Header,
    BgSite,
    BgDirty,
    Content,
    SpecialFood
  },
};
</script>

<style lang="scss">
@import "scss/vendor.scss";
</style>
