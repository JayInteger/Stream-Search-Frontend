<template>
  <div class="container-fluid p-0 m-0 bg-black-dark">
    <div class="container mt-5 mb-5 p-2 bg-black rounded" v-if="movie">
      <div class="row p-3">
        <div class="col-auto" width="200" style="max-width: 230px">
          <div class="fskInCover">
            <img
              :src="imgSource"
              alt=""
              width="200"
              height="300"
              class="col-12 rounded big-cover mb-2"
            />
            <img :src="imgSourceFSK" alt="" class="fsk-logo" />
          </div>

          <div class="col-12" v-if="isAvailable">
            <h6 class="text-colorful m-1 col-12">Available on:</h6>
            <div class="col-12">
              <img
                v-if="movie.availablePlattforms.netflix === true"
                src="@/assets/logos/netflix_logo.jpg"
                alt=""
                class="rounded m-1 col-auto stream-logo"
                role="button"
              />
              <img
                v-if="movie.availablePlattforms.disney === true"
                src="@/assets/logos/disney+_logo.jpg"
                alt=""
                class="rounded m-1 col-auto stream-logo"
                role="button"
              />
              <img
                v-if="movie.availablePlattforms.amazon === true"
                src="@/assets/logos/prime_logo.jpg"
                alt=""
                class="rounded m-1 col-auto stream-logo"
                role="button"
              />
            </div>
          </div>
          <div v-else>
            <h4 class="text-colorful m-1 col-12">Not Available</h4>
          </div>
          <div class="col-12 d-grid mt-2">
            <button
              v-if="!wantToWatch"
              class="fav-buttons bg-colorful text-light rounded"
              @click="markWantToWatch(movie.id)"
            >
              <!-- <span class="float-start ms-2">+</span>Want watch -->
              <span class="float-start ms-2"
                ><font-awesome-icon
                  icon="fa-solid fa-eye"
                  class="fa-1x m-0" /></span
              >Want watch
            </button>
            <button
              v-else
              class="rounded disabled bg-grey text-muted inactive-button"
              @click="unmarkWantToWatch(movie.id)"
            >
              dont want to wacht
            </button>
            <button
              v-if="!alreadySeen"
              class="fav-buttons bg-colorful text-light rounded"
              @click="markAlreadySeen(movie.id)"
            >
              <!-- <span class="float-start ms-2">-</span>Already seen -->
              <span class="float-start ms-2"
                ><font-awesome-icon
                  icon="fa-solid fa-eye-slash"
                  class="fa-1x m-0" /></span
              >Already seen
            </button>
            <button
              v-else
              class="rounded disabled bg-grey text-muted inactive-button"
              @click="unmarkAlreadySeen(movie.id)"
            >
              yet not seen
            </button>
            <button
              v-if="!isFavorite"
              class="fav-buttons bg-colorful text-light rounded"
              @click="addFavorite(movie.id)"
            >
              <span class="float-start ms-2"
                ><font-awesome-icon
                  icon="fa-solid fa-star"
                  class="fa-1x m-0" /></span
              >Favorite
            </button>
            <button
              v-else
              class="rounded disabled bg-grey text-muted inactive-button"
              @click="removeFavorite(movie.id)"
            >
              No longer favorite
            </button>
          </div>
        </div>

        <div class="row col-10">
          <h1 class="col-auto text-light">{{ movie.title }}</h1>
          <div class="col-auto">
            <h6 class="col-12 text-colorful m-0">{{ movie.year }}</h6>
            <h6 class="col-12 text-colorful m-0">{{ movie.length }} min.</h6>
          </div>
          <div class="col-auto justify-content-start">
            <img
              src="@/assets/images/fsk/fsk12.png"
              alt=""
              width="50px"
              height="50px"
            />
          </div>
          <div class="col-12">
            <h4 class="text-colorful">Genre: {{ genres }}</h4>
          </div>
          <div class="col-12">
            <h4 class="text-light">
              {{ movie.desc }}
            </h4>
          </div>
          <div class="col-12">
            <h5 class="text-muted">Actors: {{ actors }}</h5>
          </div>

          <ListStreams
            :category="'-SIMILAR MOVIES-'"
            :movies="similarMovies"
            class="col-12"
            style="height: fit-content"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListStreams from "@/components/streams/ListStreams.vue";
export default {
  name: "SingleMovie",
  components: {
    ListStreams,
  },

  data() {
    return {
      id: null,
      path: "",
      favorite: false,
      seen: false,
      wantWatch: false,
    };
  },
  computed: {
    movie() {
      return this.$store.getters.movie(this.id);
    },
    genres() {
      return this.movie.genre.join(", ");
    },
    actors() {
      return this.movie.actors.join(", ");
    },
    imgSource() {
      return require(`@/assets/covers/${this.movie.cover + ".jpg"}`);
    },
    isFavorite() {
      return this.$store.getters.favoriteMovieIds.find((id) => id === this.id);
    },
    alreadySeen() {
      return this.$store.getters.alreadySeenMovieIds.find(
        (id) => id === this.id
      );
    },
    wantToWatch() {
      return this.$store.getters.wantToWatchMovieIds.find(
        (id) => id === this.id
      );
    },
    similarMovies() {
      const smovies = [];
      const movies = this.$store.getters.movies;
      movies.forEach((movie) => {
        if (movie.id !== this.id) {
          movie.genre.forEach((movieGenre) => {
            this.movie.genre.forEach((activMovieGenre) => {
              if ((movieGenre === activMovieGenre) & !smovies.includes(movie)) {
                smovies.push(movie);
              }
            });
          });
        }
      });
      return smovies;
    },
    imgSourceFSK() {
      return require(`@/assets/images/fsk/fsk${this.movie.fsk + ".png"}`);
    },
    isAvailable() {
      if (
        this.movie.availablePlattforms.netflix ||
        this.movie.availablePlattforms.disney ||
        this.movie.availablePlattforms.amazon
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    addFavorite(movieId) {
      this.$store
        .dispatch("addFavorite", movieId)
        .then(this.$store.dispatch("updateUser"));
      this.$store.dispatch("setNotification", {
        title: this.movie.title.toUpperCase(),
        target: "to favorites",
        id: Date.now(),
        type: "added",
      });
    },
    removeFavorite(movieId) {
      this.$store
        .dispatch("removeFavorite", movieId)
        .then(this.$store.dispatch("updateUser"));
      this.$store.dispatch("setNotification", {
        title: this.movie.title.toUpperCase(),
        target: "from favorites",
        id: Date.now(),
        type: "removed",
      });
    },
    markAlreadySeen(movieId) {
      this.$store
        .dispatch("markAlreadySeen", movieId)
        .then(this.$store.dispatch("updateUser"));
      this.$store.dispatch("setNotification", {
        title: this.movie.title.toUpperCase(),
        target: "to already seen",
        id: Date.now(),
        type: "added",
      });
    },
    unmarkAlreadySeen(movieId) {
      this.$store
        .dispatch("unmarkAlreadySeen", movieId)
        .then(this.$store.dispatch("updateUser"));
      this.$store.dispatch("setNotification", {
        title: this.movie.title.toUpperCase(),
        target: "from already seen",
        id: Date.now(),
        type: "removed",
      });
    },
    markWantToWatch(movieId) {
      this.$store
        .dispatch("markWantToWatch", movieId)
        .then(this.$store.dispatch("updateUser"));
      this.$store.dispatch("setNotification", {
        title: this.movie.title.toUpperCase(),
        target: "to want to watch",
        id: Date.now(),
        type: "added",
      });
    },
    unmarkWantToWatch(movieId) {
      this.$store
        .dispatch("unmarkWantToWatch", movieId)
        .then(this.$store.dispatch("updateUser"));
      this.$store.dispatch("setNotification", {
        title: this.movie.title.toUpperCase(),
        target: "from want to watch",
        id: Date.now(),
        type: "removed",
      });
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.$watch(
      () => this.$route.params,
      // (toParams, previousParams) => {
      (toParams) => {
        // react to route changes...
        this.id = toParams.id;
      }
    );
  },
  mounted() {
    if (this.$store.getters.movies.length === 0) {
      this.$store.dispatch("setMovies");
    }
  },
};
</script>

<style scoped>
.fav-buttons {
  font-weight: bold;
  border: solid 1px #b6002d;
  margin-top: 3px;
}
.fav-buttons:hover {
  font-weight: bold;
  background-color: #ff0040 !important;
}
.inactive-button{
  border: solid 1px rgb(21, 21, 21);
}
.big-cover {
  border: solid 2px #202020;
  outline: solid 5px #252525;
}
.fskInCover {
  position: relative;
}
.fsk-logo {
  position: absolute;
  bottom: 15px;
  left: 8px;
  height: 55px;
}
</style>