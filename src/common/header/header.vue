<template lang="html">
  <ul class="header">
    <li>
      <h1>{{ title }}</h1>
    </li>
    <li>
      <img class="floatLogo" src="assets/logo.png" alt="">
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
