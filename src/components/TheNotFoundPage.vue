<template>
  <TheDefaultLayout>

    <div class="row m-0 p-5">
    <img src="@/assets/images/404.svg" alt="" class="mt-5 mb-5  col-6 offset-3">
    <h1 class="text-colorful text-center col-12">Are you lost?</h1>
    <h4 class="text-light text-center col-12">Better start again on the home page!</h4>
    
    <router-link :to="{ name: 'home'}" role="button" class="p-0 btn col-auto mx-auto mt-5">
        <button class="btn bg-colorful  text-light col-auto mx-auto d-inline">Go Back</button>
    </router-link>
    </div>

  </TheDefaultLayout>
</template>

<script>
import TheDefaultLayout from "@/layouts/TheDefaultLayout.vue";
export default {
    name: "TheNotFoundPage",
    components:{
        TheDefaultLayout,
    }
}
</script>

<style scoped>
  .btn{
    text-decoration-line: none !important;
    text-decoration: none !important;
  }
</style>