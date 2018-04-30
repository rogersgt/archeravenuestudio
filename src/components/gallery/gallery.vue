<style lang="scss">
@import "../common/footer.scss";
</style>

<template lang="html">
<div class="page gallery">
  <h title="Gallery"></h>
  <carousel></carousel>
  <dynamic-nav></dynamic-nav>
  <media></media>
  <loading></loading>
</div>
</template>
<script>
  import carousel from './carousel.vue';
  import dynamicNav from '../common/dynamicNav/dynamicNav.vue';
  import header from '../common/header/header.vue';
  import loading from '../common/loading.vue';
  import media from '../common/socialMedia.vue';

  export default {
    components: {
      carousel: carousel,
      dynamicNav: dynamicNav,
      h: header,
      loading: loading,
      media: media
    }
  }
</script>
