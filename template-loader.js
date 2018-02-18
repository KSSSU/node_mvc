/*
 * @Author: xmgtony 
 * @Date: 2018-02-10 17:20:09
 * @Description: 模板加载器，暂时支持nunjucks模板引擎，后续会支持更多其他模板引擎。
 * 该加载器会将模板的视图渲染方法注入到koa的上下文中，比如nunjucks是将render方法注入ctx上
 * @Last Modified by: 
 * @Last Modified time: 
 */

 var nunjucks = require("nunjucks");

 /**
  * 初始化nunjucks配置环境
  * @param {string} view_path 视图存放路径
  * @param {object} options 配置参数，参考nunjucks官方文档
  */
 function nunjucksEnvInitial(view_path,options) {
    let autoescape = options.autoescape == undefined?true:options.autoescape,
    throwOnUndefined = options.autoescape || false,
    watch = options.watch || false,
    noCache = options.noCache || false,
    environment = new nunjucks.Environment(
        new nunjucks.FileSystemLoader(view_path,{watch:watch,noCache:noCache}),
        {
            autoescape: autoescape,
            throwOnUndefined: throwOnUndefined
        }
    );
    //加载传入的过滤器
    if (undefined != options.filters) {
        for (const filter_name in options.filters) {
            environment.addFilter(filter_name,options.filters[filter_name]);
        }
    }
    return environment;
 }

 /**
  * 绑定视图渲染函数到koa上下文ctx上
  * @param {string} view_path 
  * @param {object} options 
  */
 function nunjucks_template_loader(view_path,options) {
    let env = nunjucksEnvInitial(view_path,options);
    return async (ctx,next) => {
        ctx.render = function(view,model) {
            ctx.response.body = env.render(view,Object.assign({},ctx.state || {},model || {}));
            ctx.response.type = "text/html";
        }
        await next();
    }
 }

 //导出
 module.exports = {
     nunjucks_template_loader: nunjucks_template_loader,
 };



