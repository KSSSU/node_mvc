/*
 * @Author: xmgtony 
 * @Date: 2018-02-19 20:50:35 
 * @Description: 处理user表业务逻辑层（即sevice服务层）
 * @Last Modified by:    
 * @Last Modified time: 
*/
const Models = require("../lib/model-loader");
let User = Models.user;
/**
 * 根据用户名查询用户信息
 * @param {string} username 
 */
var find_user_by_name = async (username) => {
    return await User.findOne({
        where: {
            username: {$eq: username}
        }
    })
}

module.exports = {
    find_user_by_name: find_user_by_name,
}