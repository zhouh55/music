// 登录 注册 弹窗
<template>
  <BaseDialog
    v-bind="$attrs"
    :title="isLoginInterface ? ' 登录' : '注册'"
    width="25%"
    @handleSubmit="handleSubmit"
  >
    <el-form class="body-container" label-width="auto">
      <el-form-item v-if="!isLoginInterface" label="姓名">
        <el-input v-model="userFormData.name" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="账号">
        <el-input v-model="userFormData.account" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="userFormData.password"
          placeholder="请输入密码"
        />
      </el-form-item>
    </el-form>
    <el-link href="#" type="primary" @click="handleChangeBtn">
      {{ isLoginInterface ? '去注册！' : '去登录！' }}
    </el-link>
  </BaseDialog>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  defineAsyncComponent,
  ref,
  computed
} from 'vue';
import { LoginResult, UserFormData } from './typing';
import { ResopnseData } from '@/publicType/index';
import axios from '@/utils/axios/index';
import { setCookie } from '@/utils/cookie/index';
export default defineComponent({
  components: {
    BaseDialog: defineAsyncComponent(() =>
      import('@/components/BaseDialog/index.vue')
    )
  },
  // emits: [ 'close' ],
  setup(props, { emit }) {
    const dialogType = ref<string>('login');
    const isLoginInterface = computed(() => dialogType.value === 'login');

    const userFormData = reactive<UserFormData>({
      account: '',
      password: '',
      name: ''
    });

    const handleChangeBtn = () => {
      dialogType.value = isLoginInterface.value ? 'register' : 'login';
    };

    const login = async () => {
      const data: ResopnseData = await axios.post('/api/login', userFormData);

      if (data?.code !== 200) return;

      const token = (data.data as LoginResult).token;
      setCookie('token', token);
      emit('close');
    };

    const register = async () => {
      const data = await axios.post('/api/register', userFormData);
      console.log(data);
    };

    const handleSubmit = () => {
      if (isLoginInterface.value) login();
      else register();
    };

    return {
      userFormData,
      isLoginInterface,

      // methods
      handleSubmit,
      handleChangeBtn
    };
  }
});
</script>
