

$(function(){
//发送ajax请求,请求商品数据
var productId = getSearch('productid')


$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
  data:{
    productid:productId
  },
  dataType:'json',
  success:function(info){
     console.log(info)

     $('.info').html(template('moneyTpl',info))
  }
})



})