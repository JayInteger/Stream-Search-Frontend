const state = {
    login:{
        loggedIn : true
    },
    
}
const mutations = {
    login(){
        state.login.loggedIn = true;
    }
    
}
const actions = {
    login(){
        
    }
}
const getters = {

}

const authModule = {
    state,mutations,actions,getters
}

export default authModule;