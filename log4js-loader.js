/*
 * @Author: xmgtony 
 * @Date: 2018-02-22 21:19:42 
 * @Description: log4js 加载器，根据不同的环境加载不同的log4js配置
 * @Last Modified by:    
 * @Last Modified time: 
*/
const log4js = require("log4js");
const isProduction = process.env.NODE_ENV === "production";
const devConfig = "./config/log4js/config-dev.json";
const prodConfig = "./config/log4js/config-prod.json";

let config = devConfig;
if(isProduction) {
    config = prodConfig;
}
log4js.configure(config);

module.exports = log4js;
