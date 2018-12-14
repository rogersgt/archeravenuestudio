<style lang="scss">
@import "./footer.scss";
</style>

<template>
  <footer id="foot">
    <ul>
      <li v-on:click="navigate('home')"><img class="smallLogo" src="logo.png"/>rcher Avenue</li>
      <li v-on:click="open('https://www.facebook.com/archeravenuestudio')"><i class="fa fa-facebook-official" aria-hidden="true"></i> Facebook</li>
      <li v-on:click="open('https://www.instagram.com/archeravenuestudio/')"><i class="fa fa-instagram" aria-hidden="true"></i> Instagram</li>
      <li v-on:click="navigate('contact')"><i class="fa fa-envelope" aria-hidden="true"></i> Email</li>
      <li v-on:click="navigate('admin')"><img class="smallLogo" src="logo.png"/>dmin</li>
    </ul>
  </footer>
</template>

<script>
export default {
  methods: {
    navigate: function(path) {
      this.$router.push({ name: path });
    },
    open: function(url) {
      window.open(url, '_blank');
    }
  }
}
</script>
