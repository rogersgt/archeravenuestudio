<style lang="scss">
@import "../common/variables.scss";
.post {
    color: black;
    p {
        font-size: 1.2rem;
    }
}
</style>

<template lang="html">
<li class="post">
    <h2>{{ post }}</h2>
</li>
</template>

<script>
export default {
    props: ['post']
}
</script>
