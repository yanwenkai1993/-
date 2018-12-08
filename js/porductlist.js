//发送ajax请求
$(function () {
  //获取url的地址后面的id

  var pageid = 1
  var pages
  //渲染面包屑导航
  mianbao()



  function render(pages) {

    //获取地址栏传入的id
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getproductlist',
      data: {
        categoryid: categoryId || 0,
        pageid: pageid,
      },
      dataType: 'json',
      success: function (info) {
        console.log(info)
        pages = Math.ceil(info.totalCount / info.pagesize)
        $('.television ul').html(template('porTpl', info))

        //  分页
        $('#dropDown').html(template('select_tmp', {
          pageid: pageid,
          pages: pages
        }))

      }

    })
  }
  render()


  $('.page2').on('click', function () {
    if (pageid >= 3) {

      return
    }
    pageid++
    render()
    console.log(pageid)
  })

  $('.page1').on('click', function () {
    if (pageid >= 1) {
      return;
    }
    pageid--
    render()
  })

  $('#dropDown').on('change', function () {
    pageid = $(this).val()
    render()
  })
})