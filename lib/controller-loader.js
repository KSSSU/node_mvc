/*
 * @Author: xmgtony 
 * @Date: 2018-02-10 22:49:51 
 * @Description: Controller注册器，自动扫描存放Controller的文件夹
 * 并按照约定好的格式解析注册controller。减少app.js的修改。
 * @Last Modified by:    
 * @Last Modified time: 
*/
const debug = require("debug")("application:controller");
const fs = require("mz/fs");
const path = require("path");
const Router = require("koa-router");
const router = new Router();

/**
 * @param {string} path 存放Controller的完整目录
 */
function controller_loader(dirPath) {
    let dir = path.join(__dirname,"..",dirPath);
    if (!fs.exists(dir)) {
        debug("the controller path is not exists!");
        return;
    }
    let files = fs.readdirSync(dir);
    let js_files = files.filter(file => {
        return file.endsWith(".js");
    });
    for (const file_name of js_files) {
        let url_mapping = require(path.join(dir,file_name));
        for (const url in url_mapping) {
            if (url.startsWith("GET ")) {
                let url_path = url.substring(4);
                router.get(url_path,url_mapping[url]);
                debug(`Register url mapping of GET method : ${url_path}`);
            } else if (url.startsWith("POST ")) {
                let url_path = url.substring(5);
                router.post(url_path,url_mapping[url]);
                debug(`Register url mapping of POST method : ${url_path}`);
            } else {
                debug("can not mapping! unsupport request method!");
            }
        }
    }
}

module.exports = function(dirPath) {
    let scan_path = dirPath || "/controller";
    controller_loader(scan_path);
    return router.routes();
}
