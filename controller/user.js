/*
 * @Author: xmgtony 
 * @Date: 2018-02-19 22:26:32 
 * @Description: 用户相关的控制器层
 * @Last Modified by:    
 * @Last Modified time: 
*/

const userService = require("../service/user");

/**
 * 用户登录
 * @param {object} ctx 
 */
var userLogin = async (ctx) => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    let user = await userService.getUserInfoByName(username);
    if(user && user.password === password.trim()) {
        ctx.redirect("/user/login_ok");
    } else {
        ctx.redirect("/user/login_err");
    }
} 

var loginOk = async (ctx) => {
    ctx.render("login_ok.html",{});
}

var loginErr = async (ctx) => {
    ctx.render("login_err.html",{
        message: "用户名或者密码不正确"
    })
}

module.exports = {
    "POST /user/login": userLogin,
    "GET /user/login_ok": loginOk,
    "GET /user/login_err": loginErr
}