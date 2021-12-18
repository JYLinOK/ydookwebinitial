$(document).ready(function(){

        var PasswdSeeBtn = $('#JS_PasswdSeeBtn');
        var PasswdInput = $(".Input_User_passwd");
        // var PasswdSeeBtn_Content = $("#PasswdSeeBtn_Content")
    
        PasswdSeeBtn.off('click').on('click',function(){
            if(PasswdInput.prop('type') == "password"){
                PasswdInput.prop('type','text');
                PasswdSeeBtn.css('background-image',"url(Photo/EyeOpen.png)");
            }else{
                PasswdInput.prop('type','password');
                PasswdSeeBtn.css('background-image',"url(Photo/EyeClose.png)");
            };
        });     

});
