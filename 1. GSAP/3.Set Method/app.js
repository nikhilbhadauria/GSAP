gsap.set(".box", {
    opacity: 0,
    background: "pink",
});

gsap.to(".box", {
    opacity: 1,
    background: "cadetblue",
    duration: 3,
    y: 100,
    repeat: -1,
    yoyo: true,
})