<template>
  <div>
    <!-- Logo billede placeret øverst til højre på siden -->
    <img src="@/assets/cullbergmetropolis.png" alt="Logo" class="absolute top-[27vh] right-0 w-[16vw] h-auto z-[100]" />
    
    <!-- Fodnote med navigation links, fastgjort nederst til højre på siden -->
    <footer class="fixed bottom-0 right-[4vw] z-50 m-1 mb-3">
      <nav class="nav-links flex space-x-[1.5vw] bg-white bg-opacity-70 p-2">
        <!-- RouterLink til 'Om' siden -->
        <RouterLink class="font-neue nav-link-item text-[2vw] hover:text-[#33da00]" to="/about">Om</RouterLink>
        <!-- Ekstern link til reservation af plads -->
        <a class="font-neue nav-link-item text-[2vw] hover:text-[#33da00]" href="https://www.eventim-light.com/dk/a/6268ebc70e2f6b59c13b0fac/s/6655dc75e820523242408abe?lang=da" target="_blank">Reserver gratis plads</a>
        <!-- RouterLink til 'Dans med' siden -->
        <RouterLink class="font-neue nav-link-item text-[2vw] hover:text-[#33da00]" to="/dance">Dans med</RouterLink>
      </nav>
    </footer>

    <!-- Navigation for overskriften, placeret relativt -->
    <nav class="relative z-20">
      <!-- Overskrift RouterLink til startside -->
      <RouterLink class="headline font-neue font-bold text-[7vw] fixed z-20 top-[1vh] left-[4vw] leading-tight text-[#33da00] bg-white bg-opacity-70 p-2" to="/">
        WHILE IN BATTLE I'M FREE <br>NEVER FREE TO REST
      </RouterLink>
    </nav>

    <!-- RouterView viser den aktuelle rute komponent -->
    <RouterView class="relative z-0"/>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Animation for overskriften
  gsap.fromTo(".headline", {
    fontSize: '7.3vw'
  }, {
    fontSize: '2vw',
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: ".headline",
      start: "top top",
      end: "50% top",
      scrub: true,
    }
  });

  // Animation for navigation links
  gsap.fromTo(".nav-link-item", {
    fontSize: '2vw'
  }, {
    fontSize: '1.5vw',
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "+=100",
      scrub: true,
    }
  });
})
</script>

<style scoped>
.headline {
  line-height: 0.9; 
  transition: font-size 0.4s ease-out;
}

.nav-link-item {
  transition: font-size 0.4s ease-out;
}
</style>