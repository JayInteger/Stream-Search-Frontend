import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSplide from '@splidejs/vue-splide';

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// import { BootstrapVue } from 'bootstrap-vue';
// import { DropdownPlugin } from 'bootstrap-vue'
// import './plugins/bootstrap-vue.js'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faTiktok, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCircleUser, faRightToBracket, faMagnifyingGlass, faHeart, 
    faEyeSlash, faStar, faBookmark, faTrash, faSquareMinus, faClock, 
    faHourglassHalf,faCalendarCheck, faMoneyCheckDollar, faHandMiddleFinger, faEye,faClapperboard} from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
// library.add(faUserSecret);
library.add(faTwitter, faInstagram, faTiktok, 
    faSpotify, faYoutube,faCircleUser,
    faRightToBracket, faMagnifyingGlass, 
    faHeart, faEyeSlash, faStar,
    faBookmark, faTrash, faSquareMinus,
    faClock, faHourglassHalf,faCalendarCheck,
    faMoneyCheckDollar, faHandMiddleFinger,faEye,faClapperboard);


// .component('font-awesome-icon', FontAwesomeIcon)
// .mount('#app')


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use( VueSplide ).use(router).mount('#app')

