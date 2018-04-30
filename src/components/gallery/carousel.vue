<template>
<div class="page">
    <div class="block">
        <el-carousel height="100vh" arrow="always" :interval="10000">
            <el-carousel-item :key="item" class="image" v-for="item in pictures" height="100vh" :style="{ 'background-image' : 'url(' + item + ')' }">
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="mobile">
        <img :key="item" v-for="item in pictures" :src="item" alt="">
    </div>
</div>
</template>

<script type="text/javascript">
import liveroom from '../../assets/liveroom1.jpg';
import mic from '../../assets/mic1.jpg';
import drums from '../../assets/drums1.jpg';
import keys from '../../assets/keys1.jpg';

export default {
    data: function() {
        return {
            pictures: [
                liveroom,
                mic,
                drums,
                keys
            ]
        };
    }
}
</script>

<style>
/* @import url("//unpkg.com/element-ui/lib/theme-default/index.css"); */
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.image {
    background-size: cover;
    background-position: center;
}

.mobile {
    display: none;
    width: 100%;
    margin: 0;
    padding: 0;
    margin-top: 6%;
}

.mobile img {
    width: 100%;
    margin: 0;
    padding: 0;
}

@media (max-width: 1080px) {
    .block {
        display: none;
    }
    .mobile {
        display: block;
    }
}
</style>
