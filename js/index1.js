
$(function(){


 $.ajax({
     type:'get',
     url:'http://127.0.0.1:9090/api/getindexmenu',
     dataType:'json',
     success:function(info){
      
       $('.mm_nav ul').html(template('indexTpl',info))
       //在数据渲染回来之后注册点击事件
       $('.mm_nav ul').on('click','#bd',function(){
         $(this).parent().nextAll().children().toggleClass('hied')
        
       })
     }
 })
  
  // 折扣ajax
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getmoneyctrl',
    dataType:'json',
    success:function(info){
      console.log(info)
    $('.mm_info ul').html(template('infoTpl',info))

    }
  })   

})

