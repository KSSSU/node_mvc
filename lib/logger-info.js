/*
 * @Author: xmgtony 
 * @Date: 2018-02-11 13:34:26 
 * @Description: 请求信息打印到控制台，只是为了调试方便
 * @Last Modified by:    
 * @Last Modified time: 
*/
const debug = require("debug")("application:request");
var logger = function () {
    return async (ctx,next) => {
        debug(`request url :${ctx.request.url},request method :${ctx.request.method}`);
        let start_time = new Date().getTime();
        await next();
        let time = new Date().getTime() -  start_time;
        debug(`The time for processing consumption is: ${time}ms`);
        ctx.response.set('X-Response-Time', `${time}ms`);
    }
}

module.exports = logger;