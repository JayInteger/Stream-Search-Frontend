import { createStore } from 'vuex'
import userModule from "@/store/modules/user"
import authModule from "@/store/modules/auth"
import movieModule from '@/store/modules/movies'
import searchModule from "@/store/modules/search"
import notificationModule from "@/store/modules/notifications"
export default createStore({

  modules: {
    // foo{

    // },
    auth:authModule,
    user:userModule,
    movies:movieModule,
    search:searchModule,
    notifications:notificationModule,
  }
})
