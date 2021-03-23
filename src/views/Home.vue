<template>
  <div class="home">
    <Top class="top-container" />
    <router-view class="module-container" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Top from './top/Index.vue';
export default defineComponent({
  components: {
    Top
  },

  // emits: [ 'addBook' ],
  // emits 校验 emit 提交事件的
  // emits: {
  //   addBook: (polyary: Array<string>) => {
  //     console.log(polyary);

  //     return true;
  //   } // 必须箭头函数
  // },

  setup(props, ctx) {
    console.log(ctx);
    const componentName = ref<string>('Found');

    return {
      componentName
    };
  }
});
</script>
<style lang="scss" scoped>
@import './Home.scss';
</style>
