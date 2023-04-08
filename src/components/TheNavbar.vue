<template>
  <nav class="bg-black align-middle">
    <ul class="p-0 justify-content-center">
      <li class="p-0 m-0 align-middle">
        <div class="text-colorful p-0 m-0">
          <router-link
            to="/home"
            class="header-text-shadow logo-text"
            role="button"
          >
            <h3 class="nav-item p-0 m-0 mt-2 me-5" role="button">
              STREAMSEARCH
            </h3>
          </router-link>
        </div>
      </li>
      <li class="align-middle">
        <router-link to="/home" class="text-light nav-link" role="button"
          ><h4 class="nav-item mt-3">HOME</h4></router-link
        >
      </li>

      <li class="align-middle">
        <router-link to="/favorites" class="text-light nav-link" role="button"
          ><h4 class="nav-item mt-3 ms-3">MY AREA</h4></router-link
        >
      </li>
    </ul>

    <div id="searchbar" class="float-end row d-inline">
      <span class="align-top p-0 m-0 ms-2">Search for:</span>

      <input
        type="text"
        name="search"
        id="search"
        placeholder="Movie, Genre or Actor"
        class="col-auto p-0 m-0 ms-2 align-top"
        autocomplete="off"
      />
      <span
        style="border-left: 1px solid; height: 100%"
        class="p-0 m-0 bc-colorful col-auto"
      ></span>
      <router-link to="/search" role="button">
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          class="
            fa-1x
            text-colorful
            m-0
            pe-1
            ps-2
            search-icon
            col-auto
            align-baseline
          "
          role="button"
        />
      </router-link>
      <div
        class="results col-5 offset-3 bg-light rounded mt-1 p-1"
        id="suggestions"
      >
        <div
          v-for="result in results.slice(0, 10)"
          :key="result.value"
          class="suggestion rounded p-2"
        >
          <router-link
            :to="{
              name: 'search',
              params: {type: result.type, content: result.value },
            }"
            role="button"
            @click.once="focusSearchbar"
          >
            <!-- <router-link to="/search" role="button"> -->
            {{ result.type }}: {{ result.value }}
          </router-link>
        </div>
      </div>
    </div>

    <div v-if="loggedIn">
      <router-link to="/login" role="button">
        <font-awesome-icon
          icon="fa-solid fa-circle-user"
          class="fa-2x user-icon"
          role="button"
      /></router-link>
    </div>
    <div v-else>
      <router-link to="/login" role="button">
        <font-awesome-icon
          icon="fa-solid fa-right-to-bracket"
          class="fa-2x user-icon"
          role="button"
      /></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      allSuggestions: [],
      results: [],
    };
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.login.loggedIn;
    },
    genres() {
      return this.$store.getters.genres;
    },
    actors() {
      return this.$store.getters.actors;
    },
    titles() {
      return this.$store.getters.titles;
    },
  },
  mounted() {
    const suggestions = document.querySelector("#suggestions");
    const searchbar = document.querySelector("#search");
    searchbar.addEventListener("focus", () => {
      suggestions.classList.add("show");
    });
    searchbar.addEventListener("focusout", (e) => {
      e.preventDefault();
      const waitWithFocus = function () {
        suggestions.classList.remove("show");
      };
      setTimeout(waitWithFocus, 300);
    });
    searchbar.addEventListener("input", (e) => {
      this.results = [];
      this.allSuggestions.forEach((suggestion) => {
        suggestion.value.toLowerCase().includes(e.target.value.toLowerCase())
          ? this.results.push(suggestion)
          : "";
      });
    });

    const possibleResults = [];
    this.genres.forEach((genre) => {
      possibleResults.push({ type: "Genre", value: genre });
    });
    this.actors.forEach((actor) => {
      possibleResults.push({ type: "Actor", value: actor });
    });
    this.titles.forEach((title) => {
      possibleResults.push({ type: "Title", value: title });
    });
    this.allSuggestions = possibleResults;
  },
  methods: {
    focusSearchbar() {
      document.getElementById("search").focus();
    },
  },
};
</script>

<style scoped>
@import "~bootstrap-vue";

.user-icon {
  color: #da0037;
  width: 156px;
}
.user-icon:hover {
  color: #ededed;
  width: 156px;
}
.logo {
  width: 10%;
  height: 10%;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 5%;
  padding-left: 5%;
}
nav ul li {
  list-style-type: none;
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none !important;
}
nav ul li router-link {
  text-decoration: none !important;
}
.nav-item:hover {
  color: #da0037;
  /* font-weight: bold; */
  text-decoration-line: underline;
}
#searchbar {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: #ededed;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-right: 10px;
  padding-left: 10px;
  position: relative;
}
#search {
  background: none;
  border: none;
}
#search:focus {
  background: none;
  border: none;
  outline: none;
  color: #da0037;
}
.search-icon:hover {
  color: #ff0040 !important;
  transform: scale(1.3);
}
li {
  padding: 0px !important;
  margin: 0px !important;
}
.logo-text {
  text-decoration: none !important;
}
.router-link-active:not(.logo-text) {
  color: #ff2e62 !important;
  font-weight: bold;
  text-decoration-line: underline;
  text-shadow: 0px 0px 10px #ff0040;
}
.nav-item {
  font-weight: bold !important;
}
.results {
  position: absolute;
}
.show {
  z-index: 99;
  visibility: visible !important;
}
#suggestions {
  visibility: hidden;
}
.suggestion:hover {
  background: #ff0040;
  color: #ededed;
}
</style>