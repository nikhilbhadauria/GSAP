document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const marquees = document.querySelectorAll('.marque');
    const arrows = document.querySelectorAll('.arrow');
    const imageMask = document.querySelector('.image-mask');
    const ctaButton = document.querySelector('.cta-button');
    
    const marqueeTL = gsap.timeline({ 
        defaults: { ease: "none" },
        scrollTrigger: {
            trigger: "#page2",
            start: "top center",
            end: "bottom center",
            scrub: 1,
        }
    });
    
    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3
        });
    });
    
    ctaButton.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 3,
            backgroundColor: "rgba(216, 255, 4, 0.3)",
            duration: 0.3
        });
    });
    
    ctaButton.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "var(--primary)",
            duration: 0.3
        });
    });
    
function marqueAnimation(){
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY>0){
            gsap.to(marquees,{
                transform: "translateX(-80%)",
                repeat: -1,
                duration:10,
                ease:"none",
            })
            gsap.to(arrows,{
                rotate: 180
            })
        }else{
            gsap.to(marquees,{
                transform: "translateX(0%)",
                repeat:-1,
                duration:10,
                ease:"none"
            })
            gsap.to(arrows,{
                rotate: 0
            })
        }
    })
}
marqueAnimation()
    
    gsap.to(imageMask, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        scrollTrigger: {
            trigger: ".content-block",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1.5,
        ease: "power3.out"
    });
    
    gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3
    });
    
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
    }
});