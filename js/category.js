$(function () {
 
  //发送ajax请求数据
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getcategorytitle',
    dataType: 'json',
    success: function (info) {
      // console.log(info)
      $('.category_title').html(template('cateTpl', info))

      

     
    }
  })
 //二级列表 点击按钮发送ajax请求
  $('.category_title').on('click', '#lis', function () {
   var id = $(this).data('id')

   $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getcategory',
    data: {
      titleid: id
    },
    dataType: 'json',
    success: function (info) {
     console.log(info)
     $(".category_content").html(template('cateTpl2', info))


      


    }
  })
    
  $(this).children('ul').toggleClass('move')
  })

})