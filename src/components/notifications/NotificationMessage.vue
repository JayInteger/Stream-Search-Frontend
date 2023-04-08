<template>
  <transition
    leave-active-class="animate__animated animate__fadeOut"
    enter-active-class="animate__animated animate__fadeIn"
    mode="out-in"
    appear
  >
    <div class="my-alert rounded text-light" role="alert">
      <div class="alert-title">{{ notification.title }}</div>
      <hr>
      
        <div class="alert-type">{{ notification.type }}
          <span class="alert-target text-light">{{ notification.target }}</span>
        </div>
      
    </div>
  </transition>
</template>

<script>
export default {
  name: "NotificationMessage",
  data() {
    return {
      timeout: null,
    };
  },
  props: {
    notification: Object,
  },
  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification();
    }, 3000);
  },
  methods: {
    removeNotification() {
      this.$store.dispatch("removeNotification", this.notification.id);
    },
  },
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.my-alert{
    background-color: #252525;
    outline: solid 1px #ff3a6b;
    box-shadow: 0px 0px 10px 5px #da0037 !important;
    padding: 10px 15px 20px 15px;
    margin: 15px;
}
.alert-title{
  text-align: center;
  margin-bottom: 5px;
  font-size: large;
}
.alert-type{
  color: #da0037;
  font-weight: bolder;
}
.alert-target{
  font-weight: normal;
}
.my-alert hr{
  margin: 0px;
  border: solid 1px #ff3a6b;
}
</style>