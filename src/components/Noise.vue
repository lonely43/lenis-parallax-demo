<script setup lang="ts">

</script>
<template>
   <div class="noise"></div>
</template>
<style lang="scss" scoped>
   .noise{
      position: fixed;
      inset: 0;
      z-index: 10;
      width: 100%;
      height: 100%;

      pointer-events: none;

      background-image: url(/src/assets/content/noise.png);
      background-repeat: repeat;
      background-size: 10%;
      opacity: 0.06;

      animation: noise 200ms infinite;
   }

   @keyframes noise {
      0%{
         background-position: 100% 100%;
      }
      50%{
         background-position: 200% 200%;
      }
      100%{
         background-position: 100% 100%;
      }
   }
</style>
