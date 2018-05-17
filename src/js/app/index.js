define(["jquery", "bscroll"], function($, bscroll) {
    function list() {
        var sum = 0;
        $(".nav ul li").each(function() {
            sum += $(this).innerWidth();
        });
        $(".nav ul").innerWidth(sum);
        var scroll = new bscroll(".nav", {
            scrollY: false,
            scrollX: true
        });
        $(".nav ul li span").on("click", function() {
            $(this).addClass("active").parent().siblings().children().removeClass("active");
        })
    }
    return list;
});