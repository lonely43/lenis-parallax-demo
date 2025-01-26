<script setup lang="ts">
const props = defineProps<({
	src: String,
})>()

</script>

<template>
	<div class="service">
		<div class="service-info">
			<h1>Some title</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatibus, asperiores id eos culpa consequatur inventore.</p>
		</div>

		<div class="service-img">
			<img :src="'/src/assets/content/' + src" alt="photo" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
   .service{
		height: 450;
		display: flex;
		gap: 2rem;

		border-top: 1px solid rgba(255, 255, 255, 0.2);

		.service-info{
			padding: 1rem;

			width: 100%;
			height: 100%;

			flex: 2;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

      .service-img{
			padding: 1rem;

			height: 100%;
			width: 100%;

			flex: 5;
         img{
				height: 100%;
            width: 30%;

				display: block;
				object-fit: cover;

				border-radius: .8rem;
				overflow: hidden;
         }
      }
   }
</style>
