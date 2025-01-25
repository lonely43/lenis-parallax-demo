<script setup lang="ts">
import Hero from "./components/Hero.vue"
import Services from "./components/Services/Services.vue"
import Footer from "./components/Footer.vue"
import lenisInject from "./lib/lenis"
import Noise from "./components/Noise.vue"
import { ref } from "vue"
import Loading from "./components/Loading.vue"

const loaded = ref<boolean>(false)
document.addEventListener("DOMContentLoaded", () => {
	lenisInject()
	loaded.value = true
})
</script>
<template>
	<Loading v-if="!loaded" />
	<Noise />

	<main>
		<Hero />
		<Services />
		<Footer />
	</main>
</template>
<style lang="scss" scoped>
main {
	width: 100%;
	height: 100%;
}
</style>
