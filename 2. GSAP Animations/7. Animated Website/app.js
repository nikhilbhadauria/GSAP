function page1Animation(){
    let tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y: -40,
    duration: 0.7,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15
})
tl.from(".center-part1 h1",{
    x: -200,
    opacity:0,
    duration:0.5
}, "-=0.3")
tl.from(".center-part1 p",{
    x: -100,
    opacity:0,
    duration:0.4
})
tl.from(".center-part1 button",{
    opacity:0,
    duration: 0.4
})
tl.from(".center-part2 img",{
    opacity: 0,
    duration: 0.5,
    x:200
},"-=0.7")
tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger: 0.15,
    duration:0.6
})
}

page1Animation();

function page1Animation2(){
    
let tl2= gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller: "body",
        start:"top 50%",
        end:"top 0",
        scrub: 2,
    }
})

tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5
})
tl2.from(".elem.line1.left",{
    x: -300,
    opacity:0,
    duration:1
},"anim1")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1
},"anim1")
tl2.from(".elem.line2.left",{
    x: -300,
    opacity:0,
    duration:1
},"anim2")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1
},"anim2")
}

page1Animation2();

function page1Animation3(){
    let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".section3",
        scroller:"body",
        start:"top 75%",
        end:"top 30%",
        scrub:2
    }
})
tl3.from(".section3 .upperhalf",{
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.5
})
tl3.from(".section3 .upperhalf img",{
    duration:2.5,
    opacity:0,
    ease: "bounce.out",
    x: -550
})
tl3.from(".middle h1",{
    x: -50,
    rotate: "45deg",
    opacity:0,
    duration:0.8
})
tl3.from(".middle p",{
    x:50,
    rotate: "-45deg",
    opacity: 0,
    duration: 0.8
})
tl3.from(".bottom-container .bottomtext:nth-child(1)", {
    x: -100,
    opacity: 0,
    duration: 0.8
});

tl3.from(".bottom-container .bottomtext:nth-child(3)", {
    x: 0,
    opacity: 0,
    duration: 0.8,
    delay: 0.2
});

tl3.from(".bottom-container .bottomtext:nth-child(5)", {
    x: 100,
    opacity: 0,
    duration: 0.8,
    delay: 0.4
});
}

page1Animation3();