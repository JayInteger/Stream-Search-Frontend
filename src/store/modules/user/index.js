import axios from "axios";
const state = {
  login: {
    loggedIn: false,
  },
  user: {
    username: "",
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    registered: "",
    favoriteGenres: [],
    id: "63455560a5d6bad37c799eca",
    role: "",
    desc: "",
    avatar: "",
    lang: "",
    abos: [],
    favoriteMovieIds: [],
    alreadySeenMovieIds: [],
    wantToWatchMovieIds: [],
  },
};
const mutations = {
  login() {
    state.login.loggedIn = true;
  },
  addFavorite(state, payload) {
    state.user.favoriteMovieIds.push(payload);
  },
  removeFavorite(state, payload) {
    let index = state.user.favoriteMovieIds.findIndex((id) => id === payload);
    state.user.favoriteMovieIds.splice(index, 1);
  },
  markAlreadySeen(state, payload) {
    state.user.alreadySeenMovieIds.push(payload);
  },
  unmarkAlreadySeen(state, payload) {
    let index = state.user.alreadySeenMovieIds.findIndex(
      (id) => id === payload
    );
    state.user.alreadySeenMovieIds.splice(index, 1);
  },
  markWantToWatch(state, payload) {
    state.user.wantToWatchMovieIds.push(payload);
  },
  unmarkWantToWatch(state, payload) {
    let index = state.user.wantToWatchMovieIds.findIndex(
      (id) => id === payload
    );
    state.user.wantToWatchMovieIds.splice(index, 1);
  },
  setUser(state, payload) {
    state.user = payload;
  },
};
const actions = {
  login() {},
  addFavorite(context, payload) {
    context.commit("addFavorite", payload);
  },
  removeFavorite(context, payload) {
    context.commit("removeFavorite", payload);
  },
  markAlreadySeen(context, payload) {
    context.commit("markAlreadySeen", payload);
  },
  unmarkAlreadySeen(context, payload) {
    context.commit("unmarkAlreadySeen", payload);
  },
  markWantToWatch(context, payload) {
    context.commit("markWantToWatch", payload);
  },
  unmarkWantToWatch(context, payload) {
    context.commit("unmarkWantToWatch", payload);
  },
  updateUser(context) {
    const userDO = context.state.user;
    axios
      .put(`http://localhost:3000/users/update/${state.user.id}`, userDO)
      .then(console.log("User is updated"))
      .catch((error) => console.log(error));
  },
  loadUser(context) {
    axios.get(`http://localhost:3000/users/get/${state.user.id}`)
    .then((res) => {
      const userDO = res.data;
      console.log("user is loaded")
      context.commit("setUser", userDO);
    });
  },
  createUser(context, payload) {
    axios.post("http://localhost:3000/users/new", payload).then(() => {
      console.log("User wurde angelegt!");
    });
  },
};
const getters = {
  favoriteMovieIds: (state) => state.user.favoriteMovieIds,
  wantToWatchMovieIds: (state) => state.user.wantToWatchMovieIds,
  alreadySeenMovieIds: (state) => state.user.alreadySeenMovieIds,
};

const userModule = {
  state,
  mutations,
  actions,
  getters,
};

export default userModule;
