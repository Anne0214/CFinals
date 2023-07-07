$(".sidebar-list li").click(function() {

    $(this).addClass("active").removeClass("hover").siblings().removeClass("active").addClass("hover");
});

// 以下待修
$("button:contains('追蹤')").click(function() {
    console.log("追蹤變取消追蹤")
    $(this).html(`<i class="fa-solid fa-user-large-slash"></i>取消追蹤</button>`);
    $(this).addClass("btn-outline-primary");
    $(this).removeClass("btn-primary");
});
$("button:contains('取消追蹤')").click(function() {
    console.log("取消追蹤變追蹤")
    $(this).html(`<i class="fa-solid fa-user-plus "></i> 追蹤`);
    $(this).addClass("btn-primary");
    $(this).removeClass("btn-outline-primary");
});