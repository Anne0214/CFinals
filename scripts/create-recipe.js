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
//步驟圖上傳(1)
$(document).on("click", "#preview-step1", function() {
    $('#upload_step1').click();
    $(document).on("change", "#upload_step1", function() {
        var fileObj = $("#upload_step1")[0];
        var img = document.getElementById('preview-step1');
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

$("#addStep").click(function(event) {
    event.preventDefault();
    let step_count = $(".step").length;
    step_count++
    const step = `<div class="step d-flex align-items-center">
    <div style="width:200px;">
        <img src="Images/recipe/UploadImage.png" alt="步驟預覽圖" id="preview-step${step_count}" style="width:200px;height:158px;object-fit:cover;" >
        <input type="file" class="form-control" accept="image/png, image/x-png, image/jpeg, image/pjpeg" name="STEP_DESCRIPTION_PICTURE步驟附圖" id="upload_step${step_count}">
    </div>
    <div style="position:relative;" class="flex-fill">
        <span class="number">${step_count}</span>
        <span class="btns">
            <i class="fa-solid fa-trash-can"></i>
            <i class="fa-solid fa-plus"></i>
        </span>
        <textarea name="STEP_DESCRIPTION步驟說明" id="STEP_DESCRIPTION步驟說明" maxlength="200" minlength="20" class="form-control" rows="4" placeholder="請輸入步驟說明"></textarea>
    </div>
`;

    $("#steps").append(step);
    const photo_id = `#preview-step${step_count}`
    const input_id = `#upload_step${step_count}`
    $(document).on("click", photo_id, function() {
        $(input_id).click();
        $(document).on("change", input_id, function() {
            var fileObj = $(input_id)[0];
            var img = document.getElementById(photo_id.replace(`#`, ``));
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
})

//步驟刪除鈕的動態繫結
$(document).on('click', '.step .btns .fa-trash-can', function() {
    let step_count = $(this).closest(".step").find(".number").text();
    step = parseInt(step_count, 10)

    //重新編號
    $(this).closest(".step").nextAll(".step").each(function() {
        $(this).find(".number").text(step_count)
        step_count++
    })

    $(this).closest(".step").remove();

});
//步驟新增鈕的動態繫結
$(document).on('click', '.step .btns .fa-plus', function() {
    let step_count = $(this).closest(".step").find(".number").text();
    step_count = parseInt(step_count, 10)
    step_count++

    const step = `<div class="step d-flex align-items-center">
    <div style="width:200px;">
        <img src="Images/recipe/UploadImage.png" alt="步驟預覽圖" id="preview-step${step_count}" style="width:200px;height:158px;object-fit:cover;" >
        <input type="file" class="form-control" accept="image/png, image/x-png, image/jpeg, image/pjpeg" name="STEP_DESCRIPTION_PICTURE步驟附圖" id="upload_step${step_count}">
    </div>
    <div style="position:relative;" class="flex-fill">
        <span class="number">${step_count}</span>
        <span class="btns">
            <i class="fa-solid fa-trash-can"></i>
            <i class="fa-solid fa-plus"></i>
        </span>
        <textarea name="STEP_DESCRIPTION步驟說明" id="STEP_DESCRIPTION步驟說明" maxlength="200" minlength="20" class="form-control" rows="4" placeholder="請輸入步驟說明"></textarea>
    </div>
`;
    $(this).closest(".step").after(step);

    //重新編號
    $(this).closest(".step").nextAll(".step").each(function() {
        $(this).find(".number").text(step_count)
        step_count++
    })
});

//產食材div
const food = ` <div class="food row">
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

//食材刪除鈕的動態繫結
$(".foods").on('click', '.food .fa-trash-can', function() {
    $(this).closest(".food").remove();
})

//表單驗證
// 如果验证不通过禁止提交表单
function validate() {
    'use strict';
    window.addEventListener('load', function() {
        // 获取表单验证样式
        var forms = document.getElementsByClassName('needs-validation');
        // 循环并禁止提交
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
};
validate();