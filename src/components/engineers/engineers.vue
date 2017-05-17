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
            padding: 2.4% 0 1% 0;
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
        }
    }
    ::-webkit-scrollbar { 
        display: none; 
    }
    @media(max-width: 1080px) {
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
                img:hover { opacity: 1; }
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
            <el-collapse accordion>
                </el-collapse-item id="list">
                    <el-collapse-item title="Client List" name="1">
                        (in no particular order) <br />
                        All Get Out <br />
                        Valley Maker <br />
                        Finnegan Bell <br />
                        Danielle Howle <br />
                        Dempsey <br />
                        Alarm Drum <br />
                        ​Discomfort <br />
                        Finding Lucy <br />
                        Prettier Than Matt <br />
                        Vice President <br />
                        Ned and the Dirt <br />
                        Ghosts Of The Kodiak <br />
                        JMichael Peeples <br />
                        KJ Scriven <br />
                        Stagbriar <br />
                        The Reggie Sulivan Band <br />
                        Treadmill Trackstar <br />
                        Baumer <br />
                        ​Russo <br />
                        Rejectioneers <br />
                        Mike Mewborne <br />
                        The Lovely Few <br />
                        Split Halves <br />
                        Daniel Y El Leon <br />
                        Vorov <br />
                        Chad Chambers <br />
                        Syr <br />
                        Jeffery Johnson <br />
                        Restoration Church <br />
                        ​The Juniors <br />
                        ​Deleveled <br />
                        Shamika Dwight <br />
                        The Alone Instrument <br />
                        The Dunder Chiefs  <br />
                        Meet The Sky <br />
                        Southwood <br />
                        Lawrin Green <br />
                        Ned Durrett and the Kindly Gents <br /> 
                        Transformation Church <br />
                        Christine Singh <br />
                        The Sea Wolf Mutiny <br />
                        Bri Benedict <br />
                        Lauren Huse <br />
                        Charming Hala <br />
                        Interpreter <br />
                        Foley <br />
                        Octopus Jones <br />
                        Pan <br />
                        Jonathan Gilpatrick <br />
                        Thomas McGuire <br />
                        Ghosts Of The Great Highway <br />
                        Austin Crane <br />
                        Nicole Dereck <br />
                        Brandon Kean <br />
                        Sarah Hunter <br />
                        Brandon Auten <br />
                        Crossings Church <br />
                        Grace Marie Ward <br />
                        Waylove <br />
                        Chapin United Methodist Church <br />
                        Lexington Presbyterian Church <br />
                        Drew Kennedy <br />
                        Eric Caldwell <br />
                        Whitney Carter <br />
                        Jaunita Wright <br />
                        Forces Of A Street <br />
                        Late Nights <br />
                        Clarice Julious <br />
                        Matt Holmes <br />
                        My Beating Heart <br />
                        Matt Grecko <br />
                        Gordon James <br />
                        Haley Dreis <br />
                        Madison Lucas <br />
                        The Internet <br />
                        Emily McCullum <br />
                        Don Russo <br />
                        Jesse Isley <br />
                        Jeremiah Jones <br />
                        Anne MacCallum <br />
                        Will Wilson <br />
                        Set Ashore <br />
                        Hannah Miller <br />
                        Josh Ridings Band <br />
                        Dell Castillo <br />
                        Sharon Von Fange <br />
                        Michael Cammerata <br />
                        Jon Rooks <br />
                        Andrew Buleson <br />
                        Nathan Poole <br />
                        Matt Rambo <br />
                        Trey Horne Band <br />
                        Ashley Wells <br />
                        Desdemona  <br />
                        Aurora <br />
                        Radius Church <br />
                        Elise Shafer <br />
                        Nathan Hussey  <br />
                        The Kiln <br />
                        The Fierce Pursuit <br />
                        Further Room <br />
                        Emily Franklin <br />
                        City Under Flames <br />
                        Casie Lynn <br />
                        Hello Tomorrow <br />
                        The Hights <br />
                        Missing You Dearly <br />
                        Aaron Russell <br />
                        James Jardin <br />
                        Kyle MacCallum   <br />
                        The Daylight Hours <br />
                        Eastlake <br />
                        Anne Bailey <br />
                        On or Off <br />
                        Spring Break 98 <br />
                        Amy Duren
                    </el-collapse-item>
            </el-collapse>
        </li>
        <li class="eng second">
            <h4>Eric McCoy</h4>
            <img src="./assets/Eric_headshot.jpeg" alt="Eric McCoy" />
            <el-collapse>
                <el-collapse-item title="Client List" name="2">
                    (in no particular order) <br />

                    The Root Doctors <br />
                    Harps <br />
                    Cayla Fralick <br />
                    Postcard Fiction <br />
                    Michael Funderburk <br />
                    Madison Fair <br />
                    Aftermath <br />
                    Jesse Isley <br />
                    Haley Dreis <br />
                    Jordan Spillane <br />
                    Kemp Ridley <br />
                    Marry A Thief <br />
                    Josh Dry <br />
                    The Internet <br />
                    Dell Castillo <br />
                    Paul Brazell <br />
                    Oscar Haselden <br />
                    Gordon James <br />
                    Vatican Radio <br />
                    Daniel Miles <br />
                    Jennifer Morse <br />
                    Like Father Like Son <br />
                    Brett Younker <br />
                    Wade Joye <br />
                    Shandon Baptist <br />
                    Jay Kennedy
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

export default {
    components: {
        navigation: navigation,
        h: header,
        media: media
    }
}
</script>
