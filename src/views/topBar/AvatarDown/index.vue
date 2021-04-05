<template>
  <el-dropdown>
    <el-avatar icon="el-icon-user-solid" size="medium " />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item> 个人中心 </el-dropdown-item>
        <el-dropdown-item> 我的消息 </el-dropdown-item>
        <el-dropdown-item> 我的等级 </el-dropdown-item>
        <el-dropdown-item> VIP会员 </el-dropdown-item>
        <el-dropdown-item> 个人设置 </el-dropdown-item>
        <el-dropdown-item> 实名认证 </el-dropdown-item>
        <el-dropdown-item @click="handleOut"> 退出 </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts">
import { removeCookie } from '@/utils/cookie';
import { useStore } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const store = useStore();
    const handleOut = () => {
      const isDelSuccess = removeCookie('token');
      if (!isDelSuccess) return;

      store.commit('updateIsLogin', false);
    };

    return {
      handleOut
    };
  }
});
</script>
