<script setup lang="ts">
import Hero from "./components/Hero.vue"
import Services from "./components/Services/Services.vue"
import Footer from "./components/Footer.vue"
import lenisInject from "./lib/lenis"

document.addEventListener("DOMContentLoaded", () => {
	lenisInject()
})
</script>
<template>
	<main>
		<Hero />
		<Services />
	</main>

	<Footer />
</template>
<style lang="scss" scoped>
main {
	width: 100%;
	height: 100%;
}
</style>
