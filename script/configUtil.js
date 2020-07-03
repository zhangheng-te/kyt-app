//初始化接口
//var baseurl = 'http://kyt.wh66.cn/api/';
var baseurl = 'https://www.kytapp.com/api/';

var school_url = 'http://www.kytapp.com/Home/School/school.html?id=';

var down_url = 'http://www.kytapp.com/home/yaoyue/download';

var globalData ={
  
  comCourseOutline: baseurl + 'course/comCourseOutline',

  courseOutlineComList: baseurl + 'course/courseOutlineComList',

  faCourseOutline: baseurl + 'course/faCourseOutline',

  courseOutlineFaList: baseurl + 'course/courseOutlineFaList',

  isLogin: baseurl + 'user/isLogin',

  v_courseList: baseurl + 'course/courseList',

  studentwxpay: baseurl + 'order/studentwxpay',

	zfbpay: baseurl + 'order/zfbpay',

  getScorePrice:baseurl+'public/getScorePrice',
  //登录
  login:baseurl+'user/login',
  //登录
  login1:baseurl+'user/mobilelogin',
  //重置密码
  restpassword:baseurl+'user/resetpwd',
  //送短信验证码
  codelogin:baseurl+'sms/send',
  //用户注册
  restuser:baseurl+'user/register',
  //退出登录
  loginout:baseurl+'user/logout',
  //签到日历列表
  signlist:baseurl+'sign/signList',
  //连续签到列表
  signcontinuity_list:baseurl+'sign/signRole',
  //连续签到的次数（登录参看）
  signcontinuity_sishu:baseurl+'sign/signCount',
  //用户签到（需要登录）
  sign:baseurl+'sign/signIn',
  //获取直播分类 有无全部选项
  category:baseurl+'Direct/category',
  //公开课筛选
  directList:baseurl+'Direct/directList',
  //教师端公开课 头部 排行榜
  directBannerList:baseurl+'Direct/directBannerList',
  //课程--教材--获取课程推荐试卷
  getCourseBookList:baseurl+'Textbook/getCourseBookList',
  //课程--题目--获取课程下题目列表
  getCourseQuestionList:baseurl+'course/getCourseQuestionList',
  //课程--评论--获取课程下题目列表
  getCourseCommentList:baseurl+'course/getCourseCommentList',
  //课程--获取课程评分排名用户
  getCourseScoreRank:baseurl+'course/getCourseScoreRank',
  //课程--获取课程分类列表
  getCourseCategoryAll:baseurl+'course/getCourseCategoryAll',
  //课程--获取教师课程列表
  getTeacherCourseList:baseurl+'course/getTeacherCourseList',
  //课程--教师创建、编辑课程内容
  createCourse:baseurl+'course/createCourse',
  //课程--获取课程详情
  getCourseInfo:baseurl+'course/getCourseInfo',
  //课程--试卷--获取课程推荐试卷
  getCoursePaperList:baseurl+'papers/getCoursePaperList',
  //课程--试卷--删除课程推荐试卷
  delCoursePapers:baseurl+'papers/delCoursePapers',
  //试卷--题目--获取题目详情
  getQuestionInfo:baseurl+'papers/getQuestionInfo',
  //课程--大纲--添加、编辑课程大纲
  addCourseOutline:baseurl+'course/addCourseOutline',
  //课程--讲义--获取课程讲义详情
  getCourseOutlineInfo:baseurl+'course/getCourseOutlineInfo',
  //课程--讲义--获取课程讲义列表
  getCourseHandout:baseurl+'course/getCourseHandout',
  //课程--大纲--获取课程大纲列表
  getCourseOutline:baseurl+'course/getCourseOutline',
  //课程--试卷--设置课程推荐试卷
  setCoursePapers:baseurl+'papers/setCoursePapers',
  //试卷--教师添加/编辑试卷
  addTestPaper:baseurl+'papers/addTestPaper',
  //试卷--题目--删除试卷题目
  delPaperQuestion:baseurl+'papers/delPaperQuestion',
  //试卷--题目--教师添加/编辑试卷题目
  addPaperQuestion:baseurl+'papers/addPaperQuestion',
  //试卷--题目--获取试卷下题目列表
  getPaperQuestionList:baseurl+'papers/getPaperQuestionList',
  //试卷--获取试卷详情
  getTestPaperInfo:baseurl+'papers/getTestPaperInfo',
  //试卷--获取试卷所有分类
  getPapersCategoryAll:baseurl+'papers/getPapersCategoryAll',
  //某个学习分享的无限极评价 (谨记：类似微信的朋友圈回复)
  limitlessEvaluate:baseurl+'comment/limitlessEvaluate',
  //添加评价
  addEvaluate:baseurl+'comment/addEvaluate',
  //教师评论
  addschoolpl:baseurl+'school/addEvaluate',
  //上传图片
  upload:baseurl+'Public/uploadPicture',
  //上传视频
  uploadvideo:baseurl+'Public/upload',
  //用户--获取用户信息 登录
  userInfo:baseurl+'User/userInfo',
  //备考计划--获取备考计划所有分类
  getNewCategoryAll:baseurl+'News/getNewCategoryAll',
  //备考计划--获取备考计划列表
  getNewsList:baseurl+'News/getNewsList',
  //备考计划--获取备考计划详情
  detail:baseurl+'News/detail',
  //试卷--获取教师下试卷列表
  getTeacherPapersList:baseurl+'papers/getTeacherPapersList',
  //教材--获取教师教材列表
  getTextBookList:baseurl+'Textbook/getTextBookList',
  //教材--获取独家教材列表
  getStudentTextBookList:baseurl+'Textbook/getStudentTextBookList',
  //教材--教师添加教材
  addTextbook:baseurl+'Textbook/addTextbook',
  //教材--获取教材所有分类
  getBookCategoryAll:baseurl+'Textbook/getBookCategoryAll',
  //获取学院列表
  schoolList:baseurl+'school/schoolList',
  //获取省份筛选
  provinceList:baseurl+'area/provinceList',
  //获取学制筛选
  schoolSystem:baseurl+'school/schoolSystem',
  //获取性质筛选
  schoolType:baseurl+'school/schoolType',
  //获取院校基础信息
  schoolInfo:baseurl+'school/schoolInfo',
  //获取分数线
  scoreInfo:baseurl+'school/scoreInfo',
  //获取往年分数线
  scoreList:baseurl+'school/scoreList',
  //获取教师评论列表
  evaluateList:baseurl+'school/evaluateList',
  //获取宣传视频列表
  videoList:baseurl+'school/videoList',
  //学习分享列表
  shareList:baseurl+'comment/shareList',
  //添加学习分享
  addShare:baseurl+'comment/addShare',
  //试卷--删除试卷
  delTestPaper:baseurl+'papers/delTestPaper',
  //教材--获取教材详情
  getTextbookInfo:baseurl+'Textbook/getTextbookInfo',
  //教材--教师删除教材
  delTextBook:baseurl+'Textbook/delTextBook',
  //课程--教材--设置课程推荐资料
  setCourseBook:baseurl+'Textbook/setCourseBook',
  //用户--获取用户余额
  getUserBalance:baseurl+'User/getUserBalance',
  //课程--题目--课程添加题目触发事件、根据返回 testpaper_id 跳转试卷详情、添加题目
  addCourseQuestionTrigger:baseurl+'course/addCourseQuestionTrigger',
  //订单---教师获取我的订单列表
  getTeacherBookOrderList:baseurl+'Order/getTeacherBookOrderList',
  //意见反馈-- 用户提交意见反馈内容
  feedback:baseurl+'Help/feedback',
  //获取系统配置内容【关于我们。。】
  getConfig:baseurl+'user/about',
  //获取系统配置内容【我是教师。。】
  getConfig1:baseurl+'user/teacher',
  //获取系统配置内容【下载二维码。。】
  getConfig2:baseurl+'user/code',
  //订单---教师删除已完成的订单
  hidenOrder:baseurl+'order/hidenOrder',
  //首页--获取首页banner图片
  getHomeBanner:baseurl+'index/getHomeBanner',
  //首页--获取考研倒计时天数
  getCountDownDay:baseurl+'public/getCountDownDay',
  //首页--获取考研倒计时天数
  getHomePopularCourse:baseurl+'course/getHomePopularCourse',
  //推荐公开课 4个最新
  hotDirectList:baseurl+'Direct/hotDirectList',
  //试卷--学员答题--模拟测试获取试题列表
  testGetPaperQuestionList:baseurl+'papers/testGetPaperQuestionList',
  //试卷--学员答题--提交试卷答案
  submitAnswer:baseurl+'papers/submitAnswer',
  //试卷--获取上次测试正确率
  getLastTestAccuracy:baseurl+'papers/getLastTestAccuracy',
  //试卷--获取错题试卷列表
  getWrongQuestionPaperList:baseurl+'papers/getWrongQuestionPaperList',
  //试卷--获取已购买题库列表
  getMyPaperList:baseurl+'papers/getMyPaperList',
  //判断学员是否报考
  isStudent:baseurl+'school/isStudent',
  //学员报考
  becomeStudent:baseurl+'school/becomeStudent',
  //获取申请流程
  applyInfo:baseurl+'school/applyInfo',
  //院校常见问题
  problemList:baseurl+'school/problemList',
  //常见问题--获取常见问题列表
  getNewsListhelp:baseurl+'help/getNewsList',
  //课程--收藏--检测用户是否收藏课程
  courseCollec:baseurl+'course/courseCollec',
  //课程正在评团的列表
  groupList:baseurl+'Order/groupList',
  //试卷--获取某个试卷下错题记录列表
  getPaperWrongRecord:baseurl+'papers/getPaperWrongRecord',
  //课程--评价--课程评价
  addCourseComment:baseurl+'course/addCourseComment',
  //老师详情
  teacherFollow:baseurl+'user/teacherFollow',
  //关注老师 及取消关注 要登录
  follow:baseurl+'User/follow',
  //优惠券---获取优惠券专区列表
  getCouponList:baseurl+'Coupon/getCouponList',
  //优惠券---获取我领取的优惠券列表
  getMyCouponList:baseurl+'Coupon/getMyCouponList',
  //优惠券---领取优惠券
  drawCoupon:baseurl+'Coupon/drawCoupon',
  //关注老师的列表
  followList:baseurl+'User/followList',
  //课程--获取课程列表
  getCourseList:baseurl+'course/getCourseList',
  //加入拼团
  addGroup:baseurl+'Order/addGroup',
  //优惠券---计算优惠券金额
  reckonOrderMoney:baseurl+'Coupon/reckonOrderMoney',
  //订单---创建订单，支付
  createorder:baseurl+'Order/createorder',
  //订单---获取学员购买教材订单列表
  getUserBookOrderList:baseurl+'Order/getUserBookOrderList',
  //用户--获取用户积分
  getUserCredit:baseurl+'User/getUserCredit',
  //订单--个人中心---获取用户消费记录
  getConsumeRecord:baseurl+'Order/getConsumeRecord',
  //获取省市区数据,联动列表
  area:baseurl+'Area/area',
  //用户添加地址
  addAddress:baseurl+'Adress/add',
  //用户--地址--查看收货地址列表
  lists:baseurl+'Adress/lists',
  //用户--地址--删除收货地址
  addressdel:baseurl+'Adress/del',
  //课程--个人中心--获取我购买的课程列表
  getMyCourseList:baseurl+'course/getMyCourseList',
  //试卷--获取试卷商城列表，过滤掉已购买的试卷
  getPapersShopList:baseurl+'papers/getPapersShopList',
  //用户--地址--编辑收货地址
  addressedit:baseurl+'Adress/edit',
  //用户--地址--查看地址详情
  addressdetail:baseurl+'Adress/detail',
  //修改个人信息
  editInfo:baseurl+'User/editInfo',
  //学员进入直播间
  entryDirect:baseurl+'Direct/entryDirect',
  //看直播
  pullDirect:baseurl+'Direct/pullDirect',
  //礼物列表
  goods:baseurl+'Direct/goods',
  //赠送礼物
  gift:baseurl+'Direct/gift',
  //用户确认收货
  confirmReceipt:baseurl+'Order/confirmReceipt',
  //订单继续支付
  continuePay:baseurl+'Order/continuePay',
  //默认地址详情
  getdefault:baseurl+'Adress/getdefault',
  //院校招生简介
  recruitInfo:baseurl+'school/recruitInfo',
  //检测当前用户是否是会员
  getMemberIsVip:baseurl+'User/getMemberIsVip',
  //获取购买会员价格
  getBuyMemberMoney:baseurl+'User/getBuyMemberMoney',
  //用户--用户上传头像
  uploadAvatar:baseurl+'User/uploadAvatar',
  //添加视频观看记录
  addCourseOutlineLog:baseurl+'course/addCourseOutlineLog',
   //获取邀请二维码与海报
   yaoqing:baseurl+'user/yaoqing',
   bank:baseurl+'user/bank',
   xuey_tx:baseurl+'user/tx',
   school_zy:baseurl+'school/schoolZy',
   deleteShare:baseurl+'comment/deleteShare',
   userment:baseurl+'user/userment',
   orderdetail:baseurl+'order/orderdetail',
   messageList:baseurl+'user/messageList',
   firstMessage:baseurl+'user/firstMessage',
   ysxy:baseurl+'user/ysxy',
   txLog:baseurl+'user/txLog',

   //订单---取消的订单
   cancelOrder:baseurl+'order/cancelOrder',
   //是否审核
   isshenhe: baseurl+'papers/isshenhe',
   //实名认证
   realApply: baseurl+'user/realApply',
   //实名认证状态
   getMemberApplyStatus: baseurl+'user/getMemberApplyStatus',
   getMemberRealInfo: baseurl+'user/getMemberRealInfo',
   getQuestionPaperList: baseurl+'papers/getQuestionPaperList',
   getPaperRecord: baseurl+'papers/getPaperRecord',
   getMyPaperInfo: baseurl+'papers/getMyPaperInfo',
   addUserChapter: baseurl+'course/addUserChapter',
   scoreLog:baseurl+'user/scoreLog',
   getCourseOutlineLog:baseurl+'course/getCourseOutlineLog',
   testGetPaperQuestionList:baseurl+'papers/testGetPaperQuestionList',
   testGetPaperGroupQuestionList:baseurl+'papers/testGetPaperGroupQuestionList',
   getPaperGroupRecord:baseurl+'papers/getPaperGroupRecord',
  getPaperWrongGroupRecord:baseurl+'papers/getPaperWrongGroupRecord',
  getNextGroup:baseurl+'papers/getNextGroup',
  testStartGetPaperQuestionList:baseurl+'papers/testStartGetPaperQuestionList',
  teacherFollowList:baseurl+'User/teacherFollowList',
  getUserBankList:baseurl+'User/getUserBankList',
  addUserBank:baseurl+'User/addUserBank',
  updateUserBank:baseurl+'User/updateUserBank',

  schoolNoticeList:baseurl+'school/schoolNoticeList',
  delUserBank:baseurl+'user/delUserBank',
  getUserDefaultBank:baseurl+'User/getUserDefaultBank',
  signup:baseurl+'Direct/signup',
  getDirectInfo:baseurl+'Direct/getDirectInfo',
  getUserTxRate:baseurl+'user/getUserTxRate',
  shopLive:baseurl+'order/shopLive',
  getChargePrice:baseurl+'order/getChargePrice',
  getUserZfb:baseurl+'user/getUserZfb',
  saveUserZfb:baseurl+'user/saveUserZfb',
  checkNoReadMessage:baseurl+'user/checkNoReadMessage',
  getShareCourse:baseurl+'course/getShareCourse',
  faCourse:baseurl+'course/faCourse',
}

var testFunction = new Object()
// 验证姓名
testFunction.isName=function (name) {
  var reg = /^[\u4e00-\u9fa5]{2,4}$/
  if (name === '') {
    console.log('姓名不能为空')

  } else if (!reg.test(name)) {
    console.log('请正确填写姓名！姓名为两到四个汉字。')

  } else {
    return true
  }
}
// 验证手机号
testFunction.isMobile=function (mobile) {
  var reg = /^1[0-9]{10}/
  if (mobile === '') {
    console.log('手机号不能为空')

  } else if (!reg.test(mobile)) {
    console.log('请正确填写手机号！')

  } else {
    return true
  }
}
// 验证身份证
testFunction.isIdentity=function (identity) {
  var pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
  if(pattern.test(identity)) {
      var year = identity.substring(0, 4);
      var month = identity.substring(4, 6);
      var date = identity.substring(6, 8);
      var date2 = new Date(year+"-"+month+"-"+date);
      if(date2 && date2.getMonth() == (parseInt(month) - 1)) {
          return true;
      }
  }
  return false;
}
// 验证6-12数字与字母混合
testFunction.registerPassword= function (password) {
  var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
  if (password === '') {
    console.log('密码不能为空')

  } else if (!reg.test(password)) {
    console.log('密码格式为6-12位字母+数字')

  } else {
    return true
  }
}
function openFrame1(cla,pageParam,color,bounces) {
    var h = $api.dom('header') ? $api.dom('header').offsetHeight : 0;
    api.openFrame({
      useWKWebView:true,
        name: cla,
        url: 'widget://html/' + cla + '.html',
        rect: {
            x: 0,
            y: h,
            w: 'auto',
            h: api.winHeight-h
        },
        pageParam: pageParam,
        bounces: bounces!=undefined?bounces:true,
        bgcolor:color||'#fff',
        overScrollMode:'always',
        softInputMode:'pan',
    });
}
Vue.prototype.openFrame =function(cla,pageParam) {

    api.openFrame({
      useWKWebView:true,
        name: cla,
        url: 'widget://html/'+ cla + '.html',
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: api.winHeight
        },
        pageParam: pageParam,
        // bounces: bounces,
        // bgcolor:color,

    });
}
function openW1(name, param,slidBack,reload,bounces){
  api.openWin({
    useWKWebView:true,
    name: name,
    url: 'widget://html/' +name + '.html',
    pageParam: param,
    slidBackEnabled:slidBack,
    reload:reload!=undefined?reload:false,
    bounces:bounces!=undefined?bounces:true,
})
}
// 打开一个Win
Vue.prototype.openW = function (name, param,slidBack,reload,bounces) {

    api.openWin({
      useWKWebView:true,
        name: name,
        url: 'widget://html/'+name + '.html',
        pageParam: param,
        slidBackEnabled:slidBack,
        reload:reload!=undefined?reload:false,
        bounces:bounces!=undefined?bounces:true,
        allowEdit:true
    })
}
Vue.prototype.toast =function(msg){
  api.toast({
      msg: msg,
      duration: 2000,
      location: 'middle'
  });
}
//log信息
function loginfo(res){

  var res  =typeof res =='string'?$.parseJSON(res):res
  if(res.code==401){
    // api.closeToWin({
    //     name: 'root'
    // });
    api.openWin({
        useWKWebView:true,
        name: 'index',
        url: 'index.html',
        pageParam: '',
        slidBackEnabled:false
    })



  }
  if(res.code==0){
    api.toast({
        msg: res.msg,
        duration: 2000,
        location: 'middle'
    });
    return;
  }
  if(res.code==100){
    api.toast({
        msg: res.msg,
        duration: 2000,
        location: 'middle'
    });
    return;
  }

}

function hasPermission(one_per){
	    	var perms = new Array();
	    	if(one_per){
	    		perms.push(one_per);
	    	}else{
	    		var prs = document.getElementsByName("p_list");
	            for(var i = 0; i < prs.length; i++){
		            if(prs[i].checked){
		            	perms.push(prs[i].value);
		            }
	         	}
	    	}
         	var rets = api.hasPermission({
         		list:perms
         	});
         	if(!one_per){
         		alert('判断结果：' + JSON.stringify(rets));
         		return;
         	}
         	return rets;
	    }

	    function reqPermission(one_per){
	    	var perms = new Array();
	    		perms.push(one_per);
         	api.requestPermission({
         		list: perms,
         		code: 100001
         	}, function(ret, err){
         		var list = ret.list;
         		for(var i in list){
              if(list[i].name=='camera'&&list[i].granted==true){
                api.toast({
                	    msg: '获取权限成功',
                	    global: true
                	});
              }else{
                api.toast({
                      msg: '获取权限失败',
                      global: true
                });
              }
         		}
         	});
	    }

	    function confirmPer(perm){
	    	var has = hasPermission(perm);
	    	if(!has || !has[0] || !has[0].granted){
		    	api.confirm({
				    title: '提醒',
				    msg: '没有获得 ' + perm + " 权限\n是否前往设置？",
				    buttons: ['去设置', '取消']
				}, function(ret, err) {
				    if(1 == ret.buttonIndex){
				    	reqPermission(perm);
				    }
				});
	    		return false;
	    	}
	    	return true;
	    }
//api一张图片上传
Vue.prototype.uploadfirst =function(Callback,url,type,datas){
  var that =this

  var infouser={}
  infouser.token = window.localStorage.getItem('userinfo')||''
   if(datas){
     datas.token =infouser.token||''
   }else{
     datas ={}
     datas.token =infouser.token||''
   }

  api.actionSheet({
              title : type=='video'?'上传视频':'上传照片',
              cancelTitle : '取消',
              buttons :type=='video'?['录制', '视频']:['拍照', '手机相册']
          }, function(ret, err) {
              if (ret) {
                  if (ret.buttonIndex == 1) {
                      if(!confirmPer('camera')){
                        return;
                      }
                      api.getPicture({
                          sourceType : 'camera',
                          encodingType : 'png',
                          mediaValue : type,
                          destinationType : 'url',
                          allowEdit : false,
                          quality : 100,
                          saveToPhotoAlbum : false
                      }, function(ret, err) {
                          if (ret.data) {
                            if(datas&&datas.imges=='上传头像'){
                              var file ={
                                image : ret.data
                              }
                            }else{
                              var file ={
                                file : ret.data
                              }
                            }
                            api.ajax({
                                url: url,
                                method: 'post',
                                report:type=='video'?true:false,
                                data: {
                                    values:datas,
                                    files:file
                                }
                            },function(res, err){
                                console.log(JSON.stringify(res))
                                if (res) {
                                  if(type=='video'){
                                    api.showProgress({
                                        title: '努力加载中...',
                                        text: parseInt(res.progress)+'%',
                                        modal: true
                                    });


                                  }else{
                                    that.shows()
                                  }
                                  if(res.status==1&&res.body.code==1){
                                      res.body.data.duration=ret.duration;
                                      that.hides()
                                  }else if(res.code==1){
                                      that.hides()
                                  }else{
                                    that.hides()
                                  }

                                  Callback(res)
                                } else {
                                  that.hides()
                                  Callback(err)
                                }
                            });
                          } else {
                            that.hides()
                              api.toast({
                                  msg : '获取失败',
                                  duration : 3000,
                                  location : 'bottom'
                              });
                          }
                      });
                  } else if (ret.buttonIndex == 2) {
                    if(!confirmPer('storage')){
                      return;
                    }
                    that.shows()
                      //手机相册选图片
                      api.getPicture({
                          sourceType : 'library',
                          encodingType : 'png',
                          mediaValue : type,
                          destinationType : 'png',
                          allowEdit : true,
                          quality : 100,
                          preview:true,
                          saveToPhotoAlbum : false
                      }, function(ret, err) {

                          if (ret.data) {
                            if(datas&&datas.imges=='上传头像'){
                              var file ={
                                image : ret.data
                              }
                            }else{
                              var file ={
                                file : ret.data
                              }
                            }
                            api.ajax({
                                url: url,
                                method: 'post',
                                report:type=='video'?true:false,
                                data: {
                                    values:datas,
                                    files:file
                                }
                            },function(res, err){

                                if (res) {
                                  if(type=='video'){
                                    api.showProgress({
                                        title: '努力加载中...',
                                        text: parseInt(res.progress)+'%',
                                        modal: true
                                    });
                                  }else{
                                    that.shows()
                                  }
                                  if(res.status==1&&res.body.code==1){
                                      res.body.data.duration=ret.duration;
                                      that.hides()
                                  }else if(res.code==1){
                                      that.hides()
                                  }
                                  Callback(res)
                                } else {
                                  that.hides()
                                  Callback(err)
                                }
                            });
                          } else {
                            that.hides()
                              api.toast({
                                  msg : '获取失败',
                                  duration : 3000,
                                  location : 'bottom'
                              });
                          }
                      });
                  }else{
                    that.hides()
                  }
              }
          });
}
// 关闭一个win
Vue.prototype.closeW = function () {

    api.closeWin();
}
// 关闭到一个win
Vue.prototype.closeTo = function (name) {
  api.closeToWin({
      name: name
  })
}

//ajax
Vue.prototype.ajaxpost =function (type,url,data) {
  //console.log('开始调用--'+url+'------' + JSON.stringify(data));
  var that = this
  // that.shows()
 var promise =  new Promise(function(resolve, reject) {
     var infouser={}
     infouser.token = window.localStorage.getItem('userinfo')||''
    if(data!=undefined){
      data.token =infouser.token||''
    }
    console.log('调用'+url+'-------');
    console.log('param：' + JSON.stringify(data));
    jQuery.ajax({
        url: url,
        method: type,
        data: data,
        success:function(res){
          var time = new Date();
          console.log('返回结果-------'+url+'---------------------------------------------------------------'+time);
          console.log('param：' + JSON.stringify(data));
          console.log('res:' + JSON.stringify(res));
          console.log('data:' + JSON.stringify($.parseJSON(res).data));
          loginfo(res)
          resolve(res)
        },
        error:function(ret){

          that.toast('网络超时，请稍后重试...')
          reject(ret)
        },
        complete: function() {
            api.refreshHeaderLoadDone();
            that.hides()
        }
    })

  });
  return promise;
}

//ajax
Vue.prototype.ajaxpost_noloading =function (type,url,data) {
  var that = this
  var promise =  new Promise(function(resolve, reject) {
     var infouser={}
     infouser.token = window.localStorage.getItem('userinfo')||''
    if(data!=undefined){
      data.token =infouser.token||''
    }
    console.log('调用'+url+'-------');
    console.log('param：' + JSON.stringify(data));
    jQuery.ajax({
        url: url,
        method: type,
        data: data,
        success:function(res){
          loginfo(res)
          var time = new Date();
          console.log('返回结果-------'+url+'---------------------------------------------------------------'+time);
          console.log('param：' + JSON.stringify(data));
          console.log('res:' + JSON.stringify(res));
          console.log('data:' + JSON.stringify($.parseJSON(res).data));
          resolve(res)
        },
        error:function(ret){
          console.log('err:' + JSON.stringify(ret));
          that.toast('网络超时，请稍后重试...')
          reject(ret)
        },
        complete: function() {
            api.refreshHeaderLoadDone();
            that.hides()
        }
    })

  });
  return promise;
}
// 加载UI
Vue.prototype.shows = function (title, text) {
    var title = title || '努力加载中...'
    api.showProgress({
        title: title,
        text: text,
        modal: true
    })
}
Vue.prototype.hides = function () {
    api.refreshHeaderLoadDone();
    api.hideProgress()
}

Vue.prototype.formatTime=function (timestamp,title) {

      var date = new Date(timestamp*1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      var  D = date.getDate() + ' ';
      var  h = date.getHours() + ':';
      var m = date.getMinutes() + ':';
      // if(m.length==2){
      //   m = '0' + m;
      // }
      var s = date.getSeconds();
      // if(s.length==1){
      //   s = '0' + s;
      // }
      if(title){
        return Y+M+D;
      }else{
        return Y+M+D+h+m+s;
      }

}
//天数
Vue.prototype.formatDate=function (time) {
  var date = new Date(time.replace(/\-/g, '/'));
  var now = new Date();
  var dateTime = date.getTime();
  var nowTime = now.getTime();
  var between = nowTime - dateTime;
  var mili = 1000;
  if (between < 60 * mili){
    return '1分钟'
  } else if (between < 60 * 60 * 1000){
    var time = parseInt(between / 1000 / 60);
    return time+"分钟";
  } else if (between < 24 * 60 * 60 * 1000) {
    var time = parseInt(between / 60 / 60 / 1000 );
    return time + "小时";
  } else if (between < 365* 24 * 60 * 60 * 1000) {
    var time = parseInt(between / 24  / 60 / 60 / 1000);
    return time + "天";
  }
}

// ajax封装
Vue.prototype.ajax = function (options, successFuntion, errorFuntion) {
  var token = window.localStorage.getItem('token') || '';
  var lat = window.localStorage.getItem('lat') || '';
  var lng = window.localStorage.getItem('lng') || '';
  // localStorage.setItem('token','');
  var self = this;
  if(!options.showBol){
      var urlArr = ['Chat/getChatLogs','Chat/checkChatNoticeStatus','Chat/getChatList','Playing/detail','Playing/index','PlayingMessage/getChatMsgList','Playing/getCircleNumber','playing/checkCircleRedDot','Playing/recommend','Playing/getStatisticalList'];
      var showBol = true;
      // for(var i = 0;i < urlArr.length;i++){
      //     if(urlArr[i] == options.url){
      //         showBol = false
      //         break;
      //     }
      // }
      // if(showBol){
      //     self.shows()
      // }
      // if(options && options.url){
          if(urlArr.indexOf(options.url) <= -1 && api.frameName != 'center'){
              self.shows()
          }
  }
  // }
  // 获取token  获取url  获取data  获取type
  var data = options.data || {}
  // alert(JSON.stringify(data))
  var type = options.type || 'GET';
  // if(options.live){
  //     var url = this.liveurl + options.url
  // }else{
  var url = 'http://lm.nxm.wanheweb.com/api/' + options.url
  // }
  successFuntion = successFuntion || function () {}
  var headers = {
      token: token,
      lat: lat,
      lng: lng
  }
  $.ajax({
      url: url,
      type: type,
      data: data,
      headers: headers,
      success: function (res) {
          if(options.url == 'common/getQrcode'){
              successFuntion(res)
          }
          if(options.url == 'DistrictActivity/checkUserAllowDistrictActivityStatus'||options.url == 'Chat/checkChatNoticeStatus'){
              successFuntion(res)
              self.hides()
              return
          }
          if (res.code == 1) {
              successFuntion(res)
          } else {
              self.toast(res.msg)
          }
          self.hides()
      },
      error: function (e) {
          if((e.responseJSON && e.responseJSON.code) == 401){
              self.toast(e.responseJSON.msg)
              api.closeToWin({
                  name: 'login'
              })
          }else{
              if(errorFuntion){
                  errorFuntion(e.responseJSON)
              }else if(options.url !='Playing/index'){
                  self.toast('网络超时，请稍后重试...')
              }
          }
          self.hides()
      },
      complete: function () {
          self.hides()
      }
  })
}
Vue.prototype.confirmPer = function(perm){
    var has = hasPermission(perm);
    if(!has || !has[0] || !has[0].granted){
        api.confirm({
            title: '提醒',
            msg: '没有获得 ' + perm + " 权限\n是否前往设置？",
            buttons: ['去设置', '取消']
        }, function(ret, err) {
            if(1 == ret.buttonIndex){
                reqPermission(perm);
            }
        });
        return false;
    }
    return true;
}

function hasPermission(one_per){
    var perms = new Array();
    if(one_per){
        perms.push(one_per);
    }else{
        var prs = document.getElementsByName("p_list");
        for(var i = 0; i < prs.length; i++){
            if(prs[i].checked){
                perms.push(prs[i].value);
            }
         }
    }
     var rets = api.hasPermission({
         list:perms
     });
     if(!one_per){
        //  apialert('判断结果：' + JSON.stringify(rets));
         return;
     }
     return rets;
}

function reqPermission(one_per, callback){
    var perms = new Array();
    if(one_per){
        perms.push(one_per);
    }else{
        var prs = document.getElementsByName("p_list_r");
        for(var i = 0; i < prs.length; i++){
            if(prs[i].checked){
                perms.push(prs[i].value);
            }
         }
     }
     api.requestPermission({
         list: perms,
         code: 100001
     }, function(ret, err){
         if(callback){
             callback(ret);
             return;
         }



        //  var str = '请求结果：\n';
        //  str += '请求码: ' + ret.code + '\n';
        //  str += "是否勾选\"不再询问\"按钮: " + (ret.never ? '是' : '否') + '\n';
        //  str += '请求结果: \n';
        //  var list = ret.list;
        //  for(var i in list){
        //      str += list[i].name + '=' + list[i].granted + '\n';
        //  }
        //  apialert(str);
     });
}
