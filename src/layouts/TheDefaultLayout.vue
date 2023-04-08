<template>
<div class="bg-black-dark">
  <TheNavbar />
  <transition
    leave-active-class="animate__animated animate__fadeOut"
    enter-active-class="animate__animated animate__fadeIn"
    
    mode="out-in"
    appear
    :key="$route.path"
  >
    <!-- appear, auch beim erstellen der neuen component wird die animation benutzt -->
    <slot>
      <!-- <h1>Hauptbereich</h1> -->
    </slot>
  </transition>
  <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: "TheDefaultLayout",
  components: {
    TheNavbar,
    TheFooter,
  },


};
</script>

<style>
</style>