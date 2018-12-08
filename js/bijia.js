

$(function(){
   var productId = getSearch('productid')

  
  // 面包屑导航
    mianbao()
    //详情模板
     $.ajax({
       type:'get',
       url:'http://127.0.0.1:9090/api/getproduct',
       data:{
        productid:productId
       },
       dataType:'json',
       success:function(info){
         console.log(info);
         $('.particulars').html(template('bijiaTpl',info))
       }
     })
    
     //评论模板
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getproductcom',
      data:{productid: productId },
      dataType:'json',
      success:function(info){
        console.log(info)
        $('.friend ul').html(template('pingTpl',info))
      }
    })

})