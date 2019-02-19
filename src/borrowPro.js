$(function(){
    let status = $(".status").html();
    console.log(status);
    switch(status){
        case "还款中":$(this).css("color","#777");
    }
})