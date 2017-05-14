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






<script src="./controller.js" charset="utf-8"></script>
