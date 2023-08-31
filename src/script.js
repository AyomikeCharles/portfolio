const words = ['Web Developer', 'Mobile App Developer', 'Writer', 'Tech Enthusiast' ]
let animateCursor = gsap.to('.cursor', {
    opacity:0, ease:"power2.inOut", repeat:-1
})

let boxTl = gsap.timeline()

boxTl
// .to('.box', {
//     duration:1, ease:"power4.inOut", width:'7vw', delay:0.5
// })
.from('.hi', {duration:1, y:'17vw', ease:'power3.out', onComplete:()=>masterTl.play()})
// .to('.box', {duration:1, ease:'elastic.out', height:'15px'})
// .to('.box', {duration:2, autoAlpha:0.5, yoyo:true, repeat:-1, ease:"rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})"})

const masterTl = gsap.timeline({repeat:-1}).pause()

words.forEach(element => {
    let tl = gsap.timeline({repeat:1, yoyo:true, repeatDelay:1})
    tl.to(".text", {duration:1.5, text:element})
    masterTl.add(tl)
});



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
    ease:"bounce.inOut",
    duration:0.6,
    paused:true
})

const reverseSidebar = () => sidebar.reverse()

document.querySelector('#menuu').onclick = () => sidebar.play();

document.querySelector('#mode').onclick = () => {
    document.querySelector('html').classList.toggle('dark') 
};



