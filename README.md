## 介绍
实现点击一个锚点（导航），跳转到对应的区块；容器滚动时，对应的锚点高亮；
类似如下效果：


## 安装及使用
### 安装
```
npm i scroll-anchor --save
```
### 使用
- Dom结构
```
<div class="main">
    <div class="sections">
        <div class="section">1</div>
        <div class="section">2</div>
        <div class="section">3</div>
        <div class="section">4</div>
    </div>
    <div class="anchor-list">
        <div class="anchor-item">1</div>
        <div class="anchor-item">2</div>
        <div class="anchor-item">3</div>
        <div class="anchor-item">4</div>
    </div>
</div>
```
- 初始化
```
   new ScrollAnchor({
        section: 'section',
        anchor: 'anchor-item',
        paddingTop: 50,
        lastActive: true,
        speed: 3000,
      })
```
### 配置项
```
{
        section: 'section',  // 跳转的板块类名，必填
        anchor: 'anchor-item', // 锚点类名；必填
        paddingTop: 50, // 距离容器多少 下一个高亮；默认：0
        lastActive: true, // 最后一个是否高亮；默认：false
        speed: 3000, //  速度（ms）默认：1000(ms）
        scrollContainer: 'scrollContainer' // 板块的容器，默认：window
}
```
**注意：**
单页面（vue项目中），在组件销毁的情况下，需要调用实例的滚动事件移除
```
 this.$once('hook:beforeDestroy', () => {
        instance.$emit('removeEvent')  // 移除滚动事件
      })
```
##  项目演示地址
http://admin-vuetify.bysir.top:1080/#/anchorScroll