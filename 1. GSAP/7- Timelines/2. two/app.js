let tl = gsap.timeline({
    defaults: {
    duration: 1,
    ease: "power2.inOut",
    }, repeat: -1, yoyo: true
});

tl.to("h1", {
    y: -100,
    opacity: 0.8,
    scale: 1.1
})
.to(".box1", {
    x: -100,
    backgroundImage: "linear-gradient(145deg, #ff80ab, #ff4b79)",
    boxShadow: "0 0 20px #ff80ab"
})
.to(".box2", {
    y: 100,
    backgroundImage: "linear-gradient(145deg, #a29bfe, #6c5ce7)", 
    boxShadow: "0 0 20px #a29bfe"
})
.to(".box3", {
    x: 100,
    backgroundImage: "linear-gradient(145deg, #ff4d6d, #d50032)",
    boxShadow: "0 0 20px #ff4d6d"
});
