export default function servicesAnim(gsap: any, ScrollTrigger: any) {
	const services = gsap.utils.toArray(".service")

   services.forEach((service: any) => {
      let imgCont = service.querySelector(".service-img img")

      //width
      ScrollTrigger.create({
         trigger: service,
         start: "bottom bottom",
         end: "top top",
         scrub: true,

         onUpdate: (self: any) => {
            let progress = self.progress
            let newWidth = 30 + 70 * progress

            gsap.to(imgCont, {
               width: newWidth + "%",
               easy: "none",
               duration: 0.1
            })
         }
      })

      //height
      ScrollTrigger.create({
         trigger: service,
         start: "bottom bottom",
         end: "+=450",
         scrub: true,

         onUpdate: (self: any) => {
            let progress = self.progress
            let newHeight = 150 + 300 * progress

            gsap.to(service, {
               height: newHeight + "px",
               easy: "none",
               duration: 0.1
            })
         }
      })
   });
}
