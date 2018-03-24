/*
 * @Author: xmgtony 
 * @Date: 2018-02-11 03:09:36 
 * @Description: 项目主文件
 * @Last Modified by:    
 * @Last Modified time: 
*/
var Koa = require("koa");
var Router = require("koa-router");
var body_parser = require("koa-bodyparser");
var assets_handler = require("./lib/assets-handler");
var template_loader = require("./lib/template-loader");
var logger_info = require("./lib/logger-info");
var controllers_loader = require("./lib/controller-loader");
const debug = require("debug")("application:main");
const env_mode = require("./utils/check-env");

debug(`NODE_ENV: ${process.env.NODE_ENV}`);

const port = 3000;
const app = new Koa()
const router = new Router();
const template = template_loader.getTemplate();

//打印请求方法和处理请求时间
app.use(logger_info());
//处理静态资源
app.use(assets_handler("/assets/",__dirname));
//解析post请求
app.use(body_parser());
//注入模板加载器
app.use(template("views",{noCache:!env_mode,watch:!env_mode}));
//加载controller
app.use(controllers_loader());
//监听端口
app.listen(port);
console.log(`server is running in port ${port},^_^`);

