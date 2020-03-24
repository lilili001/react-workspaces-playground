const express = require('express');
const app = express();
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
let webpack = require('webpack');
let middle = require('webpack-dev-middleware');
let config =  require('../build/webpack.dev')  ;
let compiler = webpack(config);
app.use(middle(compiler));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userRouter = require('../router/user');
const pageCRouter = require('../router/pageC');
const categoryRouter = require('../router/category');
const pageData = require('../router/pageData');
const attrRouter = require('../router/attr');
app.use('/user', userRouter);
app.use('/pageC', pageCRouter);
app.use('/pageData', pageData);
app.use('/cat', categoryRouter);
app.use('/attr', attrRouter);

app.get('/api/user',(req,res)=>{
    res.json({name:'珠峰架构'})
});
app.listen(3000);