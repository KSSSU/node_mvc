/*
 * @Author: xmgtony 
 * @Date: 2018-02-19 20:50:35 
 * @Description: 处理user表业务逻辑层（即sevice服务层）
 * @Last Modified by:    
 * @Last Modified time: 
*/
// const Models = require("../lib/model-loader");
// let User = Models.user;
/**
 * 根据用户名查询用户信息
 * @param {string} username 
 */
// var find_user_by_name = async (username) => {
//     return await User.findOne({
//         where: {
//             username: {$eq: username}
//         }
//     })
// }

// module.exports = {
//     find_user_by_name: find_user_by_name,
// }

/**
 * 模拟用户登录，减少对数据库的依赖
 */

 function User(name,age,birthday,password) {
    this.name = name;
    this.age = age;
    this.birthday = birthday;
    this.password = password;
 }

 let users = [
     new User("test01", 18, "2001-01-02", "123456"),
     new User("test02", 17, "2002-10-02", "123456")
 ];

 function getUserInfoByName(name) {
    if ( !name ) return undefined;
    for (const user of users) {
        if(user.name === name) {
            return user;
        }
    }
    return user;
 }

 module.exports = {
     getUserInfoByName: getUserInfoByName
 }