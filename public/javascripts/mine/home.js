$$(document).on('pageInit', '.page[data-page="home"]',function (e) {
    $$.ajax({
        url: serverIp+'/belief/front/lordsong/album/list',
        async:true,
        data:{groupid:6},
        dataType:'json',
        method:'get',
        crossDomain:true,
        error:function(xhr,status){
          console.log(status)
        },
        success:function(data, status, xhr){
          if(status==200){
            var photos = [];
            for(var item in data) {
              photos[item] = data[item].profile;
            }
            var myPhotoBrowser = myApp.photoBrowser({
                zoom: 400,
                photos: photos
            });   
            myPhotoBrowser.open(); // 打开图片浏览器
          }
        }
      })
})

