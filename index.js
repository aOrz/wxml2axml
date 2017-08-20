const parse5 = require('parse5');

function genAst (ast) {
    let {childNodes, attrs, content = {}, tagName} = ast;
    if (attrs) {
        ast.attrs = attrs.map(item => {
            let {name, value} = item;
            if((tagName === 'include' || tagName === 'import') && name === 'src') {
                value = value.replace(/\.wxml$/i, '.axml');
                value = value[0] === '.' ? value : './' + value;
            }
            return {
            name: name.replace(/^wx\:/, 'a:').replace(/^bind(.*)/, (rep, $1) => {
                return `on${$1[0].toUpperCase()}${$1.slice(1)}`;
            }),
                value
            };
        })
    }

    if (childNodes) {
        ast.childNodes = childNodes.map(item => {
            return genAst(item);
        })
    }
    if (content.childNodes) {
        ast.content.childNodes = content.childNodes.map(item => {
            return genAst(item);
        })
    }
    ast.tagName = ast.tagName === 'img' ? 'image': ast.tagName
    return ast;
}

function compiler (html) {
    const document = parse5.parseFragment(html);
    genAst(document)
    // console.log(document)
    
    const axml = parse5.serialize(document);
    return unescapeHTML(axml);
}

function unescapeHTML (a) {
    a = "" + a;  
    return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");  
}

module.exports = {
    compiler: compiler
}