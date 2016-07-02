function login(){
  alert('sdfds')
  $$.ajax({
    url: serverIp+'/u/login',
    async:true,
    dataType:'json',
    method:'post',
    data:{username:'dcx'},
    crossDomain:true,
    error:function(xhr,status){
      console.log(status)
    },
    success:function(data, status, xhr){
      if(status==200){
          mainView.router.loadPage('/users/home');
      }
    }
  })
}
