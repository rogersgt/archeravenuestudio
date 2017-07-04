<style lang="scss">
@import "../common/variables.scss";
.post {
    color: black;
    background-color: white;;
    list-style-type: none;
    width: 95%;
    padding: 2.5%;
    margin: 1% 0;
    box-shadow: 0 0 .5rem gray inset;
    border-radius: .1rem;
    h5 {
        color: $gray;
    }
    p {
        font-size: 1.2rem;
    }
}
@media(max-width: 1080px) {
    .post {
        margin: 0;
    }
}
</style>

<template lang="html">
<li class="post">
    <h2>{{ title }}</h2>
    <h5>Posted by: {{ author }}</h5>
    <p>{{ content }}</p>
</li>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        author: {
            type: String
        },
        content: {
            type: String
        }
    }
}
</script>
