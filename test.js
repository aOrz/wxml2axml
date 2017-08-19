let wxml2axml = require('./index')
let str = `<import src="../../template/score.axml"/>
<import src="../../template/tags.axml"/>
`
let out = wxml2axml.compiler(str);

console.log(out)