$(function(){
    // 获取session里的username
    getUsername();
})

function getUsername(){
    $.ajax({
        type:"get",
        url:'http://172.16.4.241:80/getsession.php',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success(data){
            // console.log(data);
            if(data==="请登录..."){
                $('.userInfo').html(data).css("height","200px");
            }else{
                $("#username").val(data);
            }
        }
    });
}