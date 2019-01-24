<style lang="scss">
  @import "../common/variables.scss";
  @import "../common/shared.scss";
  .home {
    width: 100%;
    height: 100vh;
    background-image: url('../../assets/controlroom1.jpg');
    background-size: cover;
    background-position: bottom;
    h4 {
      text-align: center;
      color: $transWhite;
      font-size: 1rem;
      letter-spacing: .3rem;
      margin-top: 0;
      text-shadow: 0 0 .6rem black;
    }
  }

  #logo {
    margin: 0;
    width: 100%;
    padding: 2% 0 0 0;
    li {
      display: inline-block;
      vertical-align: middle;
      &:nth-child(1) {
        width: 34%;
        text-align: right;
        img {
          margin-top: 1%;
          width: 25%;
          margin-right: -3%;
        }
      }
      &:nth-child(2) {
        padding-top: 3%;
        h1 {
          color: $transWhite;
          font-size: 2.7rem;
          letter-spacing: .1rem;
          font-weight: lighter;
          font-family: 'Strait', sans-serif;
        }
      }
    }
  }
  @import "./home.media.scss";
</style>
<template lang="html">
  <section>
    <div class="page home">
      <ul id="logo">
        <li><img src="../../assets/logo.png" alt=""></li>
        <li><h1>RCHER AVENUE STUDIO</h1></li>
      </ul>
      <h4>Columbia, SC</h4>
      <loading></loading>
      <navigation window-load="true"></navigation>
      <media></media>
    </div>
    <foot />
  </section>
</template>
<script>
  // import '../../assets/controlroom1.jpg';
  import navigation from '../common/navigation/navigation.vue';
  import loading from '../common/loading.vue';
  import media from '../common/socialMedia.vue';
  import foot from '../common/footer/footer.vue';

  export default {
    components: {
      navigation,
      loading,
      media,
      foot
    },
    methods: {
      fadeIn: () => {

      }
    },
    created: function() {
      this.fadeIn();
    }
  }
</script>
