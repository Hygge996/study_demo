const ejs = require('ejs');
const fs = require('fs');

const china = '中国';

const weather = '晴天';

const str = fs.readFileSync('./01_html.html').toString();

const result = ejs.render(str, { china, weather});

console.log(result);
