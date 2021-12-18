$(document).ready(function(){

   
    // 书写 php->html
    // 首先创建邮箱名后缀保存数组
    var A_Mnames = new Array(
        "@some.com", 
        "@163.com", 
        "@126.com",
        "@193.com",
        "@qq.com",
        "@msn.com",
        "@sina.com",
        "@some.edu.cn",
        "@gmail.com",
        "@sohu.com",
        "@yeah.net",
        "@hotmail.com",
        "@googlemail.com",
        "@sogou.com",  
        "@aol.com",
        "@ask.com",
        );

    for (var i=0; i<A_Mnames.length; i++){
        $("div#JS_WriteMBOX").append(
            "<div class=MailBox_son id=\'Mname"+(i+1)+"\'><span id=\'M"+(i+1)+"\'></span><span id=\'MT"+(i+1)+"\'>"+A_Mnames[i]+"</span></div>"
        );
    }
   
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // 设置邮箱名选择框的属性
    // 设置邮箱后缀自动提示的子项数目
    var MailSum = A_Mnames.length;

    // 设置渐进退出时间/ms
    var TimeTrans=888;
    
    // 设置刚开始隐藏邮箱提示框
    // $("#MailChoicesBox").css("display", "none");


    $("#Minput").blur(function(){
        $("#MailChoicesBox").fadeOut(TimeTrans);
        // $("#MailChoicesBox").slideToggle(TimeTrans);

    });


    $("#Minput").focus(function(){
        $("#MailChoicesBox").css("display", "block");
        // $("#MailChoicesBox").slideToggle(TimeTrans);
   
    });
    
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // 设置键盘按键按下时启动以下程序：
    $("#Minput").keyup(function(){

        // 获取邮箱输入框的内容
        var Mail_Adress = $("#Minput").val();

        // 判断邮箱输入框里面是否已经含有@，如果有则只取@号前面的字符串
        // 使用 indexOf() 方法可以返回某个指定的字符值或字符串值在字符串中首次出现的位置
        // includes() 方法用于判断字符串是否包含指定的子字符串
        // slice(start, end) 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分
        // slice(start, end) 使用 start（包含）和 end（不包含）的位置参数来指定字符串提取的部分
        // 使用 length 属性返回字符串的长度(字符数)
        if(Mail_Adress.includes("@")){
            var at_index = Mail_Adress.indexOf("@");
            var pure_Mname = Mail_Adress.slice(0, at_index)

            Mail_Adress = pure_Mname;
        }

        for(var i=1; i<=MailSum; i++){
            $("#M"+i).text(Mail_Adress);
            $("#Minput").val(Mail_Adress);
        }
    
    });


    function WriteMname(i){
        $("#Mname"+i).click(function(){

            // 定义邮箱输入框中输入的字符串为 tempM
            var tempM =  $("#Minput").val();
            // 定义对应的子选项邮箱名后缀为 MTT
            var MTT = $("#MT"+i).text();

           // 进行添加后缀名的运算
                $("#Minput").val(tempM + MTT);
        });
    }


    function WriteMname_ALL (n){
        
        // 定义邮箱输入框中输入的字符串为 tempM
        var tempM =  $("#Minput").val();

        for (var j=0; j<=n; j++){
            WriteMname(j)
        }
    }
 

    // 同步书写组改变邮箱名
    WriteMname_ALL (MailSum);


  



});
