/*
 * @Author: xmgtony 
 * @Date: 2018-03-24 17:56:52 
 * @Description: redis配置(正式环境),基于ioredis
 * @Last Modified by:    
 * @Last Modified time: 
*/

const RedisConfig = {
    port: 6379,
    host: "127.0.0.1",
    family: 4,
    password: "123456",
    db: 0
}

module.exports = RedisConfig;