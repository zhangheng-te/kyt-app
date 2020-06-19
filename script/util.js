function getLevel(score,func){
  var level = 0;
  if(1000 >= score){
    level = 1;
  }
  if (2000 >= score && score > 1000) {
    level = 2;
  }
  if (3000 >= score && score > 2000) {
    level = 3;
  }
  if (5000 >= score && score > 3000) {
    level = 4;
  }
  if (7000 >= score && score > 5000) {
    level = 5;
  }
  if (9000 >= score && score > 7000) {
    level = 6;
  }
  if (11000 >= score && score > 9000) {
    level = 7;
  }
  if (13000 >= score && score > 11000) {
    level = 8;
  }
  if (15000 >= score && score > 13001) {
    level = 9;
  }
  if (17000 >= score && score > 15000) {
    level = 10;
  }
  if (19000 >= score && score > 17000) {
    level = 11;
  }
  if (22000 >= score && score > 19000) {
    level = 12;
  }
  if (25000 >= score && score > 22000) {
    level = 13;
  }
  if (28000 >= score && score > 25000) {
    level = 14;
  }
  if (32000 >= score && score > 28000) {
    level = 15;
  }
  if (36000 >= score && score > 32000) {
    level = 16;
  }
  if (40000 >= score && score > 36000) {
    level = 17;
  }
  if (45000 >= score && score > 40000) {
    level = 18;
  }
  if (50000 >= score && score > 45000) {
    level = 19;
  }
  if (55000 >= score && score > 50000) {
    level = 20;
  }
  if (60000 >= score && score > 55000) {
    level = 21;
  }
  if (65000 >= score && score > 60000) {
    level = 22;
  }
  if (70000 >= score && score > 65000) {
    level = 23;
  }
  if (780000 >= score && score > 70000){
    level = 24;
  }
  if (90000 >= score && score > 80000) {
    level = 25;
  }
  if (score > 90000) {
    level = 26;
  }
  func(level)
}

//获取星期几
function getWeek(str) {
    var d = moment(str).format('d');
    //var weekday = ['周日','周一','周二','周三','周四','周五','周六'];
    var weekday = ['0','1','2','3','4','5','6'];
    return weekday[d];
};

//是否包含数字和英文
function isPsd(psd){
    var reg = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/;
    return reg.test(psd);
};

//是否是数字
function isNum(num){
    var reg = /^[0-9]*$/;
    return reg.test(num);
};

//是否是0-100间的年龄
function isAge(age){
    var reg = /^([0-9]|[0-9]{2}|100)$/;
    return reg.test(age);
};

//是否是价格
function isPrice(price){
    var reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
    return reg.test(price);
};

//是否是空
function isNotNull(param){
    if(param==""||param==null||param==undefined){
        return false
    }
    return true
};

//是否是手机号码
function isMobile(phone){
    var reg = /^[1]([3-9])[0-9]{9}$/;
    return reg.test(phone);

};

//是否是身份证号
function isIDCard(card) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;;
    return reg.test(card);
};

//保存Storage
function setStorage (name,value) {
    localStorage.setItem(name, value);
};

//获取Storage
function getStorage(name) {
    return localStorage.getItem(name);
};

//移除Storage
function removeStorage(name) {
    localStorage.removeItem(name);
};

//秒转化为时分秒
function formatSeconds(value) {
	        var secondTime = parseInt(value);// 秒
	        var minuteTime = 0;// 分
	        var hourTime = 0;// 小时
	        if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
	            //获取分钟，除以60取整数，得到整数分钟
	            minuteTime = parseInt(secondTime / 60);
	            //获取秒数，秒数取佘，得到整数秒数
	            secondTime = parseInt(secondTime % 60);
	            //如果分钟大于60，将分钟转换成小时
	            if(minuteTime > 60) {
	                //获取小时，获取分钟除以60，得到整数小时
	                hourTime = parseInt(minuteTime / 60);
	                //获取小时后取佘的分，获取分钟除以60取佘的分
	                minuteTime = parseInt(minuteTime % 60);
	            }
	        }
	        var result = "" + parseInt(secondTime) + "秒";

	        if(minuteTime > 0) {
	        	result = "" + parseInt(minuteTime) + "分" + result;
	        }
	        if(hourTime > 0) {
	        	result = "" + parseInt(hourTime) + "小时" + result;
	        }
	        return result;
    }
