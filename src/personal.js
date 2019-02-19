$(function(){
    getpersonal();
    $("#chargemoney").on("click",chargemoneyIsOk);
})
function getpersonal(){
    // 获取信息
    $.ajax({
        type:"get",
        url:"http://172.16.4.241:80/personal.php",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success(data){
            // console.log(data);
            if(data=="请登录..."){
                alert(data);
                location.href="http://172.16.4.241:8888/login.html"
            }else{
                let result = JSON.parse(data);
                for (const key in result) {
                    $('#'+key).html(result[key]);
                }
                // console.log(result);
            }
        }
    });
}

function chargemoneyIsOk(){
    console.log($('#money').val());//获取输入的金额  注意 val获取的值为字符串
    $.ajax({
        type:"get",
        url:"http://172.16.4.241:80/countrecharge.php",
        xhrFields: {
            withCredentials: true
        },
        data:{
            chargemoney:$('#money').val()
        },
        crossDomain: true,
        success(data){
            if(data=="充值成功"){
                alert(data);
                getpersonal();
            }else if(data=="请登录..."){
                alert(data);
            }
        }  
    });
    
}