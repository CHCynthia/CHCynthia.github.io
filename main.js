document.addEventListener('DOMContentLoaded', () => {
    const bookElement = document.getElementById('book');

    // 檢查 PageFlip 庫是否加載
    if (!St || !St.PageFlip) {
        console.error('PageFlip library is not loaded');
        return;
    }

    const pageFlip = new St.PageFlip(bookElement, {
        width: 1400,
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
        console.log('Images loaded successfully');
        const pageCount = pageFlip.getPageCount();
        console.log('Total pages:', pageCount);

        if (pageCount > 0) {
            document.querySelector(".page-total").innerText = pageCount;
            document.querySelector(".page-current").innerText = pageFlip.getCurrentPage() + 1; // 設置當前頁面
        } else {
            console.error('Page count is zero or not retrieved correctly');
        }

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
    }).catch(error => {
        console.error('Error loading images:', error);
    });
});
