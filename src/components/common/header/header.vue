<style lang="scss">
  @import "../variables.scss";

  .header {
    background-color: $transBlack;
    margin: 0;
    padding: 0;
    width: 100%;
    top: 0;
    position: absolute;
    top: 0;
    z-index: 26;
    li {
      display: inline-block;
      margin: 0;
      padding: 1% .5%;
      width: 46%;
      vertical-align: middle;
      font-family: 'Strait', sans-serif;
      &:nth-child(1) {
        text-align: left;
        h1 {
          color: $transWhite;
          font-size: 2rem;
          margin: 0;
          padding-left: 11%;
        }
      }
      &:nth-child(2) {
        text-align: right;
        width: 35%;
        padding-right: 0;
        margin-right: 0;
        img {
          width: 7%;
        }
      }
      &:nth-child(3) {
        width: 15%;
        color: white;
        padding-left: 0;
        margin-left: 0;
        vertical-align: bottom;
        padding-bottom: 1.5%;
        font-size: 1.1rem;
        letter-spacing: .2rem;
      }
    }
  }

  @import "./header.media.scss";
</style>
<template lang="html">
  <ul class="header">
    <li>
      <h1>{{ title }}</h1>
    </li>
    <li>
      <img class="floatLogo" src="../../../assets/logo.png" alt="">
    </li>
    <li>
      rcher Avenue Studio
    </li>
  </ul>
</template>

<script>

export default {
    props: ['title']
}
</script>
