<template>
  <div class="text-lg font-novatica">
    <div class="mx-16 my-16">
      <div class="grid grid-cols-2 md:grid-cols-2 gap-7">
        <!-- Højre side tekst flyttet længere ned -->
        <div class="md:col-start-2 md:row-start-1 relative z-20">
          <p class="mb-4 mt-52 text-xl font-novatica">
            WHILE IN BATTLE I’M FREE, NEVER FREE TO REST <br>af Cullberg (SE) og Hooman Sharifi (NO)<br>
            25., 26., 27., 28., 29. juni kl. 19.30<br>
            Blågårds Plads, København N<br>
            Danseforestilling<br>
            GRATIS
          </p>
        </div>

        <!-- Dancers2 komponent -->
        <div class="md:col-start-2 md:row-start-3 relative z-90 row-span-3 dancers2-container">
          <dancers2></dancers2>
        </div>

        <!-- Venstre side tekst flyttet længere ned -->
        <div class="md:col-start-1 md:col-end-2 md:row-start-3 relative z-10">
          <p class="mb-4 font-bold text-2xl mb-5 font-neue">
            OM FORESTILLINGEN
          </p>
          <p class="mb-4">
            While in battle I’m free, never free to rest er en eksplosion af kollektivets kraft. Det er magi og uforudsigelighed, når 10 street-dansere møder 14 klassiske dansere fra det anerkendte svenske kompagni Cullberg.
          </p>
          <p class="mb-4">
            Den iransk-fødte koreograf Hooman Sharifi har skabt et ganske særligt møde mellem dansere – mellem mennesker – med vidt forskellig baggrund. De taler hver deres (krops)sprog, har hver deres etnicitet, nationalitet, kultur.
          </p>
          <p class="mb-4">
            Forestillingens titel er et citat af medborgerrettighedsaktivisten James Baldwin. While in battle I’m free, never free to rest. Er livet en kamp på liv og død? Eller en kraftfuld dansefest, hvis bare vi sætter kroppene fri?
          </p>
          <p class="mb-4">
            For den kompromisløse koreograf Sharifi er kunst altid politisk. I en konfliktfyldt tid, hvor grupperinger brydes, slås og går i krig, sætter han ind med et mesterværk om kollektivets forandringskraft. Om, hvordan der ud af vores forskelle opstår nye muligheder, hvis vi giver plads. Om, hvordan vi alle kæmper for at være frie i verden. I fællesskab, men med hver vores stemme.
          </p>
          <p class="mb-4">
            Danserne hvirvler rundt mellem hinanden i intense, sveddryppende koreografier, mens vi som publikum bliver trukket ind i deres univers. Vi omringer danserne, mens det dragende soundtrack omslutter os. Neda Sanai har skabt sin egen, særlige musik ved at sample et unikt lydtæppe af iransk folkemusik.
          </p>
          <p class="mb-4">
            Forestillingen havde urpremiere i november 2023 i Stockholm og begynder nu sin Europa-turné i København med for første gang at spille i det offentlige rum.
          </p>
        </div>

        <!-- Om kunstnerne sektion -->
        <div class="md:col-start-1 md:row-start-4 mt-6 relative z-10">
          <p class="mb-4 font-bold text-2xl mb-5 font-neue">
            OM KUNSTNERNE
          </p>
          <p class="mb-4">
            Koreograf Hooman Sharifi (NO) er født i Teheran i 1973 og kom alene til Norge som 15-årig. Han begyndte sin dansekarriere som teenager med hiphop og fortsatte senere med klassisk og moderne ballet og har en uddannelse i koreografi fra Oslo National Academy of the Arts. Han er særligt interesseret i brydningspunktet mellem dans, teater og billedkunst. I 2000 grundlagde han sit eget kompagni, Impure Company, som fokuserer på samfundsengagement, og som siden da har skabt over 30 koreografiske værker. Sharifis bevægelsessprog er fysisk udmattende, intenst og kraftfuldt og udforsker strukturer bag hierarkier, magt, politiske systemer og vold. 2014-18 var han kunstnerisk leder af Norges nationalkompagni for samtidsdans, Carte Blanche. Sharifi samarbejder med mange store institutioner, og hans værker har fået stor succes internationalt.
          </p>

          <p class="mb-4">
            Cullberg er et internationalt anerkendt dansekompagni grundlagt i 1967 med base i Stockholm – en historisk institution i svensk og international scenekunst, som til stadighed formår at tale til sin samtid på tværs af skel. Deres repertoire kommenterer og reflekterer vores samfund, og de arbejder kontinuerligt for, at så mange som muligt i Sverige og internationalt skal have glæde af samtidsdans.
          </p>
        </div>

        <!-- Kreditering sektion flyttet til højre kolonne -->
        <div class="md:col-start-2 md:row-start-5 mt-6 relative z-10">
          <p class="mb-4 font-bold text-2xl mb-5 font-neue">
            KREDITERING
          </p>
          <p class="mb-4 z-10">
            Koreografi: Hooman Sharifi<br>
            Tekst: BAM - Burcu Sahin, Athena Farrokhzad, Merima Dzanicjevic<br>
            Musik og lyddesign: Neda Sanai<br>
            Lys: David Prokopic og Hooman Sharifi<br>
            Kostume: Marita Tjärnstöm og Hooman Sharifi<br>
            Repetitør: Agnieszka Dlugoszewska<br>
            Projektkonsulent: Niki Tsappos<br>
            Produktion: Cullberg<br>
            Dansere: Afra Hosseini Kaladshi, Ama Keyi, Anastasiia Olesciuk, Andreas Sanchez, Anna Fitoussi, Camille Pieux, Chiara Gilioli, Eleanor Campbell, Freddy Houndekindo, Gloria Kapokpa, Ida Hellmund, Katie Jacobsson, Lilan Steiner, Mohamed Y. Shika, Noam Segal, Omar Tseme, Valquez Rojas, Rebecca Livaniou, Robin Johansson, Shai Faran, Vincent Van Der Plas.<br>
            Cullberg er en del af Riksteatern, det svenske nationale turnéteater
          </p>
          <!-- Indsat billede -->
        </div>

        <div class="md:col-start-1 md:row-start-5 relative z-10 mr-16 p-8">
          <img src="@/assets/blurrydancers.png" alt="Slørede Dansere" />
        </div>

        <div class="md:col-start-2 md:row-start-6 relative z-10 mr-16 p-8">
          <img src="@/assets/blaagardsplads.png" alt="Blågårds Plads" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dancers2 from '@/components/dancers2.vue';

export default {
  name: 'About',
  components: {
    dancers2
  }
};
</script>

<style scoped>
.dancers2-container {
  margin-left: -200px;
  margin-top: 100px;
}
</style>