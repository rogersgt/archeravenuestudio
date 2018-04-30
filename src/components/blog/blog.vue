<style lang="scss">
@import "../common/variables.scss";
@import "../common/footer.scss";
#blog {
    width: 100%;
    margin: 0;
    padding: 5% 0 0 0;
    background-image: url('../../assets/controlroom1.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    overflow: scroll;
    .blogList {
        width: 80%;
        margin: .5% 10%;
        padding: 0;
        ul {
            padding: 0;
        }
    }
    .filter {
        background-color: $gunSmoke;
        box-shadow: 0 0 .4rem $lightGray inset;
        color: white;
        padding: 2%;
        width: 76%;
        margin: 0 10%;
        h6 {
            padding-left: .5%;
            font-size: .8rem;
            letter-spacing: .065rem;
        }
        ul {
            width: 60%;
            margin: 0;
            padding: 0;
            li {
                display: inline-block;
                padding: 0;
                margin: 0 1%;
                width: 25%;
                input {
                    width: 100%;
                }
            }
        }
    }
}
.noPosts {
    color: white;
    text-align: center;
    text-shadow: 0 0 .2rem black;
    letter-spacing: .07rem;
}
@media(max-width: 1080px) {
    #blog .blogList {
        width: 100%;
        margin: 0;
        padding: 0;
    }
    #blog .filter {
        margin: 4% 0 0 0;
        background-color: $gray;
        text-align: center;
        padding: 2%;
        width: 96%;
        ul {
            width: 80%;
            margin: .5% 10%;
            padding: 0;
            li {
                width: 100%;
            }
        }
    }
    #blog .blogList ul {
        margin: 0;
    }
}
</style>

<template lang="html">
    <section id="blog">
        <h title="Blog"></h>
        <div class="filter">
            <h6>Display blog posts from the date range below.</h6>
            <ul>
                <li><input type="date" v-model="from"></li>
                <li><input type="date" v-model="to"></li>
            </ul>
        </div>
        <h4 class="noPosts" v-if="posts.length === 0">There are no blogs from this date range...</h4>
        <div class="blogList" v-if="posts.length > 0">
            <!--<h3>Blog Posts from Archer Avenue</h3>-->
            <ul>
                <post :key="post.id" v-for="post in posts" :content="post.content" :title="post.title" :author="post.author"></post>
            </ul>
        </div>
        <navigation start-open="true" close-quick="true"></navigation>
    </section>
</template>

<script>
import head from '../common/header/header.vue';
import navigation from '../common/mobileNav/mobileNav.vue';
import post from './post.vue';

export default {
    created: function() {
        // this.setFilter();
        this.getBlogs();
    },
    components: {
        h: head,
        navigation: navigation,
        post: post
    },
    data: function () {
        return {
            from: '',
            to: '',
            posts: []
        };
    },
    methods: {
        setFilter: function() {
            let from = new Date();
            from.setDate(from.getDate() - 14);
            this.from = this.formatDate(from);
            this.to = this.formatDate(new Date());
        },
        formatDate: (d) => {
            const day = d.getDate() >= 10 ? d.getDate() : `0${d.getDate()}`;
            const month = d.getMonth() + 1 >= 10 ? d.getMonth() + 1 : `0${d.getMonth() + 1}`;
            const result = `${d.getFullYear()}-${month}-${day}`;
            return result;
        },
        getBlogs: function() {
            let protocol = '';
            if (process.env.NODE_ENV === 'production') protocol = 's';
            this.$get(`http${protocol}://${API_HOST}/api/get-blogs`)
            .then(success, err);

            function success(data) {
                console.log(data);
            }

            function err(error) {
                console.log(error);
            }
        }
    }
}
</script>