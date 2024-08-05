const bookElement = document.getElementById('book');

const pageFlip = new St.PageFlip(bookElement, {
    width: 1200,
    height: 1600,
    size: "stretch",
    showCover: true,
    singlePage: false,
    autoSize: true,
    mobileScrollSupport: false,
});

const images = [];
for (let i = 1; i <= 35; i++) {
    const pageNum = i.toString().padStart(2, '0');
    images.push(`images/${pageNum}.jpg`);
}
pageFlip.loadFromImages(images);
