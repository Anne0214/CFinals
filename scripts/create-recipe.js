// 食譜封面圖
$(document).on("click", "#preview-cover", function() {
    $('#RECIPE_COVER').click();
    $(document).on("change", "#RECIPE_COVER", function() {
        var fileObj = $("#RECIPE_COVER")[0];
        var img = document.getElementById('preview-cover');
        var reader = new FileReader();
        reader.onload = function(e) {
            if (reader.readyState === 2) {
                img.src = e.target.result;
                console.log(img.src);
            }
        }
        reader.readAsDataURL(fileObj.files[0]);
    });
});
//產步驟div
$("#addStep").click(function() {

})