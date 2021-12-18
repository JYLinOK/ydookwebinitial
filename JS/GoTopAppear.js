$(document).ready(function(){
    var hightpx=0;
    var TimeMs=600;
    var TimeTrans=1600;
    
    $(document).ready(function(){
      $(document).scroll(function(){
        hightpx = $(document).scrollTop(); 
    
        if(hightpx >= TimeMs){
            $("#GOTOP").fadeIn(TimeTrans);
        }
    
        if(hightpx < TimeMs){
            // alert("alert!!!!!!!!!!!!!");
            $("#GOTOP").fadeOut(TimeTrans);
        }
    });
    });
});





