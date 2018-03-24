/*
 * @Author: xmgtony 
 * @Date: 2018-03-24 18:01:03 
 * @Description: 根据环境的不同获取不同的redis配置,并且实例化一个redis实例
 * @Last Modified by:    
 * @Last Modified time: 
*/

const Redis = require("ioredis");
const isProduction = require("../utils/check-env");

let RedisConfig = require("../config/redis/redis-dev");

if(isProduction) {
    RedisConfig = require("../config/redis/redis-prod");
}

module.exports = new Redis(RedisConfig);