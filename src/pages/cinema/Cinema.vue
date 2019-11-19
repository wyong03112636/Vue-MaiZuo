<template>
  <div class="wrap-cinema">
      <div class="wrap-main">
        <div class="tit">
          <h3>北京<span class="yo-ico">&#xe638;</span></h3>
          <h3>影院</h3>
          <span class="yo-ico">&#xe624;</span>
        </div>
        <div class="select">
          <span>
            全城<i class="yo-ico">&#xe638;</i>
          </span>
           <span>
            APP订票<i class="yo-ico">&#xe638;</i>
          </span>
           <span>
            最近去过<i class="yo-ico">&#xe638;</i>
          </span>
        </div>
      </div>
      <section v-show="cinema_list.length !== 0" id="scroll">
          <div class="loading" v-if="cinema_list.length === 0">
            <van-loading color="#ff5f16"/>
          </div>
         <div class="list-content" v-else>
          <div class="cinema-list" v-for="item in cinema_list" :key="item.id">
            <div class="left">
              <h3>{{item.nm}}</h3>
              <p>{{item.addr}}</p>
            </div>
            <div class="right">
              <span>
               <i>￥</i>{{item.sellPrice}} <i>起</i>
              </span>
              <strong>{{item.distance}}</strong>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import {http, get} from 'utils/http.js'
import Vue from 'vue';
import { Loading } from 'vant';
import BScroll from 'better-scroll'
import { async } from 'q';
Vue.use(Loading);
export default {
  data() {
    return {
      cinema_list: []
    }
  },
  beforeCreate() {
    this.offset = 0
  },
  methods: {
    getData(offset) {
      return get({
      url: '/ajax/cinemaList',
      params: {
        day: 2019-11-19,
        offset,
        limit: 20,
        districtId: -1,
        lineId: -1,
        hallType: -1,
        brandId: -1,
        serviceId: -1,
        areaId: -1,
        stationId: -1,
        item: '',
        updateShowDay: true,
        reqId: 1574164573572,
        cityId: 1
      }
    })
    }
  },

  async mounted() {
    let result = await this.getData(this.offset)
    this.cinema_list = result.cinemas
    let bs = new BScroll('#scroll',{
       pullUpLoad: true,
        probeType: 2
    })
    bs.on('pullingUp', async () => {
      this.offset += 20;
      let scrollResult = await this.getData(this.offset);

      this.cinema_list = [
        ...this.cinema_list,
        ...scrollResult.cinemas
      ]
      await this.$nextTick()
      bs.refresh()
    })
    bs.finishPullUp()
  }
}
</script>

<style lang="stylus">
  .wrap-cinema
    width 100%
    display flex
    flex-direction column
    height 100%
    background #ffffff
    .wrap-main
      .tit
        height .44rem
        display flex
        padding 0 .1rem
        justify-content space-between
        h3
          line-height .44rem
          color: #191a1b;
          &:nth-of-type(1)
            font-size .13rem
          &:nth-of-type(2)
            font-size .17rem
        span 
          font-size .18rem
          line-height .44rem
          color #191a1b
          font-weight bold
      .select
        height .49rem
        display flex
        justify-content space-around
        span 
          line-height .44rem
    section 
      flex 1
      overflow hidden
      
      .cinema-list
        padding .15rem
        display flex
        justify-content space-between
        .left
          max-width 80%
          flex 1
          h3
            color #191a1b
            font-size .15rem
            font-weight normal
            max-width 80%
          p
            color #797d82
            font-size .12rem
            margin-top 5px
            max-width 80%
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
        .right
          width .7rem
          flex-shrink 1
          display flex
          flex-direction column
          span 
            color #ff5f16
            text-align center
            i 
              font-size .12rem
          strong 
            font-weight normal
            margin-top 5px
            color #797d82
            text-align center
    .loading
      display flex
      flex 1
      justify-content center
      align-items center
</style>