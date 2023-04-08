import {Vue, createComponent} from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.export = createComponent;
Vue.use(BootstrapVue)



// You might be able to import Vue and createComponent first, 
// and then set Vue.export = createComponent, 
// and then import the 3rd party libraries (like PortalVue, BootstrapVue, etc).