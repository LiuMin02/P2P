var verifyCode;
window.onload=function(){
    //初始化验证码的DIV
    verifyCode = new GVerify("reg_div");
    // 验证sessionStorage是否存在
    if(!sessionStorage.currentNum){
        sessionStorage.currentNum=0;
    }
    if(location.search.indexOf("error")!=-1){
        sessionStorage.currentNum++;
        // console.log(sessionStorage.currentNum);
        regCode.innerHTML="用户名或密码错误，请重新填写";
        regCode.style.color="#f00";
        regCode.style.display = 'block';
    }
    if(sessionStorage.currentNum>=3){
        document.getElementsByClassName("verification")[0].style.display = 'block';
    }
    document.getElementsByName("username")[0].onfocus=function(){
        regCode.style.display = 'none';
    };
}
// 验证函数
function checkLogin(){
    if(sessionStorage.currentNum>=3){
        let isTestPass = verifyCode.validate(code_input.value); //验证码是否匹配成功
        console.log(isTestPass)
        if(isTestPass == false){
            //显示验证码提示
            regCode.innerHTML="验证码输入错误！";
            regCode.style.color="#f00";
            regCode.style.display = 'block'
        }
        return isTestPass
    }else{
        return true;
    }
}