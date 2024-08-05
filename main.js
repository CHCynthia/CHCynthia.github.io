document.addEventListener('DOMContentLoaded', () => {
    const bookElement = document.getElementById('book');

    const pageFlip = new St.PageFlip(bookElement, {
        width: 1200,
        height: 800,
        size: "fixed",
        showCover: true,
        usePortrait: true,
        singlePage: true,
        autoSize: true,
        mobileScrollSupport: false,
    });

    const images = [];

    for (let i = 1; i <= 35; i++) {
        const pageNum = i.toString().padStart(2, '0');
        images.push(`images/${pageNum}.jpg`); // 修正圖片路徑
    }

    pageFlip.loadFromImages(images).then(() => {
        document.querySelector(".page-total").innerText = pageFlip.getPageCount();
        document.querySelector(".page-current").innerText = pageFlip.getCurrentPage(); // 設置當前頁面

        document.querySelector(".btn-prev").addEventListener("click", () => {
            pageFlip.flipPrev();
        });

        document.querySelector(".btn-next").addEventListener("click", () => {
            pageFlip.flipNext();
        });

        pageFlip.on("flip", (e) => {
            document.querySelector(".page-current").innerText = e.data + 1;
        });

        pageFlip.on("changeState", (e) => {
            const stateElement = document.querySelector(".page-state");
            if (stateElement) {
                stateElement.innerText = e.data;
            }
        });

        pageFlip.on("changeOrientation", (e) => {
            const orientationElement = document.querySelector(".page-orientation");
            if (orientationElement) {
                orientationElement.innerText = e.data;
            }
        });
    });
});
