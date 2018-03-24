/*
 * @Author: xmgtony 
 * @Date: 2018-03-24 18:46:27 
 * @Description: session中间件，存储到redis
 * @Last Modified by:    
 * @Last Modified time: 
*/
const Redis = require("./redis");
const {Store} = require("koa-session2");
const session2 = require("koa-session2");

class SessionStore extends Store {
    constructor() {
        super();
        this.redis = Redis;
    }
 
    async get(sid, ctx) {
        let data = await this.redis.get(`SESSION:${sid}`);
        return JSON.parse(data);
    }
 
    async set(session, { sid =  this.getID(24), maxAge = 1000000 } = {}, ctx) {
        try {
            // Use redis set EX to automatically drop expired sessions
            await this.redis.set(`SESSION:${sid}`, JSON.stringify(session), 'EX', maxAge / 1000);
        } catch (e) {}
        return sid;
    }
 
    async destroy(sid, ctx) {
        return await this.redis.del(`SESSION:${sid}`);
    }
}

module.exports = () => {
    return session2({
        store: new SessionStore()
    });
}