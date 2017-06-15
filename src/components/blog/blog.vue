<style lang="scss">
@import "../common/variables.scss";
#blog {
    width: 100%;
    margin: 0;
    padding: 5% 0 0 0;
    background-image: url('assets/control_room_side.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    overflow: scroll;
    .box {
        width: 70%;
        margin: .5% 10%;
        padding: 5%;
        border-radius: .1rem;
        box-shadow: 0 0 .3rem $gray;
        background-color: $transWhite;
    }
    .filter {
        background-color: $transBlack;
        color: white;
    }
}
</style>

<template lang="html">
    <section id="blog">
        <h title="Blog"></h>
        <div class="box filter">
            Filter results
        </div>
        <div class="box blogs">
            <h3>Blog Posts from Archer Avenue</h3>
            <ul>
                <post v-for="post in posts" post="post"></post>
            </ul>
        </div>
        <navigation></navigation>
    </section>
</template>

<script>
import head from '../common/header/header.vue';
import navigation from '../common/dynamicNav/dynamicNav.vue';
import post from './post.vue';

export default {
    components: {
        h: head,
        navigation: navigation,
        post: post
    },
    data: function () {
        return {
            posts: [
                {
                    title: 'First Post',
                    author: 'Kenny',
                    content: 'Stuff and things and things and stuff man.'
                }
            ]
        };
    }
}
</script>