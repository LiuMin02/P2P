
let flag=true;//是否初始化分页
let maxpage,page=1,pagesize=4;

$(function(){
    //初始化获取借款数据
    getBorrowlist(page);
    $("input:radio[name='bidRequestState']").on("change",()=>{
        flag = true;
        getBorrowlist(page);
    });
})
// 全部信息
function getBorrowlist(currpage){
    let types=$("input:checked").val();
    $.ajax({
        type:"get",
        url:"http://172.16.4.241:80/borrowlist.php",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data:{
            type:types,
            pagesize,
            currpage
        },
        success(data){
            data = JSON.parse(data);
            let result = data.data;
            maxpage = data.maxpage;
            let str = [];
            for (const value of result) {
                str +=`<tr>
                        <td>${value.username}</td>
                        <td>${value.title}</td>
                        <td>${value.interest}%</td>
                        <td>${value.borrowmoney}</td>
                        <td>${value.repaytype=="0"?"按月分期":"按月到期"}</td>
                        <td>${parseInt(value.hasmoney/value.borrowmoney*100)}%</td>
                        <td>
                            <button type="button" class="btn btn-danger" onclick="getborrowuser(${value.id})">查看</button>
                        </td>
                    </tr>`
            }
            $("#gridBody").html(str);
            if(flag){
                initpaging();
                flag=false;
            }
        }
    });
}

function initpaging(){
    // let totalNum = maxpage*pagesize;
    var setTotalCount = 1000;
    $('#box').paging({
        initPageNo: 1, // 初始页码
        totalPages: maxpage, //总页数
        // totalCount: '合计' + totalNum + '条数据', // 条目总数
        slideSpeed: 600, // 缓动速度。单位毫秒
        jump: true, //是否支持跳转
        callback: function(currpage) { // 回调函数
            getBorrowlist(currpage);
        }
    })
}

function getborrowuser(id){
    console.log(id);
    
    sessionStorage.borrowid=id;
    location.href = "http://172.16.4.241:8888/?type=1#borrowuser";
}