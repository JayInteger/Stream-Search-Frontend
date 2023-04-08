<template>
  <TheDefaultLayout>
    <div class="home bg-black-dark">
      <ListStreams :category="'-NEW MOVIES-'" :movies="newMovies"/>
      <!-- <ListStreams :category="'-NEW MOVIES-'" :movies="movies"/> -->
      <ListStreams :category="'-LATEST UPLOADES-'" :movies="latestUpdates" />
      <ListStreams :category="'-POPULAR MOVIES-'" :movies="popularMovies" />
    </div>
  </TheDefaultLayout>
</template>

<script>
import ListStreams from "@/components/streams/ListStreams.vue";
import TheDefaultLayout from "@/layouts/TheDefaultLayout.vue";

export default {
  name: "HomeView",
  components: {
    ListStreams,
    TheDefaultLayout,
  },
  data() {
    return {
      unseenMovies: [],
      newMovies: [],
      popularMovies: [],
      latestUpdates: []
    };
  },

  computed: {
    movies() {
      return this.$store.state.movies.movies;
    },
    alreadySeenMovieIds() {
      return this.$store.getters.alreadySeenMovieIds;
    },
  },
  mounted() {
    this.generateMovieTypes();
    // let unseenMovies = this.movies.slice();

    // this.alreadySeenMovieIds.forEach((alreadySeenMovieId) => {
    //   unseenMovies = unseenMovies.filter( el => el.id !== alreadySeenMovieId)
    // });

    // this.newMovies = unseenMovies.filter( el => el.year >= 2020)
    // this.popularMovies = unseenMovies.filter( el => el.imdbRating >= 7.0)
    // this.latestUpdates = unseenMovies
    // // this.latestUpdates = unseenMovies.filter( el => el.upload >= "02.02.2000")
    // // this.latestUpdates = unseenMovies.filter( el => el.upload >= 3 Monate)
    // this.unseenMovies = unseenMovies;
  },
  watch: {
    // whenever question changes, this function will run
    movies(newQuestion) {
      if (newQuestion) {
        this.generateMovieTypes();
      }
    }
  },
  methods:{
    generateMovieTypes(){
      let unseenMovies = this.movies.slice();

    this.alreadySeenMovieIds.forEach((alreadySeenMovieId) => {
      unseenMovies = unseenMovies.filter( el => el.id !== alreadySeenMovieId)
    });

    this.newMovies = unseenMovies.filter( el => el.year >= 2020)
    this.popularMovies = unseenMovies.filter( el => el.imdbRating >= 7.0)
    this.latestUpdates = unseenMovies
    // this.latestUpdates = unseenMovies.filter( el => el.upload >= "02.02.2000")
    // this.latestUpdates = unseenMovies.filter( el => el.upload >= 3 Monate)
    this.unseenMovies = unseenMovies;
    }
  }
};
</script>
