<style lang="scss">
  @import "../variables.scss";

  #navigation {
    margin: 0;
    padding: 0 0 0 1.2%;
    width: 98.8%;
    position: absolute;
    z-index: 25;
    bottom: 5vh;
    ul {
      margin: 0;
      padding: 0;
      width: 100%;
      li {
        font-size: 1rem;
        display: inline-block;
        width: 10%;
        margin: 0 4.5%;
        padding: 1% 0;
        text-align: center;
        color: white;
        border-radius: .5rem;
        border: .2rem solid white;
        font-family: 'Strait', sans-serif;
        text-shadow: 0 0 .3rem black;
        box-shadow: 0 0 .3rem black;
        &:hover {
          cursor: pointer;
          text-shadow: 0 0 .5rem white;
        }
      }
    }
  }

  .active {
    background-color: $transGray;
  }

  @import "./navigation.media.scss";
</style>
<template lang="html">
  <div id="navigation">
    <ul>
      <li v-on:click="goHome" v-bind:class="{active:home}">Home</li>
      <li v-on:click="goGallery" v-bind:class="{active:gallery}">Gallery</li>
      <li v-on:click="goEngineers" v-bind:class="{active:engineers}">Engineers</li>
      <li v-on:click="goBlog" v-bind:class="{active:blog}">Blog</li>
      <li v-on:click="goContact" v-bind:class="{active:contact}">Contact</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data: function() {
      return {
        home: false,
        gallery: false,
        // gear: false,
        engineers: false,
        blog: false,
        contact: false
      };
    },
    methods: {
      goHome: function () {
        this.$router.push({path: '/'});
      },
      goGallery: function () {
        this.$router.push('gallery');
      },
      goEngineers: function () {
        this.$router.push('engineers');
      },
      goBlog: function () {
        this.$router.push('blog');
      },
      goContact: function () {
        this.$router.push('contact');
      }
    },
    created: function () {
      let self = this;
        const route = self.$route.name;
        if (route === "home") {
          this.home = true;
        } else if (route === "gallery") {
          this.gallery = true;
        // } else if (route === "gear") {
          // this.gear = true;
        } else if (route === "engineers") {
          this.engineers = true;
        } else if (route === "blog") {
          this.blog = true;
        } else if (route === "contact") {
          this.contact = true;
        }
    }
  }
</script>