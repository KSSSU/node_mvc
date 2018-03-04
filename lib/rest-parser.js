/*
 * @Author: xmgtony 
 * @Date: 2018-03-04 20:32:00 
 * @Description: 响应reset请求,返回json。如果有需要可以基于内容协商来响应不同格式的数据，
 * 这里约定以/api/开头的url为rest请求。其实实际开发中基本使用POST和GET协议，很少有PUT和DELETE等其他协议的使用
 * @Last Modified by:    
 * @Last Modified time: 
*/
const MEDIA_TYPE = "application/json";

function restParser(pathPrefix) {
    pathPrefix = pathPrefix || "/api/";
    return async (ctx,next) => {
        //如果是api前缀
        if(ctx.request.path.startsWith(pathPrefix)) {
            //在ctx上绑定rest方法
            ctx.rest = (data) => {
                ctx.response.type = MEDIA_TYPE;
                ctx.response.body = data;
            }
        }
        await next();
    }
}

//导出
module.exports = {
    restParser: restParser
}

