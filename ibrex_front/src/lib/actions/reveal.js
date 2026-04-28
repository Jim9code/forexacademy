export function reveal(node, { delay = 0, threshold = 0.1 } = {}) {
    node.classList.add('reveal-item');
    node.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    node.classList.add('reveal-visible');
                    // Optional: stop observing once revealed
                    // observer.unobserve(node);
                } else {
                    // Remove if you want it to trigger multiple times when scrolling up/down
                    // node.classList.remove('reveal-visible');
                }
            });
        },
        { threshold }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
