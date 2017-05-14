<template lang="html">
  <span>
    <navigation :class="{ hide: mobile }"></navigation>
    <mobile-nav :class="{ hide: !mobile }"></mobile-nav>
  </span>
</template>

<style media="screen">
.hide {
    display: none;
}
</style>


<script src="./controller.js" charset="utf-8"></script>
