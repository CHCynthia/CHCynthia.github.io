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

