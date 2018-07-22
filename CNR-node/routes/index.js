var express = require('express');
var router = express.Router();

var admin = require('./admin.js');
var jewelry = require('./jewelry.js');
var watch = require('./watch.js');
var banner = require('./banner.js');

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

router.get('/bannerRoute', banner.defaultRoute);//轮播图
router.get('/bannerAddRoute', banner.bannerAddRoute);//添加轮播图
router.post('/bannerAddAction', upload.single( 'bannerUrl' ) ,banner.bannerAddAction);//添加轮播图

router.get('/adminRoute', admin.defaultRoute);//登录
router.post('/adminLoginAction', admin.adminLoginAction);//登录提交
router.get('/adminOutRoute', admin.adminOutRoute);//退出

module.exports = router;
