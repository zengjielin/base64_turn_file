// base64转文件

/**
 * @param {String} base64_str base64编码
 * @param {String} file_name 输出文件名
 */
var fs = require('fs');

function base64_decode(base64_str, file_name) {
    var bitmap = new Buffer(base64_str, 'base64');
    fs.writeFileSync(file_name, bitmap);
}

// 用法示例
base64_decode(base64_str, 'a.mp3');