document.addEventListener('DOMContentLoaded', function() {
    // 初始化翻頁效果
    const book = St.PageFlip.getInstanceById('demoBookExample');

    // 上一頁按鈕事件
    document.querySelector('.btn-prev').addEventListener('click', function() {
        if (book) {
            book.flipPrev(); // 翻到上一頁
            updatePageInfo(); // 更新頁面資訊
        }
    });

    // 下一頁按鈕事件
    document.querySelector('.btn-next').addEventListener('click', function() {
        if (book) {
            book.flipNext(); // 翻到下一頁
            updatePageInfo(); // 更新頁面資訊
        }
    });

    // 更新頁面資訊
    function updatePageInfo() {
        if (book) {
            document.querySelector('.page-current').textContent = book.getCurrentPage();
            document.querySelector('.page-total').textContent = book.getTotalPages();
            document.querySelector('.page-state').textContent = book.getState(); // 假設有這個方法
            document.querySelector('.page-orientation').textContent = book.getOrientation(); // 假設有這個方法
        }
    }

    // 初始化時更新頁面資訊
    updatePageInfo();
});
