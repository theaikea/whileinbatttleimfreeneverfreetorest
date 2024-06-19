<template>
  <div>
    <!-- Indsættelse af snoede tekst-->
    <img src="@/assets/1tekst5.png" alt="Forsidetext" class="forsidetext-image fixed w-[86vw] top-[23vh] left-[-4.5vw] z-10" />

   
    <div class="mt-[30vh]">
      <!-- Dancers komponenten -->
      <dancers></dancers>
    </div>
  </div>
</template>

<script>
import dancers from '@/components/dancers.vue'; // Importerer dancers komponenten

export default {
  components: {
    dancers // Registrerer dancers komponenten lokalt
  }
};
</script>
