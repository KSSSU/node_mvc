/*
 * @Author: xmgtony 
 * @Date: 2018-02-19 13:13:09 
 * @Description: 配置文件加载器，根据开发环境或者产品环境加载不同的配置文件
 * @Last Modified by:    
 * @Last Modified time: 
*/
const fs = require("fs");
const debug = require("debug")("application:config-loader");

/**
 * 根据是否是产品环境来确定加载的配置文件
 * @param {boolean} isProduction true为产品环境，false为开发环境
 */
const devConfigFile = "./config/database/config-dev.js";
const prodConfigFile = "./config/database/config-prod.js";
const commonConfigFile = "./config/database/config-common.js";
const isProduction = process.env.NODE_ENV === "production";

let configFile = devConfigFile;
let config;
let commonConfig;

if(isProduction) {
    configFile = prodConfigFile;
}
try{
    if(fs.statSync(configFile).isFile()) {
        config = require(configFile);
    }
    if(fs.statSync(commonConfigFile).isFile()) {
        commonConfig = require(commonConfigFile);
        config = Object.assign({},config,commonConfig)
    }
}catch(err){
    debug(`Cannot load database config file: ${configFile}`);
}

module.exports = config;
