<template>
  <div class="home">
    <TopBar class="top-container" />
    <router-view class="module-container" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { ComponentName } from './typing';
import TopBar from './TopBar/index.vue';
export default defineComponent({
  components: {
    TopBar
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

    // const componentName = ref<string>('Found');
    // const componentName = readonly<object>( { a: 1});

    const componentName = reactive<ComponentName>({ a: 1, b: 2 });
    // const { a, b } = toRefs(componentName);
    // a.value = 2333;
    // const c = 11;
    componentName.a = 3;
    // console.log(a, b);

    // const componentName = markRaw<object>( { a: 1} );
    console.log(componentName);

    return {};
  }
});
</script>
<style lang="scss" scoped>
@import './Home.scss';
</style>
