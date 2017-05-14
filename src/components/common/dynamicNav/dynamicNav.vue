<template lang="html">
  <span>
    <navigation :class="{ hide: mobile }"></navigation>
    <mobile-nav :class="{ hide: !mobile }"></mobile-nav>
  </span>
</template>

<style media="screen">
.hide {
    display: none;
}
</style>
<script>
  import navigation from '../navigation/navigation.vue';
  import mobileNav from '../mobileNav/mobileNav.vue';

  export default {
      data: function () {
        return {
          mobile: false,
        };
      },
      components: {
        navigation: navigation,
        mobileNav: mobileNav
      },
      methods: {
        adjust: function () {
          const width = $(window).width();
          if (width <= 1080) {
            this.mobile = true;
          } else {
            this.mobile = false;
          }
        },
        checkSize: function () {
          $(window).resize(() => {
            this.adjust();
          });
        }
      },
      created: function() {
        $(document).ready(() => {
          this.adjust();
          this.checkSize();
        });
      }
  }
</script>