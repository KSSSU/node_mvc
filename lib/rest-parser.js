/*
 * @Author: xmgtony 
 * @Date: 2018-03-04 20:32:00 
 * @Description: 响应reset请求,返回json。如果有需要可以基于内容协商来响应不同格式的数据，
 * 因js对json数据天生友好，所以这里固定返回json格式数据
 * 这里约定以/api/开头的url为rest请求。
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
            try {
                await next();
            } catch(e) {
                ctx.response.status = 400;
                ctx.response.type = MEDIA_TYPE;
                ctx.response.body = {
                    code: e.code || "internal:unknown_error",
                    message: e.message || ""
                }
            }
        } else {
            await next();
        }
    }
}

function ApiError(code, message) {
    this.code = code || "internal:unknown_error";
    this.message = message || "";
}

//导出
module.exports = {
    restParser: restParser,
    ApiError: ApiError
}

