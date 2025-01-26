<script setup lang="ts">

</script>
<template>
   <div class="hero">
      <video class="hero-video" loop muted autoplay>
         <source src="/src/assets/content/cinematicVideo.mp4" type="video/mp4">
      </video>

      <div class="hero-text">
         <p>move</p>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .hero{
      width: 100%;
      height: 100dvh;

      display: flex;
      align-items: center;
      justify-content: center;

      .hero-video{
         z-index: -20;
         position: fixed;
         left: 0;
         bottom: 0;
         width: 100%;
         height: 100%;
         object-fit: cover;
      }

      .hero-text{
         font-size: 2em;
      }
   }
</style>
