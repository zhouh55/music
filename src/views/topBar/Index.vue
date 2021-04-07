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

      <div class="status-container">
        <span v-if="!isLogin" @click="handleLoginBtn">登录</span>
        <AvatarDown v-else />
      </div>
    </div>

    <LoginRegisterDialog
      v-if="loginDialogInfos.visible"
      v-bind="loginDialogInfos"
      @close="loginDialogInfos.visible = false"
    />
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineAsyncComponent,
  defineComponent,
  reactive,
  ref
} from 'vue';
import { LoginDialogInfos } from './typing';
import { useStore } from 'vuex';
import { getCookie } from '@/utils/cookie';
import AvatarDown from '@view/TopBar/AvatarDown/index.vue';

export default defineComponent({
  name: 'TopBar',
  components: {
    LoginRegisterDialog: defineAsyncComponent(() =>
      import('./LoginRegisterDialog/index.vue')
    ),
    AvatarDown // 头像下拉列表
  },

  setup() {
    const { state, commit } = useStore();
    commit('updateIsLogin', !!getCookie('token'));

    const isLogin = computed(() => state.isLogin);

    const activeModule = ref<string>('');
    const searchKey = ref<string>('');
    const loginDialogInfos = reactive<LoginDialogInfos>({
      visible: false
    });

    const handleModule = (type: string) => {
      activeModule.value = type;
    };
    const isActiveModule = (type: string): boolean => {
      return activeModule.value === type;
    };
    const handleLoginBtn = () => {
      loginDialogInfos.visible = true;
    };

    return {
      // methods
      handleLoginBtn,
      handleModule,
      isActiveModule,

      // ref
      activeModule,
      searchKey,

      //  reactive
      loginDialogInfos,

      // computed
      isLogin
    };
  }
});
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
