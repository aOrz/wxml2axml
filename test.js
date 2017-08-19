let wxml2axml = require('./index')
let str = `<template name="gotopBtn">
<view class="gotopBtn" bindtap="gototop" wx:if="{{top!==0}}">
    <img src="../../image/goback_top.png">
</view>
</template>
`
let out = wxml2axml.compiler(str);

console.log(out)