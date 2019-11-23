<template>
  <div class="wrap-search">
    <div class="search">
      <input @input="handleInput()" type="text" placeholder="搜电影、搜影院" ref="inputValue">
      <span @click="handleBack">取消</span>
    </div>
    <div class="loading" v-if="search_cinema.length === 0 &&　searching">
      <van-loading  color="#ff5f16"/>
    </div>
    <div v-else>
      <div class="search-movie">
      <h5>电影/电视剧/综艺</h5>
      <ul>
        <li v-for="movie in search_movies" :key="movie.id" @click="handleMovie(movie.id)">
          <div>
            <img :src="movie.img | wh('340.460')" alt="">
            <em>
              <h4>{{movie.nm}}</h4>
              <i>{{movie.enm}}</i>
              <i>{{movie.cat}}</i>
              <i>{{movie.rt}}</i>
            </em>
          </div>
          <p>
            <strong style="color: #ff5f16">{{movie.sc}}分</strong>
            <span>购票</span>
          </p>
        </li>
      </ul>
    </div>
    <h5>影院</h5>
    <section>
      <div class="search-cinema" v-for="cinema in search_cinema" :key="cinema.id" @click="handleClick(cinema.id)">
          <div class="left">
            <p>{{cinema.nm}}</p>
            <em>{{cinema.addr}}</em>
          </div>
          <div class="right">
            <span style="color: #ff5f16">{{cinema.sellPrice}}起</span>
            <b>{{cinema.distance}}</b>
          </div>
      </div>
    </section>
    </div>
  </div>  
</template>

<script>
import _ from 'lodash'
import {get} from 'utils/http.js'
import wh from 'filters/img'
import Vue from 'vue'
import {loading} from 'vant'

Vue.use(loading)
export default {
  data() {
    return {
      search_cinema: '',
      search_movies: '',
      searching: false
    }
  },

  methods: {
    handleInput: _.debounce(async function() {
      this.searching = true
      let keyword = this.$refs.inputValue.value;
      let result = await get({
        url: '/ajax/search',
        params: {
          kw: keyword,
          cityId: this.$store.state.cityId,
          stype: -1
        }
      })
      this.search_cinema = result.cinemas.list;
      this.search_movies = result.movies.list
    }, 1000),
    handleClick(id) {
      this.$router.push(`/cinemadetails/${id}`)
    },
    handleBack() {
      this.$router.back()
    },
    handleMovie(id) {
      this.$router.push(`/moviedetails/${id}`)
    }
  }
}
</script>

<style lang="stylus">
@import "../../assets/border.styl"
  .wrap-search
    width 100%
    height 100%
    padding .15rem
    background #ffffff
    box-sizing border-box
    .search
      display flex
      justify-content space-between
      input 
        flex 1
        border none 
        padding .03rem .1rem
        box-sizing border-box
        background #f4f4f4
        height .3rem
      span 
        width .63rem  
        flex-shrink 1
        text-align center
        line-height .3rem
    .search-movie
      margin .15rem 0
      width 100%
      max-height 50%
      overflow-y scroll
      h5 
        font-size .14rem
        color #999
        $border (0 0 1px 0)
      ul 
        width 100%
        li 
          display flex
          justify-content space-between
          margin .1rem 0
          >div
            display flex
            justify-content flex-start
            img 
              width .64rem
            em 
              display flex
              flex-direction column
              justify-content space-between
              padding-left .1rem
          p 
            display flex
            flex-direction column
            justify-content flex-start
            span 
              width .5rem
              height .25rem
              text-align center
              line-height .25rem
              margin-top .1rem
              border 1px solid #ff5f16
              border-radius 4px 
              color #ff5f16
            strong 
              text-align center
    h5 
        font-size .14rem
        color #999
    section 
      height 50%
      overflow-y scroll
      .search-cinema
        display flex
        justify-content space-between
        margin .15rem 0
        .left 
          width 70%
          display flex
          flex-direction column
          justify-content space-around
          p 
            color #191a1b
            font-size .15rem
            width 100%
          em 
            font-size .12rem
            color #797d82
            margin-top 5px
            width 100%
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
        .right
          width 20%
          display flex
          flex-direction column
          justify-content space-around
          align-items center
    .loading
      height 100%
      display flex
      justify-content center
      align-items center
</style>