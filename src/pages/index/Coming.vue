<template>
  <div class="wrap-coming">
    <MovieItem :type="type"></MovieItem>
  </div>
</template>

<script>
import MovieItem from 'pages/index/MovieItem.vue';
export default {
  data() {
    return {
      type: 'coming',
    };
  },
  components: {
    MovieItem,
  },
};
</script>

<style lang="stylus">
.wrap-coming
  height 100%
</style>
