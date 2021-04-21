# music
模仿网易云音乐
## 做项目的意义：不在乎做多少，主要的目的是为了融合新的东西以及试水
### 待使用：grid 布局、scss 高级用法封装到 public.scss 文件中


# 项目记录及思考
1. 使用了 postcss-pxtorem 后不方便调试具体样式，有没有在开发环境下 仍然使用 px 显示？

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


# 项目
1. 退出功能只是前端清除 cookie。导致 之前的 token 仍然能用，是否有其他更好的优化方法。
2. 为什么 token 不放到 Storage 中 要放到 cookie 中呢？
    - 放到 cookie 中的
    好处：浏览器会自动清除。
    坏处：1、会被自动放到 http 请求中，导致请求头过大浪费带宽。
         2、容易导致 xss 攻击
            2.1 什么是 xss 攻击？
    - 放到 Storage：
    坏处：1、localStorage：浏览器关闭不会自动清除（比如 直接关闭浏览器窗口（可通过监听浏览器窗口关闭事件手动清空，但是遇到断电等情况是做不到的））
         2、sessionStorage：浏览器窗口是不会共享的
    好处：cookie 的坏处就是 storage 的好处。
        补充：sessionStorag 会随着浏览器的关闭而清空！