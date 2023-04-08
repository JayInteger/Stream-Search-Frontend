<template>
  <TheDefaultLayout>

    <div class="home bg-black-dark">
      <ListStreams :category="'-WANT TO WATCH-'" :movies="wantToWatch" v-if="wantToWatch.length"/>
      <NoContent :category="'-WANT TO WATCH-'" :headline="'Is there nothing you want to watch?'" :text="'Seek and you shall find'" v-else/>
      <ListStreams :category="'-FAVORITES-'" :movies="favorites" v-if="favorites.length"/>
      <NoContent :category="'-FAVORITES-'" :headline="'No Favorites'" :text="'You have to add something first!'" v-else/>
      <ListStreams :category="'-ALREADY SEEN-'" :movies="alreadySeen" v-if="alreadySeen.length"/>
      <NoContent :category="'-ALREADY SEEN-'" :headline="'Have you really never seen a movie?'" :text="'Do not forget to mark your watched movies'" v-else/>
    </div>
    
  </TheDefaultLayout>
</template>

<script>
// @ is an alias to /src

import ListStreams from "@/components/streams/ListStreams.vue";
import NoContent from "@/components/notifications/NoContent.vue";
import TheDefaultLayout from "@/layouts/TheDefaultLayout.vue";

export default {
  name: "FavoriteView",
  components: {
    ListStreams,
    TheDefaultLayout,
    NoContent,
  },
  computed: {
    favorites() {
      return this.$store.getters.favoriteMovies;
    },
    alreadySeen() {
      return this.$store.getters.alreadySeenMovies;
    },
    wantToWatch() {
      return this.$store.getters.wantToWatchMovies;
    },
    movies(){
      return this.$store.getters.movies;
    },
  },
  watch: {
    // whenever question changes, this function will run
    movies(newQuestion) {
      if (newQuestion) {
        this.assignMovies();
      }
    }
  },
  methods:{
    assignMovies(){
      const movies = this.$store.state.movies.movies;
      const favoriteMovieIds = this.$store.getters.favoriteMovieIds;
      const favoriteMovies = [];
      const alreadySeenMovieIds = this.$store.getters.alreadySeenMovieIds;
      const alreadySeenMovies = [];
      const wantToWatchMovieIds = this.$store.getters.wantToWatchMovieIds;
      const wantToWatchMovies = [];

      movies.forEach((movie) => {
        favoriteMovieIds.forEach((favoriteMovieId) => {
          favoriteMovieId === movie.id ? favoriteMovies.push(movie) : "";
        });
        alreadySeenMovieIds.forEach((alreadySeenMovieId) => {
          alreadySeenMovieId === movie.id ? alreadySeenMovies.push(movie) : "";
        });
        wantToWatchMovieIds.forEach((WantToWatchMovieId) => {
          WantToWatchMovieId === movie.id ? wantToWatchMovies.push(movie) : "";
        });
      });
      this.$store.dispatch("setFavoriteMovies", favoriteMovies);
      this.$store.dispatch("setAlreadySeenMovies", alreadySeenMovies);
      this.$store.dispatch("setWantToWatchMovies", wantToWatchMovies);
    },
  },
  mounted() {
    if (this.$store.getters.movies.length === 0) {
      this.$store.dispatch("setMovies");
    } else {
      this.assignMovies();
    }
  },
};
</script>
