const state = {
  genres: [],
  actors: [],
  titles: [],
  years: [],
};
const mutations = {
  setGenres(state, payload) {
    state.genres = payload;
  },
  setActors(state, payload) {
    state.actors = payload;
  },
  setTitles(state, payload) {
    state.titles = payload;
  },
  setYears(state, payload) {
    state.years = payload;
  },
};
const actions = {
  setSearch(context) {
    const genresDO = [];
    const titlesDO = [];
    const actorsDO = [];
    const yearsDO = [];
    
    context.rootGetters.movies.forEach((movie) => {
      movie.genre.forEach((genre) => {
        genresDO.includes(genre) ? "" : genresDO.push(genre);
      });
      movie.actors.forEach((actor) => {
        actorsDO.includes(actor) ? "" : actorsDO.push(actor);
      });
      titlesDO.includes(movie.title) ? "" : titlesDO.push(movie.title);
      yearsDO.includes(movie.year) ? "" : yearsDO.push(movie.year);
    });
    context.commit("setGenres",genresDO);
    context.commit("setActors",actorsDO);
    context.commit("setYears",yearsDO);
    context.commit("setTitles",titlesDO);
  },

};
const getters = {
  genres: (state) => state.genres,
  actors: (state) => state.actors,
  titles: (state) => state.titles,
  years: (state) => state.years,
};

const searchModule = { state, mutations, actions, getters };

export default searchModule;
