
function viewAlbumPhotos(id){
  var path = '/album/front/album/photo/list';
  var param = {};
  param.groupid = id;
  var signInfo = sign(path,param);
  $$.ajax({
    url: serverIp+path,
    async:true,
    data:signInfo,
    dataType:'json',
    method:'POST',
    crossDomain:true,
    error:function(xhr,status){
      console.log(status)
    },
    success:function(data, status, xhr){
      if(status==200){
        var photos = [];
        for(var i in data) {
          var item = {};
          item.url = data[i].url;
          item.caption = data[i].remark;
          photos[i] = item;
        }
        var myPhotoBrowser = myApp.photoBrowser({
            zoom:false,
            photos: photos,
            backLinkText:'返回',
            swipeToClose:false,
            spaceBetween:0,
            ofText:'/',
            theme: 'dark',
        });   
        myPhotoBrowser.open();
      }
    }
  })
}

$$(document).on('pageInit', '.page[data-page="home"]',function (e) {
  var path = '/album/front/album/photo/group/list';
  var signInfo = sign(path,null);
  $$.ajax({
    url: serverIp+path,
    async:true,
    dataType:'json',
    method:'post',
    data:signInfo,
    crossDomain:true,
    error:function(xhr,status){
      console.log(status)
    },
    success:function(data, status, xhr){
      if(status==200 && data.status != 'error'){
        for(var item in data) {
          var str = "<li class='item-content' onclick='viewAlbumPhotos("+data[item].id+")'>"+
            "<div class='item-media'><img src='"+data[item].profile+"' width='100' height='100'></div>"+
            "<div class='item-inner'>"+
              "<div class='item-title-row'>"+
                "<div class='item-title'>"+data[item].name+"</div>"+
              "</div>"+
              "<div class='item-subtitle'>"+data[item].remark+"</div>"+
              "<div class='item-subtitle item-subtitle-extra'>创建："+data[item].creTime+"</div>"+
            "</div>"+
        "</li>";
          $$("#albumGroupUL").append(str);
        }
      }else{
        alert(data)
      }
    }
  })
})

 
