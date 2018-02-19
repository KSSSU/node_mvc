/*
 * @Author: xmgtony 
 * @Date: 2018-02-19 22:26:32 
 * @Description: 用户相关的控制器层
 * @Last Modified by:    
 * @Last Modified time: 
*/

const userLogic = require("../logic/user");

/**
 * 用户登录
 * @param {object} ctx 
 */
var user_login = async (ctx) => {
    let user = await userLogic.find_user_by_name(ctx.query.username);
    console.log(JSON.stringify(user));
} 

module.exports = {
    "GET /user/login": user_login
}