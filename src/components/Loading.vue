<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"

const dots = ref<string>("")
let stop = false
function progress() {
	let count = 0

	return function increaseDot() {
		if (!stop) {
			if (count > 3) {
				count = 0
				dots.value = ""
			}
			setTimeout(() => {
				count++
				dots.value = dots.value + "."
				increaseDot()
			}, 400)
		}
	}
}
function reloadPage(){
   window.location.reload()
}

onMounted(() => {
	progress()()
})
onUnmounted(() => {
   stop = true
})
</script>
<template>
	<div class="loading">
		<span>
			<p>loading</p>
			<p class="dots">{{ dots }}</p>
		</span>
      <button @click="reloadPage()">Don't start?</button>
	</div>
</template>
<style lang="scss" scoped>
.loading {
	z-index: 9;
	position: fixed;
	inset: 0;
	width: 100%;
	height: 100%;
	background-color: rgb(14, 14, 14);

	display: flex;
   flex-direction: column;
	align-items: center;
	justify-content: center;
   gap: 1rem;

	span {
      display: flex;
		position: relative;
	}

   button{
      cursor: pointer;

      padding: .4rem .8rem;
      line-height: 150%;
      border: none;
      border-radius: 10px;
      background-color: white;
      transition: opacity 200ms;
      &:hover{
         opacity: 0.8;
      }
   }
}
</style>
