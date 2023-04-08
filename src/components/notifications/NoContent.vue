<template>
  <div
    class="container category p-4 mt-5 bg-black"
    style="height: 100% !important"
  >
    <h3
      class="
        text-light
        p-1
        mb-4
        rounded
        bg-grey
        text-center
        header-text-shadow header-shadow
      "
    >
      {{category}}
    </h3>
    <div class="text-light text-center row">
      <div class="col-12 row mx-auto">
        <div class="col-12 inline-block align-middle">
          <h3>{{headline}}</h3>
          <p>{{text}}</p>
        </div>
        <div class="col-12 mb-0">
          <img src="@/assets/images/home_cinema.svg" class="img-fluid align-middle mx-auto" style="max-height:150px;" />
        </div>
      </div>
    </div>



  </div>
</template>

<script>
export default {
    name: "NoContent",
    props:{
        headline: String,
        text: String,
        category: String,
    }
}
</script>

<style>

</style>