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
    span {
        color: $lightGray;
        font-size: .8rem;
        &:hover { cursor: pointer; }
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
    <p v-if="!expanded">{{ shortened }}</p>
    <p v-if="expanded">{{ content }}</p>
    <span v-on:click="toggle" v-if="!expanded && content.length > 200">Show more...</span>
    <span v-on:click="toggle" v-if="expanded && content.length > 200">Show less...</span>
</li>
</template>

<script>
export default {
    created: function () {
        this.shortened = this.content.substring(0, 200);
    },
    data: function () {
        return {
            shortened: null,
            expanded: false
        };
    },
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
    },
    methods: {
        toggle: function() {
            this.expanded = !this.expanded
        }
    }
}
</script>
