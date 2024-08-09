const bookElement = document.getElementById('book');

const pageFlip = new St.PageFlip(bookElement, {
    width: 2400,
    height: 1600,
    size: "fixed",
    showCover: true,
    usePortrait: true,
    singlePage: true,
    autoSize: true,
    mobileScrollSupport: false,
});

const images = [];
for (let i = 0; i <= 36; i++) {
    const pageNum = i.toString().padStart(2, '0');
    images.push(`images/${pageNum}.jpg`);
}
pageFlip.loadFromImages(images);

document.getElementById('prevPage').addEventListener('click', () => {
    pageFlip.flipPrev();
});

document.getElementById('nextPage').addEventListener('click', () => {
    pageFlip.flipNext();
});
