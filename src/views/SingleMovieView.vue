<template>
  <TheDefaultLayout>
    <div class="bg-black-dark">
      <TheSingleStream />
    </div>
  </TheDefaultLayout>
</template>

<script>
import TheSingleStream from "@/components/streams/TheSingleStream.vue";
import TheDefaultLayout from "@/layouts/TheDefaultLayout.vue";

export default {
  name: "SingleMovieView",
  components: {
    TheSingleStream,
    TheDefaultLayout,
  },
};
</script>

<style scoped>
</style>