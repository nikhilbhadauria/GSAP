document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1");
    const text = h1.textContent;
    const split = text.split("");
    const mid = Math.floor(split.length / 2);
    let content = "";

    split.forEach((char, idx) => {
        const cls = idx < mid ? "a" : "b";
        content += `<span class="${cls}">${char}</span>`;
    });

    h1.innerHTML = content;

    
    gsap.from("h1 .a",{
        y: 80,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        stagger:0.15
})

    gsap.from("h1 .b",{
        y: 80,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        stagger:-0.15
})
});
