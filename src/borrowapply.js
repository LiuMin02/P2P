$(function(){
    let type=location.search.substring(1).split("=")[1];
    switch(type){
        case "1" :$("#borrowType").html("信用");
        getpersonal();
        break;
        case "2" :$("#borrowType").html("车贷");
        $(".momey").html("200,000");
        break;
        case "3" :$("#borrowType").html("房贷");
        $(".momey").html("1,000,000");
        break;
    }
    $("#borrow2").on("change",countFn);
    $("#borrow3").on("change",countFn);
})
// 获取学历
function getpersonal(){
    // 获取信息
    $.ajax({
        type:"get",
        url:"http://172.16.4.241/getpersonal.php",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success(data){
            if(data!="请登录"){
                data = JSON.parse(data);
                switch(data.education){
                    case "硕士":$(".momey").html("200,000");break;
                    case "本科":$(".momey").html("150,000");break;
                    case "专科":$(".momey").html("100,000");break;
                    case "高中":$(".momey").html("80,000");break;
                    case "其他":$(".momey").html("50,000");break;
                }
            }
        }
    });
}

function countFn(){

    let borrowmoney = $('#borrow1').val();
    let interest = $('#borrow2').val();
    let borrowtime = $('#borrow3').val();
    if(borrowmoney&&interest){
        interest = interest/100;
        // 计算利息 (总借款金额 * 年利率 ) / 12 * 借款月数
        let lixi = borrowmoney*interest/12*borrowtime;
        // 计算管理费 (总借款金额 * 0.02 ) / 12 * 借款月数
        let managemoney = borrowmoney*0.02/12*borrowtime;
        $("#lixi").html(lixi.toFixed(2));
        $("#managemoney").html(managemoney.toFixed(2));
    }else{
        return;
    }
}