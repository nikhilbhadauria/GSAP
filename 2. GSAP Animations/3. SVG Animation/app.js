const stringElement = document.getElementById("string");
const pathElement = document.querySelector("svg path");

const initialPath = "M 10 100 Q 750 100 1490 100";
let isAnimating = false;

gsap.set(pathElement, { 
    attr: { d: initialPath },
    strokeWidth: 2
});

stringElement.addEventListener("mousemove", (e) => {
    if (isAnimating) return;
    const x = e.clientX;
    const y = window.innerHeight - e.clientY; 
    const newPath = `M 10 100 Q ${x} ${y} 1490 100`;
    
    gsap.to(pathElement, {
        attr: { d: newPath },
        duration: 0.1,
        ease: "sine.out"
    });
});

stringElement.addEventListener("mouseleave", () => {
    isAnimating = true;
    gsap.to(pathElement, {
        attr: { d: initialPath },
        duration: 1.5,
        ease: "elastic.out(1.2, 0.3)",
        onComplete: () => isAnimating = false
    });
});

window.addEventListener("resize", () => {
    gsap.to(pathElement, {
        attr: { d: initialPath },
        duration: 0.5
    });
});