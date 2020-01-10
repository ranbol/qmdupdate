function  offsetToX86(){
  api.openWin({
      name: 'x86_main',
      url: '../html/x86_main.html',
      pageParam: {
          name: 'test'
      }
  });
  api.closeWin();
}

function  offsetToOther(){
  api.openWin({
      name: 'other_main',
      url: '../html/other_main.html',
      pageParam: {
          name: 'test'
      }
  });
    api.closeWin();
}

function  offsetToDatabase(){
  api.openWin({
      name: 'db_main',
      url: '../html/db_main.html',
      pageParam: {
          name: 'test'
      }
  });
    api.closeWin();
}
function  offsetToCunChu(){
  api.openWin({
      name: 'cun_main',
      url: '../html/cun_main.html',
      pageParam: {
          name: 'test'
      }
  });
    api.closeWin();
}
function  offsetToSmall(){
  api.openWin({
      name: 'small_main',
      url: '../html/small_main.html',
      pageParam: {
          name: 'test'
      }
  });
    api.closeWin();
}
