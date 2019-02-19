$(function () {
    // 获取session里的username
    getUsername();
    // 修改信息
    $("#personalchange").on("click", () => {
        if (window.confirm("是否确定修改信息")) {
            $.ajax({
                type: "get",
                url: 'http://172.16.4.241:80/userinfochange.php',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                data: {
                    phone: $("#phone").val(),
                    education: $("#education").val(),
                    income: $("#income").val()
                },
                success(data) {
                    if (data == "ok") {
                        location.href = 'http://172.16.4.241:8888/#personal';
                    }
                }
            });
        }
    });
})

function getUsername() {
    $.ajax({
        type: "get",
        url: 'http://172.16.4.241:80/getpersonal.php',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success(data) {
            if (data === "请登录") {
                $('.userInfochange').html(data).css("height", "200px");
            } else {
                data = JSON.parse(data);
                $("#username").val(data.username);
                $("#phone").val(data.phone);
                $("#education").val(data.education);
                $("#income").val(data.income);
            }
        }
    });
}