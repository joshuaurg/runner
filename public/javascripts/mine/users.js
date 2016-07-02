function login(){

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
        alert('11111')
          mainView.router.loadPage('/users/home');
          alert('11111')
      }
    }
  })
}
