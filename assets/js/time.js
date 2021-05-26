
setInterval(function () {
    let date = new Date();
    let year = date.getFullYear();    //获取当前年份   
    let mon = date.getMonth() + 1;      //获取当前月份   
    let da = date.getDate();          //获取当前日   
    let day = date.getDay();          //获取当前星期几   
    let h = date.getHours();          //获取小时   
    let m = date.getMinutes();        //获取分钟   
    let s = date.getSeconds();        //获取秒   
    let div = document.querySelector('.date');
    div.innerHTML = year + '年' + mon + '月' + da + '日' + '星期' + day + ' ' + h + ':' + m + ':' + s;
}, 0)

