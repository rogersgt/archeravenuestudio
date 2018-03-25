<style lang="scss">
    @import "../common/variables.scss";

    .player {
        width: 90%;
        margin: 5% 0;
        padding: 5%;
        background-color: black;
        border-radius: .2rem;
        .track {
            border: .05rem solid $lightGray;
            border-radius: .3rem;
            color: white;
            padding: 1% 3%;
            font-size: 1rem;
            &:hover {
                background-color: $gunSmoke;
            }
            i:hover, span:hover {
                cursor: pointer;
            }
        }
    }
</style>
<template>
    <div class="player">
        <div class="nowPlaying"></div>
        <div :key="track" class="track" v-for="track in tracks">
            <i v-on:click="play(track)" v-if="!track.isPlaying" class="fa fa-play" aria-hidden="true"></i>
            <i v-on:click="play(track)" class="fa fa-pause" aria-hidden="true" v-if="track.isPlaying"></i> 
            <span v-on:click="restart(track)">{{track.title}} By: {{track.artist}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
                isPlaying: false,
                tracks: [
                    {
                        title: "Ghost",
                        artist: "Badweather",
                        isPlaying: false,
                        audio: new Audio("../../assets/Ghost.mp3")
                    }
                ]
            };
        },
        beforeDestroy: function() {
            this.allTracksOff();
        },
        methods: {
            play: function(track) {
                if (track.audio.paused) track.audio.play();
                else track.audio.pause();
                track.isPlaying = !track.isPlaying;
            },
            restart: function(track) {
                if (track.audio.duration > 0 && track.isPlaying) {
                    track.audio.pause();
                    track.audio.currentTime = 0;
                    track.audio.play();
                } else {
                    track.audio.play();
                }
                track.isPlaying = true;
            },
            allTracksOff: function() {
                this.tracks.map((track) => {
                    if (track.isPlaying) {
                        track.audio.pause();
                        track.isPlaying = false;
                    }
                });
            }
        }
    }
</script>