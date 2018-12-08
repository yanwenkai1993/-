$(function () {

  var pageid = 1
  var pages

  function render(pages) {

    $.ajax({
      typee: 'get',
      url: 'http://127.0.0.1:9090/api/getmoneyctrl',
      data: {
        pageid: pageid || 0,
      },
      dataType: 'json',
      success: function (info) {
        console.log(info)
        $('.mm_info ul').html(template('monTpl', info))

        pages = Math.ceil(info.totalCount / info.pagesize)
        $('#dropDown').html(template('select_tmp', {
          pageid: pageid,
          pages: pages
        }))
      }
    })
  }
  render()
  

  $('.page2').on('click', function () {    
    if (pageid >= pages) {
      return
    }
    pageid++
    render()
  })

  $('.page1').on('click',function(){    
    if(pageid==1){
      return
    }
    pageid--
    render()
  })


  $('#dropDown').on('change',function(){
    pageid = $(this).val()
    render()
  })
})