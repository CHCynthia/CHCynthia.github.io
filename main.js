const bookElement = document.getElementById('book');

const pageFlip = new St.PageFlip(bookElement, {
    width: 1200, // Adjusted to 50% of original width
    height: 800, // Adjusted to 50% of original height
    size: "fixed",
    showCover: true,
    usePortrait: true,
    singlePage: true,
    autoSize: true,
    mobileScrollSupport: false,
});

for (let i = 1; i <= 35; i++) {
    const pageNum = i.toString().padStart(2, '0');
    images.push(`images/${pageNum}.jpg`);
}
pageFlip.loadFromImages(images);

document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // 假設你的 page-flip 物件名稱是 pageFlip
    const pageFlip = new PageFlip(book, {
        // 配置你的 pageFlip 選項
    });

    prevButton.addEventListener('click', () => {
        pageFlip.flipPrev(); // 或者你需要使用的方法名稱
    });

    nextButton.addEventListener('click', () => {
        pageFlip.flipNext(); // 或者你需要使用的方法名稱
    });
});
