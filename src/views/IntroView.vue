<template>
  <div class="bg-black-dark h-100 align-middle intro-div">
    <div
      class="row intro-div justify-content-center justify-center align-middle"
    >
      <TheLetter
        v-for="letter in letters"
        :key="letter.letter"
        :letter="letter.letter"
        :time="letter.time"
        class="col-auto letter-element"
      ></TheLetter>
    </div>
    <div class="row col-12">
      
        <div class="col-8 offset-2 intro-shadow mt-5 fade-in"></div>
    </div>
  </div>
</template>

<script>
import TheLetter from "@/components/intro/TheLetter.vue";
export default {
  name: "IntroView",
  data() {
    return {
      time: 4000,
      delayFinish: false,
      letters: [
        { letter: "S", time: 100 },
        { letter: "T", time: 200 },
        { letter: "R", time: 300 },
        { letter: "E", time: 400 },
        { letter: "A", time: 500 },
        { letter: "M", time: 600 },
        { letter: "-", time: 700 },
        { letter: "S", time: 800 },
        { letter: "E", time: 900 },
        { letter: "A", time: 1000 },
        { letter: "R", time: 1100 },
        { letter: "C", time: 1200 },
        { letter: "H", time: 1300 },
      ],
    };
  },
  components: {
    TheLetter,
  },
  // created:{
  //   // this.$router.push('/users/eduardo');
  // },
  // methods:{
  //       // $router.push('/dashboard')
  // }
  mounted() {
    // const sound = ( new Audio( require('@/assets/sounds/stream-search_intro.mp3') ) );
    // sound.play();
    const myTimeout = setTimeout(this.toggleDelayFinish, this.time);

    return myTimeout;
  },
  methods: {
    toggleDelayFinish() {
      this.delayFinish = true;
      this.goHome();
    },
    goHome() {
      this.$router.push('/home')
    },
  },
};
</script>

<style scoped>
.intro-div {
  /* position: absolute; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 20%;
  margin-bottom: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  /* padding-top: 25%; */
}
.letter-element {
  position: relative;
  z-index: 1;
}
.btn-intro:hover {
  background-color: antiquewhite !important;
  color: rgb(255, 0, 68) !important;
  font-weight: bold;
  transform: scale(1.1);
  transition: all 0.3s;
}
.intro-shadow {
  border-radius: 50%;
  height: 75px;
  filter: blur(1.5rem);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(7, 7, 7, 1) 100%
  );
}
.fade-in {
	opacity: 0.3;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 2.5s;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
  20%{
    opacity: 0;
  }
	100% {
		opacity: 0.3;
	}
}
</style>