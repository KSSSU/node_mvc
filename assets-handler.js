/*
 * @Author: xmgtony 
 * @Date: 2018-02-10 18:56:27 
 * @Description: 静态资源处理器模块
 * @Last Modified by:    
 * @Last Modified time: 
*/
const path = require("path");
const mime = require("mime");
const fs = require("mz/fs");

function assets_handler(uri,dir) {
    return async (ctx,next) => {
        let req_path = ctx.request.path;
        if (req_path.startsWith(uri)) {
            let whole_path = path.join(dir,req_path);
            if (fs.exists(whole_path)) {
                ctx.response.body = fs.readFileSync(whole_path);
                ctx.response.type = mime.getType(req_path);
            } else {
                ctx.response.status = 404;
            }
        } else {
            await next();
        }
    }
}

module.exports = assets_handler;