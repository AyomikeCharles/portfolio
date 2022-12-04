gsap.registerPlugin(ScrollTrigger);


gsap.from(".myAnim",{

    scrollTrigger:{
        trigger:'.myAnim',
        toggleActions:'restart none none none',
        start:'top bottom',
        end:'bottom top',
    },
    scale:0.5,
    ease:"power1.Out",
    opacity:0.7,
    duration:2
})

gsap.from(".myAnim2",{
    scrollTrigger:{
        trigger:'.myAnim2',
        toggleActions:'restart none none reverse',
        start:'top bottom',
        end:'bottom top'
    },
    scale:0,
    ease:"bounce.out",
    opacity:0.7,
    duration:2
})

gsap.from(".myAnim3",{
    scrollTrigger:{
        trigger:'.myAnim3',
        toggleActions:'restart none none reverse',
        start:'top bottom',
        end:'bottom top'
    },
    scale:0.5,
    opacity:0.7,
    duration:2
})


gsap.from(".myAmin5",{
    scrollTrigger:{
        trigger:'.myAmin5',
        toggleActions:'restart none none reverse',
        start:'top bottom'
    },
    scale:0.4,
    ease:"bounce.out",
    opacity:0.4,
    duration:2,
})



let sidebar = gsap.to('#sidebar',{
    xPercent:100,
    ease:"bounce.out",
    duration:0.6,
    paused:true
})

const reverseSidebar = () => sidebar.reverse()

document.querySelector('#menuu').onclick = () => sidebar.play();

document.querySelector('#mode').onclick = () => {
    document.querySelector('html').classList.toggle('dark') 
};



