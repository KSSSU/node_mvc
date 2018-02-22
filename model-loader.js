/*
 * @Author: xmgtony 
 * @Date: 2018-02-22 14:32:05 
 * @Description: model加载器，应用启动时加载所有的model
 * @Last Modified by:    
 * @Last Modified time: 
*/
const fs = require("fs");
const debug = require("debug")("application:model");

let files = fs.readdirSync(__dirname + "/models");

let jsFiles = files.filter(f => {
    return f.endsWith(".js");
});

module.exports = {};
for (const file of jsFiles) {
    debug("import model from file:",file);
    //注意命名规范,这里用文件名作为model名称
    let fileName = file.substring(0,file.length-3)
    module.exports[fileName] = require(__dirname + "/models/" +file);
}


