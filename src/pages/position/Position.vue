<template>
  <div class="wrap-position">
    <div class="wrap-title">
      <div class="title">
        <span class="yo-ico" @click="handleClick" >&#xe773;</span>
        <h3>当前城市 -</h3>
      </div>
      <div class="search">
        <input type="text" placeholder="请输入城市名或拼音">
        <span class="yo-ico">&#xe624;</span>
      </div>
    </div>
    <van-index-bar :index-list="indexList" highlight-color="#ff5f16">
      <section>
        <van-index-anchor index="定位" class="city-title"></van-index-anchor>
        
        <p><span>北京</span></p>
         <van-index-anchor index="热门" class="city-title"></van-index-anchor>
        
        <p><span>北京</span><span>上海</span><span>广州</span><span>深圳</span></p>
      </section>

      <section>
        <div v-for="(city, key) in cityList" :key="key">
          <van-index-anchor :index="key" class=" city-title-letter">{{key}}</van-index-anchor>
          <div class="city-list ">
            <div class="city-item" v-for="c in city" :key="c.id">
              {{c.nm}}
            </div>
          </div>
        </div>
      </section>
    </van-index-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import { IndexBar, IndexAnchor } from 'vant';
import _ from 'lodash'
import { get } from 'utils/http.js'
Vue.use(IndexBar).use(IndexAnchor);
export default {
  data() {
    return {
      cityList: {}
    }
  },

  methods: {
    handleClick() {
      this.$router.back()
    }
  },

  created() {
    this.indexListInit = [
      '定位','热门'
    ]
  },

  computed:{
    indexList() {
      return [
        ...this.indexListInit,
        ...Object.keys(this.cityList)
      ]
    }
  },

  async mounted() {
   let result =  await get({
     url: '/dianying/cities.json'
   })
   let groupResult = _.groupBy(result.cts, (value) => {
     return value.py.substr(0, 1).toUpperCase()
   })
   let reducedResult = Object.keys(groupResult).sort().reduce((obj, key) => {
      obj[key] = groupResult[key]
      return obj
    }, {})
    this.cityList = reducedResult
  }
}
</script>

<style lang="stylus">
  .wrap-position
    display flex
    flex-direction column
    width 100%
    height 100%
    .wrap-title
      width 100%
      flex-shrink 1 
      height auto
      .title
        height .44rem
        background #ffffff
        position relative
        h3
          line-height .44rem
          text-align center
          font-size .17rem
        span 
          position absolute
          font-size .25rem
          left .08rem
          top .03rem 
      .search
        width 100%
        padding .08rem .12rem
        height .49rem
        box-sizing border-box
        position relative
        input 
          width 100%
          height 100%
          border none 
          background #ffffff
          padding-left .25rem
          box-sizing border-box
        span 
          position absolute
          top .08rem
          left .13rem
          font-size .2rem
    .van-index-bar
      flex 1 
      overflow-y scroll  
      section 
        background #ffffff
        // padding .15rem
        height auto
        h3
          font-size .13rem
          color #797d82
          margin-bottom .1rem
        p
          height auto
          display flex
          justify-content flex-start
          flex-wrap wrap
          span 
            display inline-block
            height .3rem
            background-color #f4f4f4
            line-height .3rem
            border-radius 3px
            box-sizing border-box
            margin 5px 7.5px
            font-size .14rem
            color #191a1b
            width 1.12rem
            text-align center
        .city-title-letter
          background-color: #f4f4f4;
          color: #797d82;
          height: 30px;
          line-height: 30px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          .van-index-anchor
            padding 0
        .city-list
          width 100%
          padding 0 .15rem
          .city-item
            font-size .14rem
            line-height  .48rem
</style>