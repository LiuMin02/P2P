$(function(){
    // 获取数据用户名
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
                $("#zhuxiao").css("display","none");
                $("#usname").html(data).closest("a").attr("href","login.html");
            }else{
                $("#zhuxiao").css("display","block");
                $("#usname").html(data).closest("a").attr("href","#personal");
            }
        }
    });
    //当浏览器HASH值发生变化，就会触发此事件句柄
    window.onhashchange = hashChange
    //初始化加载子模块
    hashChange()
    // 选项卡
    $("#navPrimary li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    // 联系客服
    $('#contact').tooltip({
        title: "<img src='../assets/imgs/wx.jpg' width='100px' height='100px' />",
        trigger:"hover",
        placement:"bottom",
        html: true  //是否以HTML节点插入，默认为false（已文本插入）
    });
    
})


function hashChange(){
    let ct = document.getElementById('content')

    //根据HASH值进行模块加载！！！
    switch(location.hash){
        case '#invest': $(ct).load('../modules/invest.html');break;
        case '#borrow': $(ct).load('../modules/borrow.html') ;break;
        case '#personal': $(ct).load('../modules/personal.html') ;break;
        case '#guide': $(ct).load('../modules/guide.html') ;break;
        case '#us': $(ct).load('../modules/us.html') ;break;
        case '#borrowPro': $(ct).load('../modules/borrowPro.html') ;break;
        case '#accountFlow': $(ct).load('../modules/accountFlow.html') ;break;
        case '#recharge': $(ct).load('../modules/recharge.html') ;break;
        case '#userinfo': $(ct).load('../modules/userInfo.html') ;break;
        case '#borrowapply': $(ct).load('../modules/borrowapply.html') ;break;
        case '#borrowuser': $(ct).load('../modules/borrowuser.html') ;break;
        case '#userinfochange': $(ct).load('../modules/userinfochange.html') ;break;
        //加载首页
        default: $(ct).load('../modules/main.html');
    }
}