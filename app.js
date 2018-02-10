var Koa = require("koa");
var Router = require("koa-router");
var assets_handler = require("./assets-handler");

const app = new Koa();
const router = new Router();

app.use(assets_handler("/assets/",__dirname));

app.listen(3000);
console.log("server is running in port 3000");

