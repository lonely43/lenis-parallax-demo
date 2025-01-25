import Lenis from "lenis"
import { gsap } from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"
import servicesAnim from "./services"

export default function lenisInject() {
	gsap.registerPlugin(ScrollTrigger)

	const lenis = new Lenis()
	lenis.on("scroll", ScrollTrigger.update)

	gsap.ticker.add((time) => {
		lenis.raf(time * 1000) // Convert time from seconds to milliseconds
	})

	gsap.ticker.lagSmoothing(0)

   servicesAnim(gsap, ScrollTrigger)
}
