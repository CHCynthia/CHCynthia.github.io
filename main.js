// 獲取書本容器
const bookElement = document.getElementById('book');

// 創建 PageFlip 對象
const pageFlip = new St.PageFlip(bookElement, {
    width: 1200,  // 容器的寬度
    height: 1600, // 容器的高度
    size: 'fixed', // 固定大小
    showCover: true, // 顯示封面
    usePortrait: true, // 啟用豎屏模式
    singlePage: true // 啟用單頁模式
});

// 加載圖片
const images = [];
for (let i = 1; i <= 5; i++) {
    const pageNum = i.toString().padStart(2, '0'); // 將數字轉為兩位數的字符串
    images.push(`path/to/images/${pageNum}.jpg`);
}

pageFlip.loadFromImages(images);

// 當窗口大小改變時更新 PageFlip
window.addEventListener('resize', () => {
    pageFlip.updateFromImages(images);
});
