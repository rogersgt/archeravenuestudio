<style lang="scss">
@import "../common/variables.scss";
.background { // for music player
    .el-collapse-item__content { background-color: black; }
}
    .engineers {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        margin: 0;
        padding: 0 0 5% 0;
        background-image: url('assets/control_room_side.jpg');
        background-size: cover;
        background-position: center;
        .eng {
            display: inline-block;
            width: 43%;
            margin: 5% 0 0 7%;
            background-color: $transGray;
            vertical-align: top;
            padding: 2.4% 0 5% 0;
            border-radius: .1rem;
            height: 86vh;
            overflow-y: scroll;
            overflow-x: hidden;
            h4 {
                text-align: center;
                color: white;
                font-size: 2rem;
                margin: 0;
                letter-spacing: .15rem;
                font-family: 'Strait', sans-serif;
            }
            img {
                width: 80%;
                margin: 5% 10%;
                border-radius: .1rem;
                &:hover {
                    opacity: .9;
                    filter: grayscale(50%);
                }
            }
            .el-collapse {
                width: 80%;
                margin: 0 10%;
                .el-collapse-item__header {
                    background-color: $transBlack;
                    color: white;
                    font-size: 1.4rem;
                    font-family: 'Strait', sans-serif;
                }
            }
        }
        .second {
            float: right;
            margin: 5% 7% 0 0;
        }
    }
    .listItem {
        transition-duration: .5s;
        -webkit-transition-duration: .5s;
        color: $gray;
        font-size: .9rem;
        &:hover {
            padding-left: 10%;
            color: black;
            cursor: text;
            font-size: 1.2rem;
        }
    }
    .italic { font-style: italic }
    ::-webkit-scrollbar { 
        display: none; 
    }
    @media(max-width: 1080px) {
        .listItem {
            font-size: 1rem;
            color: black;
            &:hover {
                padding-left: 0;
                font-size: 1rem;
            }
        }
        .engineers .eng img:hover {
            opacity: 1;
            filter: grayscale(0%);
        }
        .engineers {
            padding-top: 5.5%;
            overflow-y: scroll;
            overflow-x: hidden;
            .eng {
                display: block;
                width: 100%;
                margin: 2% 0 0 0;
                background-color: $lightGray;
                border-bottom: .2rem solid black;
                overflow-y: auto;
                overflow-x: auto;
                height: auto;
                padding-bottom: 0;
                img {
                    margin-bottom: 0;
                    margin-top: 0;
                }
                img:hover { opacity: 1; }
                img, .el-collapse {
                    margin-left: 0;
                    margin-right: 0;
                    width: 100%;
                }
                h4 {
                    margin-top: 2%;
                    margin-bottom: 2%;
                }
                .el-collapse-item__header { padding-left: 0; }
            }
            .second {
                margin-top: 0;
                padding-top: 0;
                margin-bottom: 5%;
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
            <el-collapse accordion>
                <el-collapse-item title="About">
                    <p>{{kenny.about.p1}}</p>
                    <p class="italic">{{kenny.about.p2}}</p>
                    <p>{{kenny.about.p3}}</p>
                </el-collapse-item>
            </el-collapse>
            <el-collapse accordion>
                    <el-collapse-item title="Client List" name="1">
                        (in no particular order)
                        <div class="listItem" v-for="client in kenny.clients">{{client}}</div>
                    </el-collapse-item>
            </el-collapse>
            <el-collapse accordion>
                <el-collapse-item class="background" title="Sample Tracks">
                    <player></player>
                </el-collapse-item>
            </el-collapse>
        </li>
        <li class="eng second">
            <h4>Eric McCoy</h4>
            <img src="./assets/Eric_headshot.jpeg" alt="Eric McCoy" />
            <el-collapse accordion>
                <el-collapse-item title="About">
                    <p>{{eric.about.p1}}</p>
                    <p class="italic">{{eric.about.p2}}</p>
                    <p>{{eric.about.p3}}</p>
                </el-collapse-item>
            </el-collapse>
            <el-collapse accordion>
                <el-collapse-item title="Client List" name="2">
                    (in no particular order)
                    <div class="listItem" v-for="client in eric.clients">{{client}}</div>
                </el-collapse-item>
            </el-collapse>
            <el-collapse accordion>
                <el-collapse-item title="Sample Tracks">
                
                </el-collapse-item>
            </el-collapse>
        </li>
        <media></media>
        <navigation start-open="true" close-quick="true"></navigation>
    </ul>
</template>

<script>
import navigation from '../common/mobileNav/mobileNav.vue';
import header from '../common/header/header.vue';
import media from '../common/socialMedia.vue';
import player from './audioPlayer.vue';
import engData from './data.json';

export default {
    components: {
        navigation: navigation,
        h: header,
        media: media,
        player: player
    },
    data: function() {
        return {
            kenny: engData.kenny,
            eric: engData.eric
        };
    }
}
</script>
