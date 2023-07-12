//數量器用

$("#minus_btn").click(function() {

    var count = $("#num").val();
    count--;
    $("#num").val(count);
})

$("#add_btn").click(function() {

    var count = $("#num").val();
    count++;
    $("#num").val(count);
})