<template>
  <div
    class="container category p-0  bg-black"
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
      -FILTERED MOVIES-
    </h3>
    <div class=" row ps-3 pe-3" v-if="movies.length != 0">
      <div class="col-auto " v-for="(movie, index) in movies" :key="movie.id">
        <router-link :to="{ name: 'movie', params: { id: movie.id } }">
          <div
            class="p-0 m-0 rounded mb-3 grow-scale"
            style="max-width: 160px; position: relative"
            role="button"
          >
            <img
              :src="imgSource(movie)"
              width="160"
              height="240"
              class="img-cover rounded m-0"
              ref="{{index}}"
              @mouseover="(hover = true), (hoverEl = index)"
              @mouseleave="(hover = false), (hoverEl = '')"
            />
            <div
              class="
                row
                float-start
                available-div
                float-right
                rounded
                bg-transparent
                p-1
              "
            >
              <img
                v-if="movie.availablePlattforms.netflix"
                src="@/assets/logos/netflix_logo.jpg"
                class="available-logo col-auto p-0 offset-auto"
                width="25"
                height="25"
              />
              <img
                v-if="movie.availablePlattforms.disney"
                src="@/assets/logos/disney+_logo.jpg"
                class="available-logo col-auto p-0"
                width="25"
                height="25"
              />
              <img
                v-if="movie.availablePlattforms.amazon"
                src="@/assets/logos/prime_logo.jpg"
                class="available-logo col-auto p-0"
                width="25"
                height="25"
              />
              <p
                class="text-light bg-colorful rounded p-1 m-0"
                v-if="
                  !movie.availablePlattforms.netflix &&
                  !movie.availablePlattforms.disney &&
                  !movie.availablePlattforms.amazon
                "
              >
                Not Available
              </p>
            </div>
            <img />
          </div>
        </router-link>
      </div>
    </div>
    <div v-else class="text-light text-center row">
      <div class="col-12 row ">
        <div class="col-12 inline-block align-middle">
          <h3>NO MATCHES,</h3>
          <p>specify your search and try again!</p>
        </div>
        <div class="col-12 row">
          <img src="@/assets/images/searching.svg" class="img-fluid align-middle col-4 offset-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilteredStreams",
  data() {
    return {
      toggled: false,
      hover: false,
      hoverEl: null,
    };
  },

  computed: {
    movies() {
      return this.$store.state.movies.filteredMovies;
    },
  },
  mounted(){
    this.$store.getters.movies.length === 0 ? this.$store.dispatch("setMovies") : console.log("Movies sind schong geladen");
    this.$store.dispatch("resetFilteredMovies");
  },

  methods: {
    toggle() {
      const toggled = this.toggled;
      this.toggled = !toggled;
    },
    imgSource(movie) {
      return require(`@/assets/covers/${movie.cover + ".jpg"}`);
    },
  },
};
</script>

<style scoped>
.category {
  border-radius: 20px;
}

.available-logo {
  border-radius: 7px;
}
.available-div {
  position: absolute;
  bottom: 10px;
  right: 20px;
  z-index: 1;
}
</style>