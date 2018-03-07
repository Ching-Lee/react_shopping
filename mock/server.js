const Koa = require('koa');
const Router = require('koa-router');
const KoaBody=require('koa-body');
const app = new Koa();
const router = new Router();
const koaBody=new KoaBody();

// 首页 —— 广告（超值特惠）
const homeAdData = require('./home/ad.js');

// 首页 —— 推荐列表（猜你喜欢）
const homeListData = require('./home/list.js');


router.get('/api/homead', async (ctx) => {
    ctx.body = homeAdData
});

router.get('/api/homelist/:city/:page', async (ctx) => {
    // 参数
    const params = ctx.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    console.log('当前城市：' + paramsCity);
    console.log('当前页数：' + paramsPage);

    ctx.body = homeListData;
});

const searchListData=require('./search/list');
//搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', async (ctx) => {
    // 参数
    const params = ctx.params;
    const paramsPage = params.page;
    const paramsCity = params.city;
    const paramsCategory = params.category;

    console.log('当前页数：' + paramsPage);
    console.log('当前城市：' + paramsCity);
    console.log('当前类别：' + paramsCategory);

    ctx.body = searchListData;
});


//详情页

//获取商家信息
const infoData=require('./detail/info');
router.get('/api/detail/info/:id', async (ctx) => {
    // 参数
    const params = ctx.params;
    const paramsId = params.id;

    console.log('当前商家id：' + paramsId);


    ctx.body = infoData;
});
//获取评论信息
const comment=require('./detail/comment');
router.get('/api/detail/comment/:page/:id', async (ctx) => {
    // 参数
    const params = ctx.params;
    const paramsId = params.id;

    console.log('当前商家id：' + paramsId);


    ctx.body = comment;
});


//用户订单列表
const orderList = require('./orderlist/orderList.js');
router.get('/api/orderlist/:username',  async (ctx) =>  {
    console.log('订单列表');

    const params = ctx.params;
    const username = params.username;
    console.log('用户名：' + username);

    ctx.body = orderList;
});


//提交评论

router.post('/api/submitComment',koaBody ,async (ctx)=>{
    console.log('提交评论');

    // 获取参数
    console.log(ctx.request.body);

    ctx.body = {
        errno: 0,
        msg: 'ok'
    }
});



/*
router.post('/api/post',koaBody,async (ctx) => {
    ctx.body = JSON.stringify(this.request.body);
});

*/



// 开始服务并生成路由
app.use(router.routes(), router.allowedMethods());
app.listen(3000);
