<template>
  <div class="wrap-moviedetails">
    <div class="main">
      <span class="yo-ico back" @click="handleClick">&#xe74a;</span>
      <div class="img">
        <img :src="data.albumImg" alt="" />
      </div>
      <div class="introduce">
        <p>
          {{ data.nm }} <span>{{ data.sc }}分</span>
        </p>
        <h3>{{ data.cat }}</h3>
        <h3>{{ data.pubDesc }}</h3>
        <h3>{{ data.star }}</h3>
        <p>{{ data.dra }}</p>
      </div>
      <h4>剧照</h4>
      <div class="wrap-actor">
        <section>
          <div class="little-img" v-for="(img, index) in data.photos" :key="index">
            <img :src="img | wh('360.420')" alt="" />
          </div>
        </section>
      </div>
    </div>
    <footer @click="goCinemaDetails">选座购票</footer>
  </div>
</template>

<script>
import { http } from 'utils/http.js';
import wh from 'filters/img.js';
export default {
  data() {
    return {
      data: '',
    };
  },

  async mounted() {
    let result = await http({
      url: '/ajax/detailmovie',
      params: {
        movieId: this.$route.params.id,
      },
    });
    this.data = result.data.detailMovie;
  },

  methods: {
    handleClick() {
      this.$router.back();
    },
    goCinemaDetails() {
      this.$router.back();
    },
  },
};
</script>

<style lang="stylus">
.wrap-moviedetails
  width 100%
  height 100%
  overflow-y scroll
  background #ffffff
  display flex
  flex-direction column
  .main
    flex 1
    position relative
    .back
      position absolute
      width .3rem
      height .3rem
      border-radius 50%
      text-align center
      line-height .3rem
      background #ffffff
      opacity .5
      top .05rem
      left .05rem
    .img
      width 100%
      img
        width 100%
        margin-top -1.5rem
    .introduce
      padding .1rem
      p
        &:nth-of-type(1)
          display flex
          justify-content space-between
          color: #191a1b;
          font-size .18rem
          height .24rem
          line-height .24rem
          span
            color: #ffb232;
            font-size .18rem
            font-style italic
        &:nth-of-type(2)
          font-size .13rem
          color #797d82
          margin-top 12px
      h3
        font-size .13rem
        color #797d82
        margin-top 4px
    h4
      padding .1rem
      margin-top .1rem
    .wrap-actor
      padding .1rem
      width 100%
      overflow-x scroll
      h4
        font-size .16rem
        color #191a1b
      section
        width 1000%
        display flex
        justify-content flex-start
        .little-img
          width 35%
          margin 0 .07rem
          img
            width 100%
            height 1.2rem
  footer
    height .49rem
    background #ff5f16
    text-align center
    line-height .49rem
    font-size .16rem
    color #ffffff
</style>
