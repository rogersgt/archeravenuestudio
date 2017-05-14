<template lang="html">
<div class="page gallery">
  <h title="Gallery"></h>
  <carousel></carousel>
  <dynamic-nav></dynamic-nav>
  <loading></loading>
</div>
</template>
<script>
  import carousel from './carousel.vue';
  import dynamicNav from '../common/dynamicNav/dynamicNav.vue';
  import header from '../common/header/header.vue';
  import loading from '../common/loading.vue';

  export default {
    components: {
      carousel: carousel,
      dynamicNav: dynamicNav,
      h: header,
      loading: loading
    }
  }
</script>
