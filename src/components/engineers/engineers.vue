<style lang="scss">
@import "../common/variables.scss";

    .engineers {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        margin: 0;
        padding: 0;
        background-image: url('assets/control_room_side.jpg');
        background-size: cover;
        background-position: center;
        .eng {
            display: inline-block;
            width: 49.85%;
            margin: 5% 0;
            background-color: $transGray;
            vertical-align: top;
            padding-top: 2.4%;
            border-radius: .1rem;
            height: 80vh;
            overflow-y: scroll;
            overflow-x: hidden;
            h4 {
                text-align: center;
                color: white;
                font-size: 2rem;
                margin: 0;
                letter-spacing: .15rem;
            }
            img {
                width: 80%;
                margin: 5% 10%;
                border-radius: .1rem;
            }
        }
        .second {
            float: right;
        }
    }
    ::-webkit-scrollbar { 
        display: none; 
    }
    @media(max-width: 1080px) {
        .engineers {
            padding-top: 5.5%;
            .eng {
                display: block;
                width: 100%;
                margin: 2% 0 0 0;
                background-color: $lightGray;
                border-bottom: .2rem solid black;
                overflow-y: auto;
                overflow-x: auto;
                height: auto;
            }
            .second {
                margin-top: 0;
            }
        }
    }
    @media(max-width: 1007px) {
        .engineers { padding-top: 5%;}
    }
</style>
<template lang="html">
    <ul class="engineers">
        <h title="Engineers"></h>

        <li class="eng">
            <h4>Kenny McWilliams</h4>
            <img src="./assets/Kenny_headshot.jpeg" alt="Kenny McWilliams" />
        </li>
        <li class="eng second">
            <h4>Eric McCoy</h4>
            <img src="./assets/Eric_headshot.jpeg" alt="Eric McCoy" />
        </li>
        <media></media>
        <navigation></navigation>
    </ul>
</template>

<script>
import navigation from '../common/dynamicNav/dynamicNav.vue';
import header from '../common/header/header.vue';
import media from '../common/socialMedia.vue';

export default {
    components: {
        navigation: navigation,
        h: header,
        media: media
    }
}
</script>
