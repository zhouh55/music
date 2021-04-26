<template>
  <div class="found-container">
    <div class="type-list-container">
      <SubBar :render-list="subList" />
    </div>
    <div class="rotate-img-container">
      <component :is="'TheRecommend'" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SubBar from '@components/SubBar/index.vue';
import TheRecommend from './TheRecommend/index.vue';
export default defineComponent({
  name: 'TheFound',

  components: {
    SubBar,
    TheRecommend
  },

  setup() {
    const subList = [
      {
        id: 1,
        label: '推荐'
      },
      {
        id: 2,
        label: '排行榜'
      },
      {
        id: 3,
        label: '歌单'
      },
      {
        id: 4,
        label: '主播电台'
      },
      {
        id: 5,
        label: '歌手'
      }
    ];
    return {
      subList
    };
  }
});
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
