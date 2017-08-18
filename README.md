# wxml2axml
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