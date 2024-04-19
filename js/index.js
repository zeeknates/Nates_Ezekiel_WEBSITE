gsap.registerPlugin(ScrollTrigger)

gsap.from('.flex-container', {
    y: 400,
    opacity: 0,
    stagger: .15,
    duration: 1.5,
    scrollTrigger: {
        start: "bottom 80%",
        markers: false,
    }
})

gsap.from('.col-4', {
    duration: 2,
    ease: "bounce.out",
    xPercent: -100,
    scrollTrigger: {
        markers: false,
        trigger: ".col-4",
    }
    })