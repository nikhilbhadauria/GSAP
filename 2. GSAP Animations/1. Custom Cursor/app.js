const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const imagediv = document.querySelector("#image");

main.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.x - cursor.offsetWidth / 2, 
        y: e.y - cursor.offsetHeight / 2,
        duration: 0.3, 
        ease: "power3.out" 
    });
});

imagediv.addEventListener("mouseenter", () => {
    cursor.innerHTML = "View More"; 
    gsap.to(cursor, {
        scale: 2, 
        backgroundColor: "#ffffff80", 
        boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.8)", 
        rotation:360,
        duration: 0.3,
        ease: "power2.out" 
    });
    gsap.to(imagediv, {
        scale: 1.1, 
        duration: 0.3,
        ease: "power2.out"
    });
    gsap.to("#overlay", {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        duration: 0.3,
    });
});

imagediv.addEventListener("mouseleave", () => {
    cursor.innerHTML = ""; 
    gsap.to(cursor, {
        scale: 1, 
        backgroundColor: "#fff",
        boxShadow: "none", 
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
    });
    gsap.to(imagediv, {
        scale: 1, 
        duration: 0.3,
        ease: "power2.out"
    });
    gsap.to("#overlay", {
        backgroundColor: "transparent", 
        duration: 0.3,
    });
});
