//跳转到报修记录
function  offSetTobxls_main(){
  api.openWin({
      name: 'bxls_main',
      url: '../html/bxls_main.html',
      pageParam: {
          name: 'test'
      }
  });
}
// 跳转到个人信息
function offsetToPsxq_main(){
  api.openWin({
      name: 'psxq_main',
      url: '../html/psxq_main.html',
      pageParam: {
          name: 'test'
      }
  });
}
//跳转到联系我们
function offsetToAboutUs(){
  api.openWin({
      name: 'aboutUs_main',
      url: '../html/aboutUs_main.html',
      pageParam: {
          name: 'test'
      }
  });

}
//调用父页面的方法
function offsetToSystemMG(){
  api.openWin({
      name: 'xtmsg_frame',
      url: '../html/xtmsg_frame.html',
      pageParam: {
          name: 'test'
      }
  });
//  api.execScript({
// 		 script: 'popup_out()'
//  });
}
//退出登录
function offsetToLogin(){
  api.openWin({
      name: 'login',
      url: '../html/login.html',
      pageParam: {
          name: 'test'
      }
  });
  api.closeWin();
}
