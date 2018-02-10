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
var assets_handler = require("./assets-handler");
var template_loader = require("./template-loader");
var logger_info = require("./logger-info");

const env_mode = process.env.NODE_ENV === "production";
const port = 3000;
const app = new Koa();
const router = new Router();
const nunjucks_template_loader = template_loader.nunjucks_template_loader;
//打印请求方法和处理请求时间
app.use(logger_info());
//处理静态资源
app.use(assets_handler("/assets/",__dirname));
//解析post请求
app.use(body_parser());
//注入模板加载器
app.use(nunjucks_template_loader("views",{noCache:!env_mode,watch:!env_mode}));
//加载controller
app.use(controllers_loader());
//监听端口
app.listen(port);
console.log(`server is running in port ${port}`);

