<style lang="scss">
  @import "../variables.scss";
  .mobileNav {
    font-size: 2rem;
    color: white;
    background-color: rgba(217, 217, 217, .6);
    border-radius: .2rem;
    position: fixed;
    padding: .5rem;
    margin: 0;
    top: 15%;
    left: 2%;
    z-index: 27;
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 .3rem white;
    }
  }

  #mobileNavSection {
    margin: 0;
    padding: 0;
    width: 50%;
    ul {
      position: fixed;
      top: 0;
      height: 100vh;
      z-index: 28;
      width: 50%;
      margin: 0;
      padding: 0;
      background-color: black;
      margin-left: -50%;
      transition-duration: .5s;
      -webkit-transition-duration: .5s;
      li {
        width: 90%;
        padding: 5%;
        margin: 0;
        display: block;
        color: white;
        &:hover {
          cursor: pointer;
          background-color: white;
          color: black;
        }
        &:nth-child(1) {
          text-align: right;
          &:hover {
            background-color: black;
            color: white;
            text-shadow: 0 0 .3rem white;
          }
        }
      }
    }
    .open {
      margin-left: 0;
    }
  }
  @media(min-width: 1081px) {
    #mobileNavSection ul {
      width: 10%;
      margin-left: -10%;
    }
  }
</style>
<template lang="html">
  <div id="mobileNavSection">
    <div class="mobileNav" v-if="!open" v-on:click="toggle">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <ul :class="{ open:open }">
      <li v-on:click="toggle"><i class="el-icon-d-arrow-left"></i></li>
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
    methods: {
      toggle: function() {
        this.open = !this.open;
      },
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
      },
      thenClose: function() {
        setTimeout(() => {
          if (this.closeQuick) this.open = false;
        }, 1000);
      }
    },
    created: function() {
      $(document).ready(() => this.thenClose());
      const self = this;
      const route = self.$route.name;
      switch(route) {
        case 'home':
          this.home = true;
        break;
        case 'gallery':
          this.gallery = true;
        break;
        case 'engineers':
          this.engineers = true;
        break;
        case 'blog':
          this.blog = true;
        break;
        case 'contact':
          this.contact = true;
        break;
      }
      if (this.startOpen && $(window).width() > 1080) this.open = true;
    },
    data: function() {
      return {
        open: false,
        home: false,
        gallery: false
      };
    },
    props: ['startOpen', 'closeQuick']
  }
</script>
