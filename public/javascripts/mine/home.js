
function viewAlbumPhotos(id){
  $$.ajax({
    url: serverIp+'album/front/album/photo/list',
    async:true,
    data:{groupid:id},
    dataType:'json',
    method:'POST',
    crossDomain:true,
    error:function(xhr,status){
      console.log(status)
    },
    success:function(data, status, xhr){
      if(status==200){
        console.log(data)
        var photos = [];
        for(var item in data) {
          photos[item] = data[item].url;
        }
        var myPhotoBrowser = myApp.photoBrowser({
            zoom: 400,
            photos: photos
        });   
        myPhotoBrowser.open();
      }
    }
  })
}

$$(document).on('pageInit', '.page[data-page="home"]',function (e) {
  $$.ajax({
    url: serverIp+'/album/front/album/photo/group/list',
    async:true,
    dataType:'json',
    method:'get',
    crossDomain:true,
    error:function(xhr,status){
      console.log(status)
    },
    success:function(data, status, xhr){
      if(status==200){
        for(var item in data) {
          var str = "<li class='item-content' onclick='viewAlbumPhotos("+data[item].id+")'>"+
            "<div class='item-media'><img src='"+data[item].profile+"' width='80' height='100'></div>"+
            "<div class='item-inner'>"+
              "<div class='item-title-row'>"+
                "<div class='item-title'>"+data[item].name+"</div>"+
              "</div>"+
              "<div class='item-subtitle'>"+data[item].creTime+"</div>"+
            "</div>"+
        "</li>";
          $$("#albumGroupUL").append(str);
        }
      }
    }
  })
})

 
