$(document).ready(function() {
    var TimeMove = 666;

    $(document).ready(function() {
        $("#GOTOP").click(function() {
            $("html,body").animate({
                scrollTop: 0,
            }, TimeMove);
        });
    });

});