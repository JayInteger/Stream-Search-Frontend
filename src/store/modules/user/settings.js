import { reactive } from "vue";
import { listSettings } from "./settingsseed";

const state = reactive({
    listSettings,

});
const mutations ={
    setActiveSetting(settId) {
        state.listSettings.map((settObj) => {
            settObj.id === settId ? (settObj.active = true) : (settObj.active = false)
        })
    },

};
const actions = {

};
const getters= {
    activeSetting: () => state.listSettings.find((settObj) => settObj.active),

};
const userSettings = {
    state,
    mutations,
    actions,
    getters,
  };
  
  export default userSettings;