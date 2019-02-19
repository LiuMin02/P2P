
$(function(){
    // let borrowid=sessionStorage.borrowid;
    // console.log(borrowid);
    // 数据回显
    getborrowuser();
    $("#investmoney").on("click",investmoney);
});

function getborrowuser(){
    $.ajax({
        type:"get",
        url:"http://172.16.4.241:80/getborrowuser.php",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data:{
            borrowid:sessionStorage.borrowid
        },
        success(data){
            data = JSON.parse(data);
            console.log(data);
            for (const key in data) {
                $("."+key).html(data[key]);
            }
        }
    });
}

function investmoney(){
    $.ajax({
        type:"get",
        url:"http://172.16.4.241:80/inverstmoney.php",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data:{
            borrowid:sessionStorage.borrowid,
            investmoney:$('#money').val()
        },
        success(data){
            if(data=="请登录..."){
                alert(data);
                location.href="http://172.16.4.241:8888/login.html";
            }else{
                alert(data);
            }
        }
    });
}