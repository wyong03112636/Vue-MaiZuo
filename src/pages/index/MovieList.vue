<template>
  <div class="wrap-movielist">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(img, index) in images" :key="index">
         <img :src="img" alt="">
      </van-swipe-item>
    </van-swipe>
    <div class="position" @click="handleClick">
      <span class="yo-ico">北京 &#xe638;</span>
    </div>
    <div class="movie-content">
      <ul>
        <router-link tag="li" active-class="active" to="moving"><span>正在热映</span></router-link>
        <router-link tag="li" active-class="active" to="coming"><span>即将上映</span></router-link>
      </ul>
        <div class="movie-list">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      images: [
        "https://static.maizuo.com/v5/upload/044c29d00a2fad92adc62bcf24e44837.jpg?x-oss-process=image/quality,Q_70",
        "https://static.maizuo.com/v5/upload/13777d69b0b94fc99e78b1a467913296.jpg?x-oss-process=image/quality,Q_70"
      ]
    }
  },

  methods: {
    handleClick() {
      this.$router.push('/pos')
    }
  }
}
</script>

<style lang="stylus">
  .wrap-movielist
    position relative
    width 100%
    height 100%
    overflow hidden
    .van-swipe
      width 100%
      .van-swipe-item
        width 100%
        img 
          width 100%
          height 100%
    .position
      position absolute
      top: 18px;
      left: 7px;
      color: #fff;
      z-index: 10;
      font-size: 13px;
      background: rgba(0,0,0,.2);
      height: 30px;
      line-height: 30px;
      border-radius: 15px;
      text-align: center;
      padding: 0 5px;
    .movie-content
      height calc(100% - 2.34rem)
      width 100%
      background-color #fff
      ul
        display flex
        width 100%
        height .5rem
        li
          width 50%
          text-align center
          height 100%
          span 
            display inline-block
            height .48rem
            line-height .5rem
        li.active
          span 
            color #ff5f16
            border-bottom 2px solid #ff5f16
    .movie-list
      width 100%
      height 100%
</style>