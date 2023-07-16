$("#search-target").change(function() {

    const target = $(this).val()

    const author = `<input type="text" class="form-control" placeholder="請輸入作者名稱" id="search-input-author">`

    const recipe = `<input type="text" class="form-control" placeholder="輸入食譜名稱" id="search-input-recipe">
    <input type="text" class="form-control" placeholder="食材名稱，請以空白隔開" id="search-input-food">`
    const advanced_search = `<button class="btn-advanced-search" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAdvanceSearch" aria-expanded="false" aria-controls="collapseAdvanceSearch">
    進階搜尋▾
</button>
<div class="collapse" id="collapseAdvanceSearch">
    <div class="row">
        <div class="col-6">
            <label for="amount" class="form-label">份量</label>
            <select name="amount" id="amount" class="form-select">
                <option value="1" selected>1人</option>
                <option value="2">2人</option>
            </select>
        </div>
        <div class="col-6">
            <label for="time" class="form-label">時間</label>
            <select name="time" id="time" class="form-select">
                <option value="1">10分鐘</option>
                <option value="2">20分鐘</option>
            </select>
        </div>
    </div>
</div>`

    $("#search-input").find("input").remove();

    if (target == 1) {
        $("#search-input").after(advanced_search);
        $("#search-input").prepend(recipe);

    } else {
        $("#search-input").next(".btn-advanced-search").remove();
        $("#search-input").next("#collapseAdvanceSearch").remove();
        $("#search-input").prepend(author);
    }

})