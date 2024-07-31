// 獲取書本容器
const bookElement = document.getElementById('book');

// 創建 PageFlip 對象
const pageFlip = new St.PageFlip(bookElement, {
    width: 1160,  // 頁面寬度
    height: 780, // 頁面高度
    size: 'fixed', // 固定大小
    showCover: true, // 顯示封面
    usePortrait: true // 啟用豎屏模式
});

// 加載圖片
const images = [];
for (let i = 1; i <= 2; i++) {
    const pageNum = i.toString().padStart(2, '0'); // 將數字轉為兩位數的字符串
    images.push(`images/${pageNum}.gif`);
}
for (let i = 3; i <= 35; i++) {
    const pageNum = i.toString().padStart(2, '0'); // 將數字轉為兩位數的字符串
    images.push(`images/${pageNum}.jpg`);
}
pageFlip.loadFromImages(images);
