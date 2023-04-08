const state = {
    notificationList : [],
}
const mutations = {
    setNotification(state,payload){
        state.notificationList.push(payload);
    },
    removeNotification(state,payload){
        state.notificationList = payload;
    }
}
const actions = {
    setNotification(context,payload){
        // console.log("Notification ist gesetzt")
        context.commit("setNotification",payload);
    },
    removeNotification(context,payload){
        // console.log("Notification entfernt");
        const newList = state.notificationList.filter(el => el.id !== payload)
        // console.log(newList)
        // console.log( payload);
        context.commit("removeNotification", newList)
    }
}
const getters = {
    notifications: (state) => state.notificationList,
}



const notificationModule = { state, mutations, actions, getters};
export default notificationModule;