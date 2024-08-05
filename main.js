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

const images = [];

for (let i = 1; i <= 35; i++) {
    const pageNum = i.toString().padStart(2, '0');
    images.push(`images/${pageNum}.jpg`);
}
pageFlip.loadFromImages(images);

document.querySelector(".page-total").innerText = pageFlip.getPageCount();
    document.querySelector(
        ".page-orientation"
    ).innerText = pageFlip.getOrientation();

    document.querySelector(".btn-prev").addEventListener("click", () => {
        pageFlip.flipPrev(); // Turn to the previous page (with animation)
    });

    document.querySelector(".btn-next").addEventListener("click", () => {
        pageFlip.flipNext(); // Turn to the next page (with animation)
    });
    pageFlip.on("flip", (e) => {
        document.querySelector(".page-current").innerText = e.data + 1;
    });

    // triggered when the state of the book changes
    pageFlip.on("changeState", (e) => {
        document.querySelector(".page-state").innerText = e.data;
    });

    // triggered when page orientation changes
    pageFlip.on("changeOrientation", (e) => {
        document.querySelector(".page-orientation").innerText = e.data;
    });

