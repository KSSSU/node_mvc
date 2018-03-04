/*
 * @Author: xmgtony 
 * @Date: 2018-02-19 19:13:28 
 * @Description: 定义的用户表（user）model
 * @Last Modified by:    
 * @Last Modified time: 
*/
const db = require("../lib/db");

module.exports = db.defineModel("user",{
    username: db.STRING(16),
    age: db.INTEGER,
    sex: db.INTEGER,
    email: db.STRING(64),
    password: db.STRING(32)
});
