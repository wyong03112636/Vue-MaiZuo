<template>
  <div class="index-wrap">
    <main>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <router-view></router-view>
      </transition>
    </main>
    <nav>
      <ul>
        <router-link tag="li" to="/index/movielist" active-class="active">
          <span class="yo-ico">&#xe62e;</span>
          <span>电影</span>
        </router-link>
         <router-link tag="li" to="/index/cinema" active-class="active">
         <span class="yo-ico">&#xe8c0;</span>
          <span>影院</span>
        </router-link>
         <router-link tag="li" to="/index/news" active-class="active">
         <span class="yo-ico">&#xe771;</span>
          <span>资讯</span>
        </router-link>
         <router-link tag="li" to="/index/profile" active-class="active">
         <span class="yo-ico">&#xe620;</span>
          <span>我的</span>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
  .index-wrap
    height 100%
    display flex
    flex-direction column
    main
      flex 1
      height 100%
    nav 
      height .52rem
      background #ffffff
      ul
        display flex
        justify-content space-around
        align-items center
        height 100%
        li
          display flex
          flex-direction column
          justify-content space-around
          align-items center
          height 100%
          font-size .12rem
          &.active
            span 
              color #ff6700
          span 
            color #999
            &:nth-of-type(1)
              font-size .25rem
              line-height .2rem
</style>