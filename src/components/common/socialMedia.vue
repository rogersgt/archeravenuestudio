<style lang="scss">
    #socialMedia {
        width: 5%;
        margin: 0;
        margin-right: -7%;
        padding: 0;
        position: fixed;
        z-index: 25;
        top: 13%;
        right: 1%;
        transition-duration: 1s;
        -webkit-transition-duration: 1s;
        li {
            display: inline-block;
            width: 100%;
            img {
                width: 100%;
                border-radius: .2rem;
                opacity: .9;
            }
            &:hover {
                cursor: pointer;
                img {
                    opacity: 1.0;
                }
            }
        }
        .shrink img {
            width: 88%;
            margin: 0 6%;
        }
    }
</style>
<template>
    <ul id="socialMedia">
        <li>
            <a href="https://www.instagram.com/archeravenuestudio/" target="_blank"><img src="assets/instagram.png" /></a>
        </li>
        <li class="shrink">
            <a href="https://www.facebook.com/archeravenuestudio/" target="_blank"><img src="assets/facebook.png" /></a>
        </li>
    </ul>
</template>
<script>
    export default {
        created: function() {
            $(document).ready(() => {
                setTimeout(() => {
                    $('#socialMedia').css('margin-right', '0');
                }, 500);
            });
        }
    }
</script>