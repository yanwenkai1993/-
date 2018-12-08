





  function getSearch( k ) {
    var str = location.search; // 获取地址栏参数
  
    // 解码成中文
    str = decodeURI( str );   // "?key=耐克&age=18&desc=帅"
  
    // 去掉问号
    // str.slice( start, end )
    // (1) 包括start, 不包括end
    // (2) 如果end不写, 可以截取到最后
    str = str.slice( 1 );    // "key=耐克&age=18&desc=帅"
  
    // str.split("&") 将字符串根据&分割成数组
    var arr = str.split('&'); // ["key=耐克", "age=18", "desc=帅"]
  
    var obj = {};
    // 遍历数组, 取得键和值
    arr.forEach(function( v, i ) {  // v 每一项  "age=18"
      var key = v.split("=")[0];  // age
      var value = v.split("=")[1];  // 18
      obj[ key ] = value;
    })
  
    return obj[ k ];
  }
  var categoryId = getSearch('categoryid')
  
  var pageid = 1
  var pages


  function mianbao(){
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getcategorybyid',
      data:{
       categoryid:categoryId
      },
      dataType:'json',
      success:function(info){
     $('.crumble').html(template('mianbao',info))
 
      }
    })
  }


  
