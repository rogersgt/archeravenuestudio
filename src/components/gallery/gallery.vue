<style lang="scss">
@import "../common/footer/footer.scss";
</style>

<template lang="html">
<section>
  <div class="page gallery">
    <h title="Gallery"></h>
    <carousel></carousel>
    <dynamic-nav></dynamic-nav>
    <media></media>
    <loading></loading>
  </div>
  <foot />
</section>
</template>
<script>
  import carousel from './carousel.vue';
  import dynamicNav from '../common/dynamicNav/dynamicNav.vue';
  import header from '../common/header/header.vue';
  import loading from '../common/loading.vue';
  import media from '../common/socialMedia.vue';
  import foot from '../common/footer/footer.vue';

  export default {
    components: {
      carousel,
      dynamicNav,
      h: header,
      loading,
      media,
      foot
    }
  }
</script>
