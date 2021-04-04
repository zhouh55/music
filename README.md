# music
模仿网易云音乐


# 记录 Vue

1. 新增加命名规则：
    1.1 组件文件夹采用 cameCase 形式，组件名采用 index.vue
    1.2 单个组件采用 cameCase 形式命名
    1.3 基础组件采用 Base 开头
2. 采用 解构赋值前 请使用 toRaw （尤其是使用 props 的时候）
3. $listeners 已经被移到 $attrs 里面了 
4. 如果父元素 在 setup 中使用了 emits(只对包含在数组中的值) 的话 那么子元素的 事件就不会传递给祖父元素了 
5. components 中的异步组件不能向之前那样写了，得用 defineAsyncComponent 进行包裹
6. key 在 Vue3 中会自动生成
7. 所有的 .sync 都被 v-model 默认替换了
8. v-bind 和 单独的 property 的合并策略变为写的顺序了
9. 使用 defineAsyncComponent 异步加载的时候 在 ts 中必须有返回的值
10. 可以使用 `<T<T>>` 的形式写嵌套类型


# 记录 TS
1. 可使用 as 的形式 改变不可用的值
2. 必须用 any 的 可以使用 /* eslint-disable */ 关闭检测（慎重）