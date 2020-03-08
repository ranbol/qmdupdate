
//将时间戳转换成日期格式：
function timestampToTime(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y+M+D+h+m+s;
}

function dateFormat(thisDate, fmt) {
    var o = {
        "M+": thisDate.getMonth() + 1,
        "d+": thisDate.getDate(),
        "h+": thisDate.getHours(),
        "m+": thisDate.getMinutes(),
        "s+": thisDate.getSeconds(),
        "q+": Math.floor((thisDate.getMonth() + 3) / 3),
        "S": thisDate.getMilliseconds()
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (thisDate.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

// function dateFormat(date, fmt) {
//     let ret;
//     const opt = {
//         "Y+": date.getFullYear().toString(),        // 年
//         "m+": (date.getMonth() + 1).toString(),     // 月
//         "d+": date.getDate().toString(),            // 日
//         "H+": date.getHours().toString(),           // 时
//         "M+": date.getMinutes().toString(),         // 分
//         "S+": date.getSeconds().toString()          // 秒
//         // 有其他格式化字符需求可以继续添加，必须转化成字符串
//     };
//     for (let k in opt) {
//         ret = new RegExp("(" + k + ")").exec(fmt);
//         if (ret) {
//             fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
//         };
//     };
//     return fmt;
// }
//将日期格式转换成时间戳：

//退出APP
  function exitNowApp(){
    $api.setStorage('isFullScreen',0);
    //按两次退出应用
    api.addEventListener({
      name : 'keyback'
    }, function(ret, err) {
      //全屏时 需要发送事件 并关闭全屏
      var isFullScreen = $api.getStorage('isFullScreen');
      console.log("isFullScreen"+isFullScreen);
      //如果全屏 只关闭全屏
      if(isFullScreen == '1'){
        api.sendEvent({
            name: 'clickhome',
            extra: {}
        });
      }else{
        api.toast({
          msg : '再点一次退出应用',
          duration : 2000,
          location : 'bottom'
        });
        api.addEventListener({
          name : 'keyback'
        }, function(ret, err) {
          if($api.getStorage('isFullScreen' == "0")){
            api.sendEvent({
                name: 'clickhome',
                extra: {}
            });
          }else{
            api.closeWidget({
              silent : true
            });
          }

        });
      }

      setTimeout(function() {
      }, 2000)
    });
 }
