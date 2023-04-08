<template>
  <TheDefaultLayout>
    <div class="bg-black-dark">
      <TheSearch :searchFor="searchFor"/>
    </div>
  </TheDefaultLayout>
</template>

<script>
import TheSearch from "@/components/TheSearch.vue";
import TheDefaultLayout from "@/layouts/TheDefaultLayout.vue";
export default {
  name: "SearchStreamView",
  data(){
    return {
      searchFor: { type : "", content : ""}
    }
  },
  components: {
    TheSearch,
    TheDefaultLayout,
  },


  created() {
    this.searchFor.type = this.$route.params.type;
    this.searchFor.content = this.$route.params.content;
  },
};
</script>

<style scoped>
</style>