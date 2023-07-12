$(".d-order>ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});