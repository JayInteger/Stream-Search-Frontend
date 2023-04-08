<template>
  <div class="container bg-black mt-5 mb-5 ms-auto me-auto p-5 row category">
    <div class="col-3 bg-grey rounded">
      <div class="bg-grey m-0 mt-2 row" id="container-fsk">
        <h4 class="col-12 p-1 text-light">Choose Your Age:</h4>
        <div class="col-12 row justify-content-between">
          <div class="col offset-1 m-1 d-grid m-0 p-0">
            <input
              type="radio"
              class="btn-check"
              name="options-outlined"
              id="light-outlined"
              autocomplete="off"
              value="0"
              v-model="fsk"
            />
            <label class="btn btn-outline-light" for="light-outlined">0+</label>
          </div>
          <div class="col d-grid m-1 p-0">
            <input
              type="radio"
              class="btn-check"
              name="options-outlined"
              id="warning-outlined"
              autocomplete="off"
              value="6"
              v-model="fsk"
            />
            <label class="btn btn-outline-warning" for="warning-outlined"
              >6+</label
            >
          </div>
          <div class="col d-grid m-1 p-0">
            <input
              type="radio"
              class="btn-check"
              name="options-outlined"
              id="success-outlined"
              autocomplete="off"
              value="12"
              v-model="fsk"
            />
            <label class="btn btn-outline-success" for="success-outlined"
              >12+</label
            >
          </div>
          <div class="col d-grid m-1 p-0">
            <input
              type="radio"
              class="btn-check"
              name="options-outlined"
              id="primary-outlined"
              autocomplete="off"
              value="16"
              v-model="fsk"
            />
            <label
              class="btn btn-outline-primary btn-fsk"
              for="primary-outlined"
              >16+</label
            >
          </div>
          <div class="col d-grid m-1 p-0">
            <input
              type="radio"
              class="btn-check"
              name="options-outlined"
              id="danger-outlined"
              autocomplete="off"
              value="18"
              v-model="fsk"
              checked
            />
            <label class="btn btn-outline-danger btn-fsk" for="danger-outlined"
              >18+</label
            >
          </div>
        </div>
      </div>
      <div class="bg-grey m-0 mt-2 row" id="container-genre">
        <label for="genre" class="text-light col-12 p-1">
          <h4>Choose Your Genre:</h4></label
        >
        <div
          v-for="activeGenre in activeGenres"
          :key="activeGenre"
          class="hashtag-element col-auto genre active-genre"
          role="button"
          isactive="false"
          @click="deactivateGenre(activeGenre)"
          :genre="activeGenre"
        >
          <p class="p-0 m-0">{{ activeGenre }} X</p>
        </div>
        <div
          v-for="inActiveGenre in inActiveGenres"
          :key="inActiveGenre"
          class="hashtag-element col-auto genre"
          role="button"
          isactive="false"
          @click="activateGenre(inActiveGenre)"
          :genre="inActiveGenre"
        >
          <p class="p-0 m-0">{{ inActiveGenre }}</p>
        </div>
      </div>
      <div class="bg-grey m-0 mt-2 row" id="container-plattforms">
        <h4 class="col-12 p-1 text-light">Your Plattforms:</h4>

        <div class="col-12 row justify-content-between">
          <div
            class="col d-grid netflix-logo"
            role="button"
            style="min-height: 50px"
            :class="{ 'netflix-logo-active': searchInNetflix }"
            @click="searchInNetflix = !searchInNetflix"
          ></div>

          <div
            class="col d-grid amazon-logo h-100"
            role="button"
            :class="{ 'amazon-logo-active': searchInPrime }"
            @click="searchInPrime = !searchInPrime"
          ></div>
          <div
            class="col d-grid disney-logo h-100"
            role="button"
            :class="{ 'disney-logo-active': searchInDisney }"
            @click="searchInDisney = !searchInDisney"
          ></div>
        </div>
      </div>
      <div class="bg-grey m-0 mt-2 row" id="container-movie">
        <div class="col-12 text-light rounded p-1 col-12 row">
          <label class="col-12"><h4>Search A Movie:</h4></label>
          <input
            type="text"
            id="search-movie"
            class="col-12 ms-2"
            style="max-height: 25px"
            v-model="title"
            @submit="setTitle()"
          />
          <div v-if="title" class="hashtag-element active-genre mx-auto col-12">
            {{ title }}
          </div>
        </div>
      </div>
      <div class="bg-grey m-0 mt-2 row" id="container-actors">
        <div class="col-12 text-light rounded p-1 col-12 row">
          <label class="col-12"><h4>Filter For Actors:</h4></label>
          <input
            type="text"
            id="search-actor"
            class="col-12 ms-2 mb-2 input-text"
            style="max-height: 25px"
            v-model="actorsName"
            @keyup.enter="addActor(actorsName, $event)"
          />
          <div class="row ms-1">
            <div
              v-for="actor in actors"
              :key="actor"
              class="hashtag-element col-auto active-genre m-"
              role="button"
              isactive="false"
              @click="removeActor"
              :actor="actor"
            >
              <p class="p-0 m-0">{{ actor }} X</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-grey m-0 mt-2 mb-5 row" id="container-submits">
        <div class="col-6 d-grid p-0 m-0">
          <button type="reset" class="btn btn-outline-primary submit" disabled>
            Reset
          </button>
        </div>
        <div class="col-6 d-grid p-0 m-0">
          <button
            type="submit"
            class="btn btn-outline-primary submit"
            @click="filter"
          >
            Search
          </button>
        </div>
      </div>
    </div>

    <div class="col-9">
      <FilteredStreams />
    </div>
  </div>
</template>

<script>
import FilteredStreams from "@/components/streams/FilteredStreams.vue";
export default {
  name: "SearchStream",
  components: {
    FilteredStreams,
  },
  props: {
    searchFor: Object,
  },
  data() {
    return {
      searchInNetflix: true,
      searchInDisney: true,
      searchInPrime: true,
      fsk: 18,
      actors: [],
      title: "",
      allGenres: [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Drama",
        "Experimental",
        "Fantasy",
        "Historical",
        "Horror",
        "Romance",
        "Science Fiction",
        "Thriller",
        "Western",
        "Other",
      ],
      activeGenres: [],
      inActiveGenres: [],
      actorsName: "",
    };
  },

  computed: {},
  methods: {
    filter() {
      let movies = this.$store.getters.movies;

      movies = movies
        .filter((movie) => movie.fsk <= parseInt(this.fsk))
        .filter((movie) => {
          let check = false;
          this.activeGenres.forEach((genreInGenres) => {
            movie.genre.forEach((genreInMovie) => {
              if (genreInMovie === genreInGenres) {
                check = true;
              }
            });
          });
          return check === true ? true : false;
        })
        .filter((movie) => {
          return (movie.availablePlattforms.netflix && this.searchInNetflix) ||
            (movie.availablePlattforms.disney && this.searchInDisney) ||
            (movie.availablePlattforms.amazon && this.searchInPrime)
            ? true
            : false;
        });
        console.log(this.actors)
      if (this.actors.length != 0) {

        console.log("actors:")
        console.log(this.actors)
        console.log("actors = true!")
        movies = movies.filter((movie) => {
          let temp = false;
          this.actors.forEach((actor) => {
            movie.actors.forEach((movieActor) => {
              movieActor.toLowerCase() == actor.toLowerCase() ? temp = true : "";
              });
          });
        return temp ==true ? true : false; 
        });
      }
      console.log(movies);

      this.$store.dispatch("setFilteredMovies", movies);
    },
    setFsk(newFsk) {
      this.fsk = newFsk;
    },

    activateGenre(genre) {
      this.inActiveGenres = this.inActiveGenres.filter(
        (inActiveGenre) => inActiveGenre !== genre
      );
      this.activeGenres.push(genre);
    },
    deactivateGenre(genre) {
      this.activeGenres = this.activeGenres.filter(
        (activeGenre) => activeGenre !== genre
      );
      this.inActiveGenres.push(genre);
    },

    addActor(value) {
      this.actorsName = "";
      this.actors.push(value);
    },
    removeActor(event) {
      const actor = event.currentTarget.getAttribute("actor");
      const index = this.actors.indexOf(actor);
      if (index > -1) {
        this.actors.splice(index, 1);
      }
    },
    setSearch() {
      // console.log(this.searchFor);
      // this.searchFor.type === "Genre"
      //   ? this.activateGenre(this.searchFor.content)
      //   : this.searchFor.type === "Actor"
      //   ? this.addActor(this.searchFor.content)
      //   : this.searchFor.type === "Title"
      //   ? (this.title = this.searchFor.content)
      //   : "No search";
        switch (this.searchFor.type) {
          case "Genre":
            this.activateGenre(this.searchFor.content);
            break;
          case "Actor":
            this.addActor(this.searchFor.content);
            this.inActiveGenres = [];
            this.activeGenres = this.allGenres;
            break;
          case "Title":
            this.title = this.searchFor.content;
            break;
        
          default:
            break;
        }
    },
  },
  mounted() {
    this.inActiveGenres = this.allGenres;
    this.setSearch();
    this.filter();
  },
};
</script>

<style scoped>
.btn-fsk {
  min-width: 40px;
}
.hashtag-element {
  outline: solid 1px #da0037;
  color: #da0037;
  border-radius: 5px;
  height: fit-content;
  width: fit-content;
  margin: 2px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 7px;
  padding-right: 7px;
}

.hashtag-element:hover {
  background-color: #da0037;
  color: white;
}
.active-genre {
  background-color: #da0037;
  color: white;
  white-space: nowrap !important;
}
.active-genre:hover {
  color: #252525;
}

.netflix-logo {
  background-color: grey;
  -webkit-mask-image: url("@/assets/logos/netflix_logo.svg");
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-image: url("@/assets/logos/netflix_logo.svg");
}
.netflix-logo:hover,
.netflix-logo-active {
  background-color: #da0000;
}
.disney-logo {
  background-color: grey;
  -webkit-mask-image: url("@/assets/logos/disney+_logo.svg");
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-image: url("@/assets/logos/disney+_logo.svg");
}
.disney-logo:hover,
.disney-logo-active {
  background-color: blue;
}
.amazon-logo {
  background-color: grey;
  -webkit-mask-image: url("@/assets/logos/prime_logo.svg");
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-image: url("@/assets/logos/prime_logo.svg");
}
.amazon-logo:hover,
.amazon-logo-active {
  background-color: aqua;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

input[type="text"] {
  padding: 10px;
  border: 0;
  background-color: #383838;
  color: #da0000;
}
input[type="text"]:focus {
  border: solid 1px #ff3165;
  box-shadow: 0 0 10px 3px #da0000 !important;

  outline: none;
}
</style>