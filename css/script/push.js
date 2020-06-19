function push() {
    if (window.api) {
        var ajpush = api.require('ajpush');
        ajpush.init(function(ret) {
            if (ret && ret.status) {
                // alert(JSON.stringify(ret))
                 // 获取注册id
                ajpush.getRegistrationId(function(ret) {
                    // console.log(JSON.stringify(ret))
                    var registrationId = ret.id;
                    // alert('registrationId:'+registrationId);
                    window.localStorage.setItem('registrationId',registrationId);
                });
            }
        });
        // 极光推送
        if (api.systemType == 'ios') {
            ajpush.setBadge({
                badge: 0
            })
            // ajpush.setListener(
            //     function(ret) {
            //         ajpush.setBadge({
            //             badge: 0
            //         })
            //     }
            // );
            // 苹果点击的时候出现内容
            api.addEventListener({
                name: 'noticeclicked'
            }, function(ret, err) {
                // 清除掉右上角的小图标
                ajpush.setBadge({
                    badge: 0
                })
                console.log(JSON.stringify(ret))
                var extra = ret.value.extra
                
                if (extra.type == 1) {
                    openW1('Inclass',{'url':extra.live_url,'house_id':extra.house_id,'username':extra.username},false,true)
                  
                }
            })
        } else {
            // 初始化极光推送
            ajpush.init(function(ret) {
                if (ret && ret.status) {
                    api.addEventListener({
                        name: 'appintent'
                    }, function(ret, err) {
                        // alert(JSON.stringify(ret))

                        if (!ret.appParam.ajpush) {
                            return
                        }
                        var extra = ret.appParam.ajpush.extra
                        if (extra.type == 1) {
                            openW1('Inclass',{'url':extra.live_url,'house_id':extra.house_id,'username':extra.username},false,true)
                          
                        }
                    })
                }
            })
        }
    }

}