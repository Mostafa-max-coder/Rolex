const header = document.querySelector('header');
window.addEventListener('scroll',()=>{
    if(window.scrollY > 50){
        header.classList.add('scrolled');
    }

    else{
        header.classList.remove('scrolled');
    }
});


window.addEventListener('load',()=>{
    const header = document.querySelector('header');
    header.classList.add('show');
});







gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
  gsap.set(".container", { opacity: 1 });
  let split = SplitText.create(".animate-me", { type: "words", aria: "hidden" });

  gsap.from(split.words, {
    opacity: 0,
    duration: 2,
    ease: "sine.out",
    stagger: 0.1,
  });
});


const images = document.querySelectorAll('.carousel-image')
const radius = 50
const progress = {
  value: 0
}
const carousel = document.querySelector('.carousel')

Observer.create({
  target: carousel,
  type: "wheel,pointer",
  onPress: (self) => {
    carousel.style.cursor = 'grabbing'
  },
  onRelease: (self) => {
    carousel.style.cursor = 'grab'
  },
  onChange: (self) => {
    gsap.killTweensOf(progress)
    const p = self.event.type === 'wheel' ? self.deltaY * -.0005 : self.deltaX * .05
    gsap.to(progress, {
      duration: 2,
      ease: 'power4.out',
      value: `+=${p}`
    })
  }
})

const animate = () => {
  images.forEach((image, index) => {
    const theta = index / images.length - progress.value
    const x = -Math.sin(theta * Math.PI * 2) * radius
    const y = Math.cos(theta * Math.PI * 2) * radius
    image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${360 * -theta }deg)`
    const c = Math.floor(index/images.length * 360)
    // image.style.background = `hsla(${c}, 90%, 50%, .5)`
  })
}
gsap.ticker.add(animate)





AOS.init({
  duration: 1200,
})



