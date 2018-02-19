/*
 * @Author: xmgtony 
 * @Date: 2018-02-19 13:13:09 
 * @Description: 配置文件加载器，根据开发环境或者产品环境加载不同的配置文件
 * @Last Modified by:    
 * @Last Modified time: 
*/
const fs = require("fs");

/**
 * 根据是否是产品环境来确定加载的配置文件
 * @param {boolean} isProduction true为产品环境，false为开发环境
 */
const devConfig = "./config/database/config-dev.js";
const prodConfig = "./config/database/config-prod.js";
const isProduction = process.env.NODE_ENV === "production";

let configJs = devConfig;
let config;

if(isProduction) {
    configJs = prodConfig;
}
try{
    if(fs.statSync(configJs).isFile()) {
        config = require(configJs);
    }
}catch(err){
    console.log(`Cannot load database config: ${config}`);
}

module.exports = config;
