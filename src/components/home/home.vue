<style lang="scss">
  @import "../common/variables.scss";
  .home {
    width: 100%;
    height: 100vh;
    background-image: url('assets/controlroom1.2.png');
    background-size: cover;
    background-position: bottom;
    h4 {
      text-align: center;
      color: $transWhite;
      font-size: 1rem;
      letter-spacing: .3rem;
      margin-top: 0;
      text-shadow: 0 0 .4rem white;
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
          width: 25%;
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
<div class="page home">
    <ul id="logo">
      <li><img src="./assets/logo.png" alt=""></li>
      <li><h1>RCHER AVENUE STUDIO</h1></li>
    </ul>
    <h4>Columbia, SC</h4>
    <navigation></navigation>
    <loading></loading>
</div>
</template>
<script>
  import navigation from '../common/navigation/navigation.vue';
  import loading from '../common/loading.vue';

  export default {
    components: {
      navigation: navigation,
      loading: loading
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
