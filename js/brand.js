$(function () {

  var brandtitleId = getSearch('brandtitleid')

  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getbrand',
    data: {
      brandtitleid: brandtitleId || 0
    },
    dataType: 'json',
    success: function (info) {
      console.log(info)
      $('.mm_nav ul').html(template('brandTpl', info))
    }
  })

  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getbrandproductlist',
    data: {
      brandtitleid: brandtitleId,
      pagesize: 4

    },
    dataType: 'json',
    success: function (info) {
      console.log(info)
      $('.slab ul').html(template('brand2', info))
    }
  })

 $.ajax({
   type:'get',
   url:'http://127.0.0.1:9090/api/getproductcom',
   data:{
    productid:brandtitleId
   },
   dataType:'json',
   success:function(info){
     console.log(info)
     $('.review ul').html(template('brand3',info))
   }
 })

})