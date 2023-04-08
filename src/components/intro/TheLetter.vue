<template>
  <transition
    leave-active-class="animate__animated animate__bounceOut"
    enter-active-class="animate__animated animate__fadeInRight"
    mode="out-in"
    appear
  >
    <div class="txt display-1 col-auto m-0 p-0" v-if="delayFinish == true">{{ letter }}</div>
    <!-- <div v-else class="header-text-shadow display-1 col-auto m-0 p-0 transparent">{{ letter }}</div> -->
    <div v-else class="display-1 col-auto m-0 p-0 transparent">{{ letter }}</div>
  </transition>
</template>

<script>
export default {
  name: "TheLetter",
  data(){
    return{
      delayFinish: false,
    }
    
  },
  props: {
    letter: String,
    time: Number,
  },
  mounted(){
    const myTimeout = setTimeout(this.toggleDelayFinish, this.time);
    return myTimeout;
  },
  methods:{
    toggleDelayFinish(){
      this.delayFinish = true;
    }
  }
};
</script>

<style scoped>
.header-text-shadow {
  /* color: #ff89a7 !important; */
  text-shadow: 0px 0px 15px #da0037;
  -webkit-text-stroke: 2px #ff1e56;
  
}
.header-text-shadow.display-1 {
    color: #da0037 !important;

  /* color: #ff89a7 !important; */
  text-shadow: 0px 0px 20px #ff0000;
  -webkit-text-stroke: 3px #ff1e56;
  font-weight: 600;
}
.txt{
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
  color: white !important;
  border: none !important;
  -webkit-text-stroke: none !important;
  outline: none !important;
    /* font-weight: 400; */

}
.transparent{
  opacity: 0 !important;
}
</style>