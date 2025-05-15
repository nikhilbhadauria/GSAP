gsap.to("#page2 h1",{
    x: "-165%",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 2, 
        pin: true,
        ease: "power1.inOut"
    }
})