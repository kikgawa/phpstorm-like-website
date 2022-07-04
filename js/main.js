
ScrollTrigger.create({
  trigger: ".fixed-screen",
  start: "top 30%",
  end: "bottom top",
  markers: true,
  endTrigger: "#footer",
  pin: true,
  pinSpacing: true,
})

ScrollTrigger.create({
  trigger: ".info-item-1",
  start: "top 100px",
  markers: true,
  animation: gsap.to(".screen-item-1", { opacity: 1 }),
  toggleActions: "play none none reverse"
})
ScrollTrigger.create({
  trigger: ".info-item-2",
  start: "top 100px",
  markers: true,
  animation: gsap.to(".screen-item-2", { opacity: 1 }),
  toggleActions: "play none none reverse"
})
ScrollTrigger.create({
  trigger: ".info-item-3",
  start: "top 100px",
  markers: true,
  animation: gsap.to(".screen-item-3", { opacity: 1 }),
  toggleActions: "play none none reverse"
})
ScrollTrigger.create({
  trigger: ".info-item-4",
  start: "top 100px",
  markers: true,
  animation: gsap.to(".screen-item-4", { opacity: 1 }),
  toggleActions: "play none none reverse"
})
ScrollTrigger.create({
  trigger: ".info-item-5",
  start: "top 100px",
  markers: true,
  animation: gsap.to(".screen-item-5", { opacity: 1 }),
  toggleActions: "play none none reverse"
})

