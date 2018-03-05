/*
 * @Author: xmgtony 
 * @Date: 2018-02-22 21:19:42 
 * @Description: log4js 加载器，根据不同的环境加载不同的log4js配置
 * @Last Modified by:    
 * @Last Modified time: 
*/
const path = require("path");
const log4js = require("log4js");
const isProduction = process.env.NODE_ENV === "production";
const devConfig = "config-dev.json";
const prodConfig = "config-prod.json";

let config = devConfig;
if(isProduction) {
    config = prodConfig;
}
log4js.configure(path.join(__dirname,"..","config/log4js",config));

module.exports = log4js;
