var Koa = require("koa");
var Router = require("koa-router");
var static_handle = require("./static-handle");

const app = new Koa();
const router = new Router();

app.use(static_handle("/assets/",__dirname));

app.listen(3000);
console.log("server is running in port 3000");

