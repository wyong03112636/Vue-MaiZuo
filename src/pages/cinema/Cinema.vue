<template>
  <div class="wrap-cinema">
    <div class="wrap-main">
      <div class="tit">
        <h3 @click="chooseCity">{{ $store.state.cityName }}<span class="yo-ico">&#xe638;</span></h3>
        <h3>影院</h3>
        <span class="yo-ico" @click="handleSearch">&#xe624;</span>
      </div>
      <div class="select">
        <span @click="handleShow"> {{ cur_city }}<i class="yo-ico">&#xe638;</i> </span>
        <span> APP订票<i class="yo-ico">&#xe638;</i> </span>
        <span> 最近去过<i class="yo-ico">&#xe638;</i> </span>
      </div>
    </div>

    <section class="jqk" v-show="isShow">
      <!-- <van-overlay :show="isShow" @click="isShow= false" /> -->
      <nav>
        <b
          v-for="(area, index) in area_list"
          :key="area.id"
          @click="handleArea(index, area.name)"
          >{{ area.name }}</b
        >
      </nav>
      <article>
        <b v-for="subarea in sub_area" :key="subarea.id" @click="handleSubArea(subarea.id)">{{
          subarea.name
        }}</b>
      </article>
    </section>
    <section id="scroll">
      <div class="loading" v-if="cinema_list.length === 0">
        <van-loading color="#ff5f16" />
      </div>
      <div class="list-content" v-else>
        <div
          class="cinema-list"
          v-for="item in cinema_list"
          :key="item.id"
          @click="handleClick(item.id)"
        >
          <div class="left">
            <h3>{{ item.nm }}</h3>
            <p>{{ item.addr }}</p>
          </div>
          <div class="right">
            <span> <i>￥</i>{{ item.sellPrice }} <i>起</i> </span>
            <strong>{{ item.distance }}</strong>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { http, get } from 'utils/http.js';
import Vue from 'vue';
import { Loading, Overlay } from 'vant';
import BScroll from 'better-scroll';
import { async } from 'q';
Vue.use(Loading).use(Overlay);
export default {
  data() {
    return {
      cinema_list: [],
      area_list: '',
      sub_area: '',
      isShow: false,
      cur_city: '全部',
    };
  },

  created() {},

  beforeCreate() {
    this.offset = 0;
  },
  methods: {
    getData(offset, id) {
      return get({
        url: '/ajax/cinemaList',
        params: {
          day: 2019 - 11 - 19,
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
          cityId: id,
        },
      });
    },
    handleClick(id) {
      this.$router.push(`/cinemadetails/${id}`);
    },
    chooseCity() {
      this.$router.push('/pos');
    },
    handleArea(index, name) {
      this.cur_city = name;
      this.sub_area = this.area_list[index].subItems.slice(1);
    },
    async handleSubArea(areaid) {
      let resu = await http({
        url: '/ajax/cinemaList',
        params: {
          day: 2019 - 11 - 21,
          offset: 0,
          limit: 20,
          districtId: 4750,
          lineId: -1,
          hallType: -1,
          brandId: -1,
          serviceId: -1,
          areaId: areaid,
          stationId: -1,
          item: '',
          updateShowDay: false,
          reqId: 1574339539499,
          cityId: this.$store.state.cityId,
        },
      });
      this.cinema_list = resu.data.cinemas;
      this.isShow = !this.isShow;
    },
    handleShow() {
      this.isShow = !this.isShow;
    },
    handleSearch() {
      this.$router.push('/search');
    },
  },

  async mounted() {
    let result = await this.getData(this.offset, this.$store.state.cityId);
    this.cinema_list = result.cinemas;
    let bs = new BScroll('#scroll', {
      pullUpLoad: true,
      probeType: 2,
      click: true,
    });
    bs.on('pullingUp', async () => {
      this.offset += 20;
      let scrollResult = await this.getData(this.offset, this.$store.state.cityId);

      this.cinema_list = [...this.cinema_list, ...scrollResult.cinemas];
      await this.$nextTick();
      bs.refresh();
    });
    bs.finishPullUp();

    let addr_result = await http({
      url: '/ajax/filterCinemas',
      params: {
        ci: this.$store.state.cityId,
      },
    });
    this.area_list = addr_result.data.district.subItems.slice(1);
    this.sub_area = this.area_list[0].subItems.slice(1);
  },
};
</script>

<style lang="stylus">
.wrap-cinema
  width 100%
  display flex
  flex-direction column
  height 100%
  background #ffffff
  position relative
  .jqk
    display flex
    justify-content space-between
    height calc(100% - .9rem)
    position absolute
    left 0
    top .93rem
    background #fff
    z-index 10
    nav
      width 30%
      box-sizing border-box
      padding .1rem
      display flex
      flex-direction column
      align-items center
      b
        font-size .16rem
        font-weight normal
        color #191a1b
        padding .05rem 0

    article
      width 70%
      box-sizing border-box
      padding .1rem
      display flex
      justify-content flex-start
      flex-wrap wrap
      b
        font-size .14rem
        color #bbb
        padding 0 .05rem
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
      box-sizing border-box
      .left
        max-width 80%
        flex 1
        h3
          color #191a1b
          font-size .15rem
          font-weight normal
          max-width 80%
          margin-right 0
        p
          margin-right 0
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
        width 20%
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
    height 100%
    flex 1
    justify-content center
    align-items center
</style>
