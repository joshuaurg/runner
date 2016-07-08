function randomString(len) {
　　len = len || 32;
   /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; 
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}

function sign(path,map){
    var signature = "";
    var data = {};
    var timestamp = new Date().getTime();
    var nonce = randomString(16);
    var params = path+"timestamp="+timestamp+"nonce="+nonce;
    data.timestamp = timestamp;
    data.nonce = nonce;
    if(map==null){
        signature = hex_sha1(params);
    }else{
        for(var key in map){
            params += (key + "=" + map[key]);
            data[key] = map[key];
        }
        signature = hex_sha1(params);
    }
    data.signature = signature;
    return data;    
}