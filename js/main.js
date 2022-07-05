const stArray = [
  {
    name: '.fixed-screen',
    params: { trigger: '.fixed-screen', start: 'top 100px', end: 'bottom 50%', markers: false, endTrigger: '#about', pin: true, pinSpacing: true, toggleActions: 'play none none reverse' }
  },
  {
    name: '.screen-item-1',
    params: { autoAlpha: 1, trigger: '.info-item-1', start: 'top center', markers: false, toggleActions: 'play none none reverse' }
  },
  {
    name: '.screen-item-2',
    params: { autoAlpha: 1, trigger: '.info-item-2', start: 'top center', markers: false, toggleActions: 'play none none reverse' }
  },
  {
    name: '.screen-item-3',
    params: { autoAlpha: 1, trigger: '.info-item-3', start: 'top center', markers: false, toggleActions: 'play none none reverse' }
  },
  {
    name: '.screen-item-4',
    params: { autoAlpha: 1, trigger: '.info-item-4', start: 'top center', markers: false, toggleActions: 'play none none reverse' }
  },
  {
    name: '.screen-item-5',
    params: { autoAlpha: 1, trigger: '.info-item-5', start: 'top center', markers: false, toggleActions: 'play none none reverse' }
  },
]
// console.log(stArray)
stArray.forEach((obj) =>
  ScrollTrigger.matchMedia({
    "(min-width:641px)": function () {
      gsap.to(obj.name, {
        autoAlpha: obj.params.autoAlpha,
        scrollTrigger: {
          trigger: obj.params.trigger,
          start: obj.params.start,
          end: obj.params.end,
          endTrigger: obj.params.endTrigger,
          pin: obj.params.pin,
          pinSpacing: obj.params.pinSpacing,
          markers: obj.params.markers,
          toggleActions: obj.params.toggleActions
        }
      })
    }
  })
)

const spImg = document.querySelectorAll('.overview-info-item-sp')
console.log(spImg)
spImg.forEach((obj) =>
  ScrollTrigger.matchMedia({
    "(max-width:640px)": function () {
      gsap.set(obj, {
        opacity: 0
      })
      gsap.to(obj, {
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: obj,
          start: 'top 50%',
        }
      })
    }
  })
)
