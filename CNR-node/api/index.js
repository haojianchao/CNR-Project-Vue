var express = require('express');
var router = express.Router();

var admin = require('./admin.js');
var jewelry = require('./jewelry.js');
var watch = require('./watch.js');
var banner = require('./banner.js');
var user = require('./user.js');

var multer = require('multer');
var upload = multer({
    dest: 'uploads/'
})

var defaultRoute = (req, res, next) => {
	if ( req.cookies.loginStatus == '1' ) {
		res.render('index');
	} else {
		res.render('login');
	}
} 

/* GET home page. */
router.get('/', defaultRoute);

router.get('/jewelryRoute',jewelry.defaultRoute);
router.get('/addJewelryRoute',jewelry.addJewelryRoute);
router.post('/addJewelryAction',jewelry.addJewelryAction);
router.get('/delJewelryRoute',jewelry.delJewelryRoute);
router.get('/updateJewelryRoute',jewelry.updateJewelryRoute);
router.post('/updateJewelryAction',jewelry.updateJewelryAction);

router.get('/watchRoute',watch.defaultRoute);
router.get('/addwatchRoute',watch.addwatchRoute);
router.post('/addwatchAction',watch.addwatchAction);
router.get('/delwatchRoute',watch.delwatchRoute);
router.get('/updatewatchRoute',watch.updatewatchRoute);
router.post('/updatewatchAction',watch.updatewatchAction);

//router.get('/bannerRoute', banner.defaultRoute);轮播图
router.get('/getBannerJewelry', banner.getBannerJewelry);//珠宝轮播图
router.get('/getBannerWatch', banner.getBannerWatch);//手表轮播图
router.get('/getLogo', banner.getLogo);//Logo
router.get('/bannerAddRoute', banner.bannerAddRoute);//添加轮播图
router.post('/bannerAddAction', upload.single( 'bannerUrl' ) ,banner.bannerAddAction);//添加轮播图

router.get('/adminRoute', admin.defaultRoute);//登录
router.post('/adminLoginAction', admin.adminLoginAction);//登录提交
router.get('/adminOutRoute', admin.adminOutRoute);//退出

router.get('/getRegisterPhoneCode', user.getRegisterPhoneCode);//注册时验证手机号是否存在
router.post('/addRegisterPhoneAction', user.addRegisterPhoneAction);//存账号密码
router.get('/getLoginMsg', user.getLoginMsg);//存账号密码

module.exports = router;
