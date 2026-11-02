const assert = require('assert');
const compiler = require('../index').compiler;
const result = compiler('<view wx:if="{{visible}}" bindtap="open"><include src="card.wxml"/></view>');
assert(result.includes('a:if="{{visible}}"'));
assert(result.includes('onTap="open"'));
assert(result.includes('src="./card.axml"'));
console.log('compiler regression tests passed');
