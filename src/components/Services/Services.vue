<script setup lang="ts">
import ServiceItem from "./Service-item.vue"
</script>
<template>
	<div class="services">
		<div class="services-header">
			<div class="col"></div>
			<div class="col">
				<h1>All Services</h1>
			</div>
		</div>

		<ServiceItem src="1.jpg" />
		<ServiceItem src="1.jpg" />
		<ServiceItem src="1.jpg" />
		<ServiceItem src="1.jpg" />
	</div>
</template>
<style lang="scss" scoped>
	.services{
		padding: 8rem 2rem;

		display: flex;
		flex-direction: column;

		background-color: black;

		.services-header{
			width: 100%;

			display: flex;
			gap: 4rem;

			.col:nth-child(1){
				flex: 2;
			}
			.col:nth-child(2){
				flex: 5;
				padding: 1rem;
			}
		}
	}
</style>
