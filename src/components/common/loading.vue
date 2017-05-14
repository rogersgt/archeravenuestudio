<style lang="scss">
    .loading {
        background-color: white;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        z-index: 24;
        i {
            color: black;
            position: fixed;
            top: 45%;
            left: 46%;
            font-size: 3rem;
        }
    }
</style>
<template>
    <div class="loading">
          <i class="el-icon-loading"></i>
    </div>
</template>
<script>
    export default {
        created: function() {
          $(window).on('load', () => {
              this.hideWheel();
              this.loading = false;
          });

          // navigating to another page does not reload the window
          // let self = this;
        // const route = self.$route.name;
          if (this.loading) this.hideWheel();
      },
      data: function() {
          return {
              loading: true
          };
      },
      methods: {
          hideWheel: function() {
              console.log('loaded');
              setTimeout(() => {
                  $('.loading').css('display', 'none');
              }, 1500);
          }
      }
    };
</script>