<template>
  <div class="wrap-moving">
    <MovieItem :type="type"></MovieItem>
  </div>
</template>
<script>
import MovieItem from 'pages/index/MovieItem.vue';
import axios from 'axios';
export default {
  data() {
    return {
      data: '',
      type: 'moving',
    };
  },
  methods: {},

  mounted() {},
  components: {
    MovieItem,
  },
};
</script>

<style lang="stylus">
.wrap-moving
  height calc(100% - .5rem)
</style>
