$(function(){
$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
  dataType:'json',
  success:function(info){
    
    $('.bcj_nav ul').html(template('baiTpl',info))
    //在数据渲染回来的时候获取li的个数
    render()
    //在数据返回的时候获取li给每个li注册点击事件
    $('.bcj_nav ul').on('click','li',function(){
       $(this).addClass('red').siblings().removeClass('red')
        var id= $(this).data('id')
        renders(id)
    })
  }
})

//封装一个方法给ul设置宽度
function render(){
 var liWitdh=5
 var $ul=$('.bcj_nav ul') 
 var $lis=$ul.children()
 //便利lis获取每个li的宽度
 
  for (var i = 0; i < $lis.length; i++) {
    liWitdh += $lis[i].offsetWidth
  }
  $ul.width(liWitdh)
  new IScroll('.bcj_nav', {
    scrollY: false,
    scrollX: true
  })
}

renders()
 function renders(id){
   $.ajax({
     type:'get',
     url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
     data:{
      titleid:id||0
     },
     dataType:'json',
     success:function(info){
      $('.bargain_conttent ul').html(template('caiTpl',info))
    

     }
   })
 }

})