<template>
  <div class="sub-bar-container" :class="triangle">
    <div class="list-box">
      <span
        v-for="item of renderListAry"
        :class="{ 'active-class': activeId === item.id }"
        :key="item.id"
        @click="handleModelBtn(item)"
      >
        {{ item.label }}</span
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, onMounted } from 'vue';
import { RenderListSon, RenderList } from './typing';
export default defineComponent({
  props: {
    renderList: {
      type: Array as PropType<RenderList>,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const triangle = 'found-triangle-class'; // TODO 缺少一个和路由相关映射
    const activeId = ref<number>(-1);

    onMounted(() => {
      if (!props.renderList.length) return;

      activeId.value = props.renderList[0].id;
    });

    // methods
    const handleModelBtn = (item: RenderListSon) => {
      activeId.value = item.id;
      emit('handleModelBtn', item);
    };

    return {
      renderListAry: props.renderList,
      triangle,
      activeId,

      // methods
      handleModelBtn
    };
  }
});
</script>

<style scoped lang="scss">
@mixin triangle-class {
  content: ' ';
  border-bottom: 10px solid red;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
}

.sub-bar-container {
  position: absolute;
  background-color: red;
  min-height: 5px;
  width: 100vw;
  .list-box {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 740px;
    color: white;
    span {
      display: inline-block;
      margin-right: 10px;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 20px;
      &:hover {
        background-color: #9b0909;
      }
    }
    .active-class {
      background-color: #9b0909;
    }
  }
}

.found-triangle-class {
  height: 34px;
  &::before {
    @include triangle-class;
    top: -10px;
    left: 750px;
  }
}

.my-music-triangle-class {
  &::before {
    @include triangle-class;
    top: -10px;
    left: 850px;
  }
}

.friend-triangle-class {
  &::before {
    @include triangle-class;
    top: -10px;
    left: 935px;
  }
}
</style>
