# wxml2axml

<p align="center">
  <a href="https://www.npmjs.com/package/wxml2axml"><img src="https://img.shields.io/npm/v/wxml2axml.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/wxml2axml"><img src="https://img.shields.io/npm/l/wxml2axml.svg" alt="License"></a>
  <br>
</p>

## 安装
`npm i wxml2axml`
### 使用
```javascript
let wxml2axml = require('wxml2axml')
let str = `<!--index.wxml-->
<view class="container">
  <view  bindtap="bindViewTap" class="userinfo">
    <image class="userinfo-avatar" src="{{userInfo.avatarUrl}}" background-size="cover"></image>
    <text class="userinfo-nickname">{{userInfo.nickName}}</text>
  </view>
  <view class="usermotto">
    <text class="user-motto">{{motto}}</text>
  </view>
</view>
`
let out = wxml2axml.compiler(str);

console.log(out)
```
