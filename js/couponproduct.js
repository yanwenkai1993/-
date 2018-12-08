

$(function(){

   var couponId =getSearch('couponid') 

  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getcouponproduct',
    data:{
      couponid:couponId,
    },
    dataType:'json',
    success:function(info){

      console.log(info)
      $('.television ul').html(template('copTpl',info))
   
    }
  })


})