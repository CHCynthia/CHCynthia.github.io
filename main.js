const bookElement = document.getElementById('book');

const pageFlip = new St.PageFlip(bookElement, {
    width: 1160,
    height: 780,
    size: 'fixed',
    showCover: true,
    usePortrait: true,
});

const images = [];
for (let i = 1; i <= 2; i++) {
    const pageNum = i.toString().padStart(2, '0');
    images.push(`images/${pageNum}.gif`);
}
for (let i = 3; i <= 35; i++) {
    const pageNum = i.toString().padStart(2, '0');
    images.push(`images/${pageNum}.jpg`);
}
pageFlip.loadFromImages(images);
