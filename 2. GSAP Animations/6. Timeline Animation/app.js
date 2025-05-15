const menu = document.querySelector("#nav i")
const cross = document.querySelector("#full i")

var tl = gsap.timeline()
tl.to("#full", {
    right: 0,
    duration: 0.5
})
tl.from("#full h4", {
    y: 100,
    clipPath: "inset(0 0 100% 0)",
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power4.out"
});
tl.from("#full i",{
    opacity:0
})

tl.pause()

menu.addEventListener("click",()=>{
    tl.play()
})

cross.addEventListener("click",()=>{
    tl.reverse()
})

document.querySelectorAll("#full h4").forEach(h4 => {
    h4.addEventListener("mousemove", (e) => {
        const rect = h4.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        gsap.to(h4, { x: x * 0.2, duration: 0.3 });
    });
    h4.addEventListener("mouseleave", () => {
        gsap.to(h4, { x: 0, duration: 0.3 });
    });
});
