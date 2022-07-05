ScrollTrigger.matchMedia({
  "(min-width:641px)": function () {
    gsap.to(".fixed-screen", {
      scrollTrigger: {
        trigger: ".fixed-screen",
        start: "top 100px",
        end: "bottom 50%",
        markers: true,
        endTrigger: "#about",
        pin: true,
        pinSpacing: true,
      }
    })
  }
})
ScrollTrigger.matchMedia({
  "(min-width:641px)": function () {
    gsap.to(".info-item-1", {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".info-item-1",
        start: "top center",
        markers: false,
        toggleActions: "play none none reverse"
      }
    })
  }
})
ScrollTrigger.matchMedia({
  "(min-width:641px)": function () {
    gsap.to(".screen-item-2", {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".info-item-2",
        start: "top center",
        markers: false,
        toggleActions: "play none none reverse"
      }
    })
  }
})
ScrollTrigger.matchMedia({
  "(min-width:641px)": function () {
    gsap.to(".screen-item-3", {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".info-item-3",
        start: "top center",
        markers: false,
        toggleActions: "play none none reverse"
      }
    })
  }
})
ScrollTrigger.matchMedia({
  "(min-width:641px)": function () {
    gsap.to(".screen-item-4", {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".info-item-4",
        start: "top center",
        markers: false,
        toggleActions: "play none none reverse"
      }
    })
  }
})
ScrollTrigger.matchMedia({
  "(min-width:641px)": function () {
    gsap.to(".screen-item-5", {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".info-item-5",
        start: "top center",
        markers: false,
        toggleActions: "play none none reverse"
      }
    })
  }
})