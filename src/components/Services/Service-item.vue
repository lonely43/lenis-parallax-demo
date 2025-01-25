<script setup lang="ts">
const props = defineProps<({
	src: String,
})>()

</script>

<template>
	<div class="service">
		<div class="info">
			<h1>Some title</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatibus, asperiores id eos culpa consequatur inventore.</p>
		</div>

		<div class="img">
			<img :src="'/public/icons/' + src" alt="photo" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
   .service{

      .img{
         max-width: 40rem;
         img{
            width: 100%;
         }
      }
   }
</style>
