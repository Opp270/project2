
const id = (id) => {
    if(document.querySelectorAll(id).length === 1){
        return document.querySelector(id)
    }else{
        return document.querySelectorAll(id)
    }
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true)

let element = id('#ehtXJ961Kbd1')

let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    normalizeScroll: true,
    smoothTouch: 2
});

const scene = gsap.timeline({
    scrollTrigger: {
        trigger: "#ehtXJ961Kbd1",
        start: "top top",
        end: "150% top",
        pin: ".scene1",
        scrub: true,
        markers: false,
        onUpdate: ({progress}) => {     
            element.svgatorPlayer.ready(function() {
                // this refers to the player object
                this.seek(progress*100);
            });
          }
    }
})


const scene2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#e7w4YeCBquV1",
        start: "top top",
        end: "180% top",
        pin: ".inter",
        scrub: true,
        markers: false,
        onUpdate: ({progress}) => {     
            id('#e7w4YeCBquV1').svgatorPlayer.ready(function() {
                this.seek(progress*100);
            });
          }
    }
})

const scene3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#ee2GY3iCXp41",
        start: "top top",
        end: "180% top",
        pin: ".view",
        scrub: true,
        markers: false,
        onUpdate: ({progress}) => {     
            id('#ee2GY3iCXp41').svgatorPlayer.ready(function() {
                this.seek(progress*100);
            });
          }
    }
})

const scene4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#eajz5Dlq3f81",
        start: "top top",
        end: "180% top",
        pin: ".scene4",
        scrub: true,
        markers: false,
        onUpdate: ({progress}) => {     
            id('#eajz5Dlq3f81').svgatorPlayer.ready(function() {
                // this refers to the player object
                this.seek(progress*100);
            });
          }
    }
})



gsap.from(".rob", {
    x: 0
})
gsap.from(".rob2", {
    x: 0
})

gsap.to(".ghaltida", {
    y: -window.innerHeight,
    scrollTrigger:{
        trigger: ".sap",
        start: "top top",
        end: "100% top",
        scrub: true
    } 
  });


gsap.to(".rob", {
    x: window.innerWidth,
    scrollTrigger:{
        trigger: ".view",
        start: "top top",
        end: "100% top",
        markers: false,
        pin: '.rob',
        scrub: true
    } 
  });
gsap.to(".rob", {
    opacity: 1,
    scrollTrigger:{
        trigger: ".view",
        start: "top top",
        end: "100% top",
        scrub: false
    } 
  });
gsap.to(".rob2", {
    x: - window.innerWidth,
    scrollTrigger:{
        trigger: ".view",
        start: "top top",
        end: "100% top",
        markers: false,
        pin: '.rob2',
        scrub: true

    } 
  });
gsap.to(".rob2", {
    opacity: 1,
    scrollTrigger:{
        trigger: ".view",
        start: "top top",
        end: "100% top",
        scrub: false
    } 
  });

  let cup = 0

  id('#opp').addEventListener('click', ()=>{
    cup = cup + 20
    id('#e8eN4yFXs0T1').svgatorPlayer.ready(function() {
        id('#drink').load()
        id('#drink').play()
        this.seek(cup);
    });
  })

id('footer').innerHTML += `${new Date().getFullYear()}`
