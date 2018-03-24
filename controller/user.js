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
        ctx.session.user = user;
        ctx.redirect("/user/login_ok");
    } else {
        ctx.redirect("/user/login_err");
    }
} 

var loginOk = async (ctx) => {
    let user = ctx.session.user;
    //检查用户是否登录，没有登录就跳转到首页
    if(!user) {
        ctx.redirect("/");
        return;
    }
    ctx.render("login_ok.html",{user:user});
}

var loginErr = async (ctx) => {
    ctx.render("login_err.html",{
        message: "用户名或者密码不正确"
    })
}

var logout = async (ctx) => {
    //销毁session,跳转到首页
    ctx.session = null;
    ctx.redirect("/");
}

module.exports = {
    "POST /user/login": userLogin,
    "GET /user/login_ok": loginOk,
    "GET /user/login_err": loginErr,
    "GET /user/logout": logout
}