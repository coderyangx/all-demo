import fs from 'fs';
// import fs from 'node:fs'
fs.writeFileSync('./test.txt', '写入文本内容');

/**
 * @type {fs}
 */

console.log(fs);

const obj = {
  name: 'esmodule',
};

// 如果package.json设置了"type": "module"，则默认为esmodule，不需要加后缀
// 但是此时无法使用commonjs模块，如果要使用的话，需要将文件后缀改为 .cjs
// 如果设置了"main"，则默认为commonjs，需要加后缀

// 帮我写一个 data url，内容是一个html 
// <html><body><h1>你好</h1></body></html>
// data:text/html;base64,PGh0bWw+PGJvZHk+PGgxPue9k+e7n+e7nzwvaDE+PC9ib2R5PjwvaHRtbD4=
// data:text/plain;base64,5L2g5aW9
// 写一个图片的data url
// data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQklEQVR42mNkYGD4z0AaG/

// TODO: api.github.com/user

