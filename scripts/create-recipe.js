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
const step = `<div class="step d-flex align-items-center">
    <div style="width:200px;">
        <img src="Images/core-images/logo-reverse.png" alt="步驟預覽圖">
        <input type="file" class="form-control" accept="image/png, image/x-png, image/jpeg, image/pjpeg" name="STEP_DESCRIPTION_PICTURE步驟附圖">
    </div>
    <div style="position:relative;" class="flex-fill">
        <span class="number">2</span>
        <span class="btns">
            <i class="fa-solid fa-trash-can"></i>
            <i class="fa-solid fa-plus"></i>
        </span>
        <textarea name="STEP_DESCRIPTION步驟說明" id="STEP_DESCRIPTION步驟說明" maxlength="200" minlength="20" class="form-control" rows="4">請輸入步驟說明</textarea>
    </div>
`;
$("#addStep").click(function(event) {
    event.preventDefault();
    $("#steps").append(step);
})

//產食材div

const food = `                           <div class="food row">
<div class="col-6">
    <input type="text" class="form-control" placeholder="名稱">
</div>
<div class="col-5">
    <input type="text" class="form-control" placeholder="份量">
</div>
<div style="font-size: 1.3rem;
cursor: pointer;" class="col-1">
    <i class="fa-solid fa-trash-can"></i>
</div>
</div>`;
$("#addFood").click(function(event) {
    event.preventDefault();
    $(".foods").append(food);
})


//步驟按鈕的動態繫結
// $(".btns>.fa-plus").click(function() {
//     console.log('成功')
//     $(this).closest(".step").after(step);
// })
// $(".step").on('click', '.btns>.fa-plus', function() {
//     console.log('成功')
//     $(this).closest(".step").after(step);
// })

//步驟的刪除跟新曾紐
// $(".step .btns>i").eq(0).click();
// $(".step .btns>i").eq(1).click();