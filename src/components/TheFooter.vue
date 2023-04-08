<template>
  <!-- bla -->
  <!-- bla bla bla -->
  <div class="container-fluid  bg-black mt-5">
    <div class="row justify-content-center">
      <hr class="pb-3" />
      <font-awesome-icon
        icon="fa-brands fa-twitter"
        class="fa-brands fa-3x col-auto m-2 p-2"
        role="button"
      />
      <font-awesome-icon
        icon="fa-brands fa-tiktok"
        class="fa-brands fa-3x col-auto m-2 p-2"
        role="button"
      />
      <font-awesome-icon
        icon="fa-brands fa-youtube"
        class="fa-brands fa-3x col-auto m-2 p-2"
        role="button"
      />
      <font-awesome-icon
        icon="fa-brands fa-spotify"
        class="fa-brands fa-3x col-auto m-2 p-2"
        role="button"
      />

      <h6 class="text-light col-12 fs-8 mt-3 mb-5 text-center"
        >© 2022-2023 StreamSearch GmbH </h6
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
.fa-solid,
.fa-brands,
.fa-sharp-solid {
  background-color: #DA0037;
  color: #EDEDED !important;
  border-radius: 0.2em;
  padding: 0.25em;
}
.fa-solid:hover,
.fa-brands:hover,
.fa-sharp-solid:hover {
  transform: scale(1.1);
  transition: all .2s ease-in-out ;
  background-color: #EDEDED;
  color: #DA0037 !important;
  border-radius: 0.2em;
  padding: 0.25em;
  box-shadow: 5px 5px #DA0037;
}
</style>