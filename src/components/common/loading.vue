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
    <div class="loading" v-if="loading">
          <i class="el-icon-loading"></i>
    </div>
</template>
<script>
    export default {
        created: function() {
            this.hideWheel();
      },
      data: function() {
          return {
              loading: true
          };
      },
      props: ['windowLoad'],
      methods: {
          hideWheel: function() {
              if(this.windowLoad) {
                  $(window).on('load', () => {
                    this.delayOff();
                  });
              } else this.delayOff();
          },
          delayOff: function() {
              setTimeout(() => {
                  this.loading = false;
              }, 1500);
          }
      }
    };
</script>