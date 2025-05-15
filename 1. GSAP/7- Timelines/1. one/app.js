// var tl = gsap.timeline()

// tl.to(".box1", {
//     duration: 2,
//     scale: 0,
//     opacity: 0,
//     delay: 1,
// }).to(".box2", {
//     duration: 2,
//     x: -200,
// }).to(".box3", {
//     duration: 2,
//     x: -200,
//     borderRadius: 0,
//     rotate: 360,
// }).set(".box1", {
//     duration: 2,
//     scale: 1,
//     opacity: 1,
// })

//Refactor
const tl = gsap.timeline({
    defaults: {
    duration: 1,
    ease: "power1.inOut", 
    },
    repeat: -1,
    yoyo: true,
});

tl.to(".box1", {
    scale: 0,
    opacity: 0,
    delay: 1, 
})

.to(".box2", {
    x: -200,
})

.to(".box3", {
    x: -200,
    borderRadius: 0,
    rotate: 360,
})

.set(".box1", {
    x: 200,
})

.to(".box1", {
    scale: 1,
    opacity: 1,
    x: 0,
});

