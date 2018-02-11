/*
 * @Author: xmgtony 
 * @Date: 2018-02-11 13:34:26 
 * @Description: 请求信息打印到控制台，只是为了调试，暂时不记录到文件级别
 * @Last Modified by:    
 * @Last Modified time: 
*/
var logger = function () {
    return async (ctx,next) => {
        console.log(`request url :${ctx.request.url},request method :${ctx.request.method}`);
        let start_time = new Date().getTime();
        await next();
        let time = new Date().getTime() -  start_time;
        console.log(`The time for processing consumption is: ${time}ms`);
    }
}

module.exports = logger;