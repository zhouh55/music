# music
模仿网易云音乐

# 记录

1、新增加命名规则：
    1.1 组件文件夹采用 cameCase 形式，组件名采用 index.vue
    1.2 单个组件采用 cameCase 形式命名
    1.3 基础组件采用 Base 开头
2、采用 解构赋值前 请使用 toRaw （尤其是使用 props 的时候）
3、$listeners 已经被移到 $attrs 里面了 
4、如果父元素 在 setup 中使用了 emits 的话 那么子元素的 事件就不会传递给祖父元素了 
