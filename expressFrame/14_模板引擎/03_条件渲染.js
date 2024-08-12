const ejs = require('ejs');
const fs = require('fs');

let isLogin = true;

const html = fs.readFileSync('./01_html.html').toString();

let result = ejs.render(html, {isLogin});

console.log(result);
  
