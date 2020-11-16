<template>
  <div class="wrap-details">
    <div class="back"><i class="yo-ico" @click="back">&#xe773;</i></div>
    <div class="wrap-tit">
      <p>{{ cinema_data.nm }}</p>
      <div class="wrap-sele">
        <span>前台兑换</span>
        <span>儿童票</span>
        <span>停车</span>
        <span>3D眼镜</span>
        <i></i>
      </div>
      <div class="wrap-addr">
        <span class="yo-ico">&#xe7ba;</span>
        <p>{{ cinema_data.addr }}</p>
        <span class="yo-ico">&#xe63a;</span>
      </div>
    </div>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(movie, index) in show_data"
          :key="movie.id"
          @click="handleClick(index)"
        >
          <img :src="movie.img | wh('340.460')" alt="" />
        </div>
      </div>
      <div class="angle"></div>
    </div>

    <div class="wrap-movie">
      <h3>
        {{ movie_data.nm }} <span>{{ movie_data.sc }} <i>分</i></span>
      </h3>
      <p>{{ movie_data.desc }}</p>
    </div>

    <div class="wrap-session">
      <div class="wrap-date">
        <span>{{ site_data.dateShow }}</span>
      </div>
      <div class="wrap-site">
        <ul>
          <li v-for="(item, index) in site_data.plist" :key="index">
            <div>
              <em>
                <i>{{ item.tm }}</i>
                <i>22:02散场</i>
              </em>
              <em>
                <i>{{ item.lang }}{{ item.tp }}</i>
                <i>{{ item.th }}</i>
              </em>
            </div>
            <div>
              <span>￥33</span>
              <span>购票</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'assets/swiper.min.css';
import { get } from 'utils/http.js';
import wh from 'filters/img.js';
export default {
  data() {
    return {
      cinema_data: '',
      show_data: '',
      movie_data: '',
      site_data: '',
    };
  },
  methods: {
    handleClick(index) {
      this.movie_data = this.show_data[index];
      this.site_data = this.movie_data.shows[0];
    },
    back() {
      this.$router.back();
    },
  },

  created() {
    this.id = this.$route.params.id;
  },

  async mounted() {
    let result = await get({
      url: '/ajax/cinemaDetail',
      params: {
        cinemaId: this.id,
      },
    });
    this.cinema_data = result.cinemaData;
    this.show_data = result.showData.movies;
    this.movie_data = this.show_data[0];
    this.site_data = this.movie_data.shows[0];
    await this.$nextTick();
    let swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      slideToClickedSlide: true,
    });
  },
};
</script>

<style lang="stylus">
.wrap-details
  width 100%
  height 100%
  background #ffffff
  .back
    height .44rem
    display flex
    justify-content flex-start
    align-items center
    padding-left .15rem
    i
      font-size .25rem
  .wrap-tit
    display flex
    flex-direction column
    align-items center
    justify-content space-around
    height 1.1rem
    p
      font-size .17rem
      color #191a1b
    .wrap-sele
      display flex
      justify-content center
      span
        border 1px solid #ffb232
        font-size .12rem
        color #ffb232
        margin-right .03rem
        display inline-block
        padding 0 .03rem
    .wrap-addr
      display flex
      justify-content space-around
      padding .15rem .14rem 0
      width 100%
      p
        font-size .14rem
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        color #2C3E50
        line-height .3rem
      span
        font-size .2rem
        padding 0 .2rem
  .swiper-container
    height 1.6rem
    padding .15rem 0
    width 100%
    background #eee
    position relative
    .swiper-wrapper
      height 100%
      width 100%
      .swiper-slide
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 300ms;
        transform: scale(0.8);
        img
          width .82rem
          height 1.24rem
      .swiper-slide-active,.swiper-slide-duplicate-active
        transform: scale(1);
    .angle
      border 15px solid #fff
      position absolute
      left 50%
      bottom 0
      margin-left -15px
      border-top 15px solid #eeeeee
      border-left 15px solid #eeeeee
      border-right 15px solid #eeeeee
  .wrap-movie
    width 100%
    display flex
    flex-direction column
    align-items center
    h3
      margin .1rem 0
      font-size .15rem
      color #191a1b
      line-height .18rem
      font-weight normal
      span
        font-size .16rem
        font-style italic
        color #ffb232
        padding-left .05rem
        i
          font-size .12rem
    p
      height .18rem
      color #797d82;
      font-size .13rem
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width 70%
      text-align center
  .wrap-session
    width 100%
    padding .1rem
    box-sizing border-box
    height calc(100% - 2.86rem)
    .wrap-date
      display flex
      justify-content flex-start
      height .49rem
      span
        padding 0 .15rem
        line-height .49rem
    .wrap-site
      width 100%
      height calc(100% - .5rem)
      ul
        height 66%
        overflow-y scroll
        li
          display  flex
          justify-content space-between
          align-items center
          padding .1rem 0
          >div
            &:nth-of-type(1)
              display flex
              justify-content space-between
              width 52%
              em
                display flex
                flex-direction column
                margin .02rem .15rem 0 0
                text-align center
                i
                  font-size .15rem
                  color #191a1b
                  padding 0 .1rem
                  &:nth-of-type(2)
                    font-size .13rem
                    color #797d82
            &:nth-of-type(2)
              font-size .15rem
              color #ff5f16
              line-height .25rem
              span
                &:nth-of-type(2)
                  display inline-block
                  width .5rem
                  height .25rem
                  border 1px solid #ff5f16
                  margin-left .2rem
                  text-align center
                  border-radius 4px
</style>
