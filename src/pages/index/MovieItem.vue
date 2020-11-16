<template>
  <section :class="type">
    <div class="wrap-moveitem" v-if="type === 'moving' && data.length !== 0">
      <div class="sub-wrap" v-for="item in data" :key="item.id" @click="handleClick(item.id)">
        <div class="wrap-img">
          <img :src="item.img | wh('340.460')" alt="" />
        </div>
        <div class="wrap-introduction">
          <p>{{ item.nm }}<span>2D</span></p>
          <p>
            观众评分 <span>{{ item.sc }}</span>
          </p>
          <p>{{ item.star }}</p>
          <p>{{ item.showInfo }}</p>
        </div>
        <div class="wrap-but">
          <span>购票</span>
        </div>
      </div>
    </div>
    <div class="wrap-moveitem" v-else-if="type === 'coming' && coming_data.length !== 0">
      <div
        class="sub-wrap"
        v-for="item in coming_data"
        :key="item.id"
        @click="handleClick(item.id)"
      >
        <div class="wrap-img">
          <img :src="item.img | wh('340.460')" alt="" />
        </div>
        <div class="wrap-introduction">
          <p>{{ item.nm }}<span>2D</span></p>
          <p style="padding: 8px"></p>
          <p>{{ item.star }}</p>
          <p>上映时间：{{ item.comingTitle }}</p>
        </div>
        <div class="wrap-but">
          <span>预购</span>
        </div>
      </div>
    </div>
    <div class="wrap-moveitem" id="loading" v-else>
      <van-loading color="#ff5f16" />
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import wh from 'filters/img.js';
import { http, get } from 'utils/http.js';
import BScroll from 'better-scroll';
import _ from 'lodash';
import { Toast, Loading } from 'vant';

Vue.use(Toast).use(Loading);
export default {
  props: ['type'],
  data() {
    return {
      data: '',
      coming_data: '',
    };
  },
  beforeCreate() {
    this.limit = 10;
    this.isLoad = true;
  },

  async mounted() {
    let result = await http({ url: '/ajax/movieOnInfoList', params: { token: '' } });
    //正在热映
    if (this.type === 'moving' && this.isLoad) {
      this.isLoad = false;
      this.data = result.data.movieList;
      let movieIds = _.chunk(result.data.movieIds.slice(12), 10);
      let bs = new BScroll('.moving', {
        pullUpLoad: true,
        probeType: 2,
        click: true,
      });
      let page = 0;
      bs.on('pullingUp', async () => {
        if (page < movieIds.length) {
          let result = await http({
            url: '/ajax/moreComingList',
            params: {
              ci: this.$store.state.cityId,
              token: '',
              movieIds: movieIds[page].join(','),
            },
          });
          this.data = [...this.data, ...result.data.coming];
          await this.$nextTick();
          bs.refresh();
          this.isLoad = true;
          page++;
        } else {
          Toast({
            message: '到底了~~',
            position: 'bottom',
            duration: 300,
          });
        }
        bs.finishPullUp();
      });
    }
    //即将热映
    if (this.type === 'coming' && this.isLoad) {
      this.isLoad = false;
      let page = 0;
      let movieIds = _.chunk(result.data.movieIds.slice(8), 10);
      let com_result = await http({
        url: '/ajax/moreComingList',
        params: {
          ci: this.$store.state.cityId,
          token: '',
          limit: this.limit,
          movieIds: movieIds[page].join(','),
        },
      });
      page++;
      this.coming_data = com_result.data.coming;
      let bs = new BScroll('.coming', {
        pullUpLoad: true,
        probeType: 2,
        click: true,
      });
      bs.on('pullingUp', async () => {
        if (page < movieIds.length) {
          let result = await http({
            url: '/ajax/moreComingList',
            params: {
              ci: this.$store.state.cityId,
              token: '',
              limit: this.limit,
              movieIds: movieIds[page].join(','),
            },
          });
          page++;
          this.coming_data = [...this.coming_data, ...result.data.coming];
          await this.$nextTick();
          bs.refresh();
          this.isLoad = true;
        } else {
          Toast({
            message: '到底了~~',
            position: 'bottom',
            duration: 300,
          });
        }
        bs.finishPullUp();
      });
    }
  },
  methods: {
    handleClick(id) {
      this.$router.push(`/moviedetails/${id}`);
    },
  },
};
</script>

<style lang="stylus">
section
  height 100%
  width 100%
  overflow hidden
  .wrap-moveitem
    width 100%
    .sub-wrap
      padding .15rem
      display flex
      width 100%
      .wrap-img
        width .66rem
        flex-shrink 0
        img
          width 100%
      .wrap-introduction
        flex 1
        padding 0 .1rem
        max-width calc(100% - 1.6rem)
        p
          width 100%
          font-size .13rem
          margin-top 4px
          color #797d82
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          width 100%
        p:nth-of-type(1)
          color: #191a1b;
          font-size: 16px;
          height: 22px;
          line-height: 22px;

          span
            font-size: 9px;
            color: #fff;
            background-color: #d2d6dc;
            height: 14px;
            line-height: 14px;
            padding: 0 2px;
            border-radius: 2px;
        p:nth-of-type(2)
          span
            color: #ffb232;
            font-size: 14px;
      .wrap-but
        width .5rem
        flex-shrink 0
        display flex
        align-items center
        span
          display inline-block
          width .5rem
          height .22rem
          border 1px solid #ff5f16
          border-radius 4px
          color #ff5f16
          text-align center
  #loading
    display flex
    justify-content center
    padding-top 30%
</style>
