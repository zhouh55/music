<template>
  <div class="top-bar-container">
    <div class="left">
      <img src="./images/music.png" alt="" />
      仿Music
    </div>
    <div class="mid">
      <span
        :class="{ active: isActiveModule('found') }"
        @click="handleModule('found')"
        >发现音乐</span
      >
      <span
        :class="{ active: isActiveModule('myMusic') }"
        @click="handleModule('myMusic')"
        >我的音乐</span
      >
      <span
        :class="{ active: isActiveModule('friend') }"
        @click="handleModule('friend')"
        >朋友</span
      >
      <span>商城</span>
      <span>音乐人</span>
    </div>
    <div class="right">
      <el-input
        v-model="searchKey"
        prefix-icon="el-icon-search"
        size="small"
        placeholder="音乐/用户"
      />
      <span>登录</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TopBar',
  setup() {
    const activeModule = ref<string>('');
    const searchKey = ref<string>('');

    const handleModule = (type: string) => {
      activeModule.value = type;
    };

    const isActiveModule = (type: string): boolean =>
      activeModule.value === type;

    return {
      handleModule,
      activeModule,
      searchKey,
      isActiveModule
    };
  }
});
</script>
<style lang="scss" scoped>
@import './Index.scss';
</style>
