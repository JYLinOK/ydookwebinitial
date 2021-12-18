$(document).ready(function(){
    var tt = null; 
    tt = setTimeout(time,0);  //设置等待0秒马上执行计时器
   
    function time()
   {
        clearTimeout(tt);  //定时器清楚归零
        dt = new Date();
        var y=dt.getYear()+1900;  
        var mm=dt.getMonth()+1;
        var d=dt.getDate();
        var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        var day=dt.getDay();
        var h=dt.getHours();
        var m=dt.getMinutes();
        var s=dt.getSeconds();
        if(h<10){h="0"+h;}
        if(m<10){m="0"+m;}
        if(s<10){s="0"+s;}
        document.getElementById("timeShow").innerHTML = 
            "现在时间："+y+"年"+mm+"月"+d+"日"+"&nbsp"+"&nbsp"+weekday[day]+"&nbsp"+"&nbsp"+"&nbsp"+h+":"+m+":"+s;
        tt = setTimeout(time,1000);   //设定定时器循环，一秒后在执行一次           
}

});





    