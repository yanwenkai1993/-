

$(function(){

  var productId = getSearch('productid')

 $.ajax({
   type:'get',
   url:'http://127.0.0.1:9090/api/getdiscountproduct',
   data:{
    productid:productId
   },
   dataType:'json',
   success:function(info){
     console.log(info)
     $(".info").html(template('disTpl',info))
   }
 })

})