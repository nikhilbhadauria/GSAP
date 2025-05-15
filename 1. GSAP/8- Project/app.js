let tl = gsap.timeline({
    defaults: {
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
    }
});

tl.fromTo(".sidebar", 
    { width: 0, backgroundColor: "rgba(215, 81, 87, 1)" }, 
    { 
        opacity: 1, 
        width: "30%", 
        backgroundColor: "rgba(254, 143, 123, 1)", 
        duration: 1.5 
    }
);

tl.fromTo(".main-img", 
    { x: -100, scale: 0.9, opacity: 0 }, 
    { opacity: 1, x: 0, scale: 1, duration: 1.5, ease: "power2.out" }
);

tl.fromTo(".content", 
    { x: 100, scale: 0.9, opacity: 0 }, 
    { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power2.out" }
);

tl.fromTo(".main-title", 
    { opacity: 0, y: -50 }, 
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
);

tl.fromTo(".main-info", 
    { opacity: 0, y: -50 }, 
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
);
