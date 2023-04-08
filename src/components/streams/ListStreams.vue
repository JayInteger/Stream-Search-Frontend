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
    
    <Splide :options="options" aria-label="My Favorite Images" >
      <SplideSlide class="" v-for="movie in movies" :key="movie.id">
        <router-link :to="{ name: 'movie', params: { id: movie.id } }">
          <div
            class=" rounded grow-scale  "
            style="width: 200px; height: 300px; "
            role="button"
          >
            <img
              :src="imgSource(movie)"
              width="200"
              height="300"
              class="img-cover rounded"
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
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
export default {
  name: "ListStreams",
  data() {
    return {
      splideSetup : {
      rewind: true,
      gap: "0rem",
      perPage: 7,
      breakpoints: {
        400: {
          perPage: 1,
        },
        576: {
          perPage: 2,
        },
        768: {
          perPage: 3,
        },
        992: {
          perPage: 4,
        },
        1200: {
          perPage: 5,
        },
        1400: {
          perPage: 6,
        },
      },
      focus: 0,
      omitEnd: true,
      // type: "loop",
      wheel:true,
      arrowPath: "",
      classes: {
		arrows: 'splide__arrows your-class-arrows',
		arrow : 'splide__arrow your-class-arrow',
		prev  : 'splide__arrow--prev your-class-prev',
		next  : 'splide__arrow--next your-class-next',
  },
    },
    };
  },
  props:{
    category:String,
    movies: Array,
  },

  beforeCreate() {
    if(!this.$store.getters.movies){
      this.$store.dispatch("setMovies");
    }
    
  },

  computed: {
    options(){
        return this.splideSetup;
    }
  },
  created(){
    if(this.category === "-SIMILAR MOVIES-"){
        
            this.splideSetup.gap = "11.5rem"
    }
    
    if(this.movies.length >= 7){
      this.splideSetup.type = "loop";
    }
  },

  methods: {
    imgSource(movie) {
      return require(`@/assets/covers/${movie.cover + ".jpg"}`);
    },

  },
};
</script>

<style scoped>
@import "@splidejs/vue-splide/css";

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