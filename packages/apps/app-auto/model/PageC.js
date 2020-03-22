/** * 用户信息 */
var mongoose = require('../db.js'),
    Schema = mongoose.Schema;
var sch = new Schema({
    name : { type: String }, //用户账号
    desc : { type: String }, //用户账号
    cid : { type: Number }, //用户账号
    content: {type: String}, //密码
    config:{type:String},//页面配置
    create_time : { type: Date}, //最近登录时间
    updateTime : { type: Date}, //最近登录时间
    user:{type:String},
    category_id:{type:Number}
});
module.exports = mongoose.model('PageConfig',sch);