<template>
  <div id="app">
    <router-view />
    <NotificationList />
    <!-- <audio id="foobar" src="require('@/assets/sounds/stream-search_intro.mp3" preload="auto" />  -->
  </div>
</template>

<script>
import NotificationList from "@/components/notifications/NotificationList.vue";
export default {
  components: {
    NotificationList,
  },
  data() {
    return {
      sound: 0,
    };
  },
  mounted() {
    this.$store.dispatch("loadUser");
    this.$store.dispatch("setMovies");
    // var sample = document.getElementById("foobar");
    // sample.play();
    // var audio = new Audio(require('@/assets/sounds/stream-search_intro.mp3'))
    // if(audio){
    //   audio.muted = true
    //   audio.play()
    // }
    // var audio = new Audio(require('@/assets/sounds/stream-search_intro.mp3'))
    // window.addEventListener('mousemove', () => {

    //   if(this.sound == 0){

    //     audio.play();
    //   }
    //   this.sound++;
    // });
        
const myTimeout = setTimeout(this.startSound, 1000);
    return myTimeout;
  },
  methods:{
    startSound(){
var audio = new Audio(require('@/assets/sounds/stream-search_intro.mp3'))
        audio.play();
    }
    
  }
};
</script>

<style>
@import "~animate.css/animate.min.css";
@import "bootstrap/dist/css/bootstrap.css";
@import "bootstrap-vue/dist/bootstrap-vue.css";
#foobar {
  display: none;
}

.text-colorful {
  color: #da0037 !important;
}
.text-dark {
  color: #171717 !important;
}
.text-light {
  color: #ededed !important;
}
.bg-colorful {
  background-color: #da0037 !important;
}
.bc-colorful {
  border-color: #da0037;
}
.bg-grey {
  background-color: #252525 !important;
}
.bg-light {
  background-color: #ededed !important;
}
.bg-black {
  background-color: #131313 !important;
}
.bg-black-dark {
  background-color: #070707 !important;
}
.bg-transparent {
  background-color: rgba(0, 0, 0, 0.9) !important;
}
.img-cover {
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.7);
}
.img-cover:hover {
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0);
}
.monospace {
  font-family: devonshire;
}
.stream-logo {
  width: 25px;
  height: 25px;
  outline: solid 3px #252525;
}
.stream-logo:hover {
  transform: scale(1.1);
  outline: solid 3px #404040;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.7);
}
.grow-scale {
  outline: solid 0px #ff3a6b;
  transform: scale(0.8);
}
.grow-scale:hover {
  outline: solid 1px #ff3a6b;
  box-shadow: 0px 0px 10px 5px #da0037 !important;
  transform: scale(0.95);
  transition: all 0.5s ease;
  /* z-index: -1; */
}
.header-shadow {
  box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.7);
}
.header-text-shadow {
  color: #ff89a7 !important;
  text-shadow: 0px 0px 15px #da0037;
  -webkit-text-stroke: 2px #ff1e56;
}
.header-text-shadow.display-1 {
  color: #ff89a7 !important;
  text-shadow: 0px 0px 44px #da0037;
  -webkit-text-stroke: 3px #ff1e56;
  font-weight: 600;
}
.category {
  border-radius: 20px !important;
}
@font-face {
  font-family: devonshire;
  src: url(@/assets/fonts/Devonshire-Regular.ttf);
}
</style>
