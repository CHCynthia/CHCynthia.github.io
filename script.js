window.addEventListener('scroll', function() {
    const p5Image = document.querySelector('img[src="p5.JPG"]');
    const coinImage = document.getElementById('coin');
    
    if (p5Image && coinImage) {
        const rect = p5Image.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Check if p5.JPG is partially in view
        if (rect.top < (windowHeight-10) && rect.bottom >= 0) {
            const visiblePart = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
            const visibleRatio = visiblePart / rect.height;

            // Calculate translate and scale values based on visibility ratio
            const translateY = 780 * visibleRatio; // Maximum translateY value
            const translateX = -150 * visibleRatio; // Maximum translateX value (left)
            const scale = 1 - (0.4 * visibleRatio); // Scale from 1 to 0.5

            coinImage.style.transform = `translate(${translateX}px, ${translateY}px)`;
            coinImage.style.width = `${300 * scale}px`;
        } else {
            // When p5.JPG is out of view
            coinImage.style.transform = 'translate(0, 0)';
            coinImage.style.width = '300px';
        }
    }
});
