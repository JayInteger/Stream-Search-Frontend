import axios from "axios";
const state = {
  movies: [],
  filteredMovies: [],
  favoriteMovies: [],
  wantToWatchMovies: [],
  alreadySeenMovies: [],
  // updated: false,
  // loaded: false,
};
const mutations = {
  setMovies(state, payload) {
    state.movies = payload;
  },
  setFilteredMovies(state, payload) {
    state.filteredMovies = payload;
  },
  resetFilteredMovies(state){
    state.filteredMovies = [];
  },
  setFavoriteMovies(state,payload){
    state.favoriteMovies = payload;
    // dispatch("setNotification",`${payload.title} added to youre favorites!`, {root:true})
  },
  setAlreadySeenMovies(state,payload){
    state.alreadySeenMovies = payload;
    // dispatch("setNotification",`${payload.title} added to youre allready seen Movies!`, {root:true})
  },
  setWantToWatchMovies(state,payload){
    state.wantToWatchMovies = payload;
    // dispatch("store/notifications/setNotification",`${payload.title} added to youre want to watch Movies!`, {root:true})
  },
  // update(state){
  //   state.updated = true;
  // }
};
const actions = {
  async setMovies(context) {
    await axios.get('../streams.json')
      .then((res) => {
        const movies = res.data;
        movies.sort((a,b) => {
          return a.year > b.year ? -1 : a.year < b.year ? 1 : 0;
        })
        context.commit("setMovies", movies);
        return;
      })
      await(context.dispatch("setSearch"))
      .catch((err) => console.log(err));
  },
  setFilteredMovies(context, payload){
    const moviesArr = payload;
    context.commit("setFilteredMovies", moviesArr)
  },
  resetFilteredMovies(context){
    context.commit("resetFilteredMovies")
  },
  setFavoriteMovies(context,payload){
    context.commit("setFavoriteMovies",payload);

  },
  setAlreadySeenMovies(context,payload){
    context.commit("setAlreadySeenMovies",payload);
  },
  setWantToWatchMovies(context,payload){
    context.commit("setWantToWatchMovies",payload);
  },
};
const getters = {
  
    movie: (state) => (id) => {
      return state.movies.find(movie => movie.id === id)
    },
    movies: (state) => state.movies,
    favoriteMovies: (state) => state.favoriteMovies,
    alreadySeenMovies: (state) => state.alreadySeenMovies,
    wantToWatchMovies: (state) => state.wantToWatchMovies,
 
};

const movieModule = {
  state,
  mutations,
  actions,
  getters,
};

export default movieModule;
