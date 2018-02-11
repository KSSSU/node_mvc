/*
 * @Author: xmgtony 
 * @Date: 2018-02-11 14:19:50 
 * @Description: 用户控制器
 * @Last Modified by:    
 * @Last Modified time: 
*/

var index = async (ctx,next) => {
        //ctx.response.body = "hello tony!";
        //ctx.response.type = "text/html";
        let model = {
            username: "anonymous",
            title: "基于koa的第一个nodejs应用"
        }
        ctx.render("index.html",model);
    }

module.exports = {
    "GET /" : index
}
