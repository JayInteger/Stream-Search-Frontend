<template>
  <TheRegistrationLayout
    :leftColumnClass="'col-md-8 bg-dark text-light m-0 p-0'"
    :rightColumnClass="'col-md-4 bg-black-dark text-light'"
    :fullsize="true"
  >
    <template #leftCol>
      <div class="p-2 mt-5 text-center w-100">
        <div class="display-1 my-5 header-text-shadow">STREAMSEARCH</div>
        <div class="my-5 offset-4 col-4">
          <img src="@/assets/images/LoginScreen.png" class="img-fluid" />
        </div>
        <div class="display-5 my-5">
          Schluss mit endlosem Switchen in Ihren Streaming-Apps, finden Sie
          jederzeit den richtigen Stream in ihren Abos.
        </div>
        <div class="text-start w-100">
          <div class="text-center"> <h3><strong> Vorteile von STREAMSEARCH: </strong></h3></div> 
          <ul class="list-group p-0 m-0 not-rounded no-border">

            <li class="bg-colorful row p-5">
              <h4 class="text-center col-12 mb-5">
                Nur relevante Titel
              </h4>
              <div class="col-3 offset-3">
                Verschwenden Sie keine Zeit sich durch immer die gleichen Filme zu klicken, die Sie garnicht schauen können.
              </div>
              <div class="col-3 text-center">
              <font-awesome-icon icon="fa-solid fa-eye" class="fa-3x m-2" />
              <font-awesome-icon icon="fa-solid fa-money-check-dollar" class="fa-3x m-2" />
              <font-awesome-icon icon="fa-solid fa-hand-middle-finger" class="fa-3x m-2" />
              </div>
            </li>

            <li class="bg-dark text-light row p-5">
              <h4 class="text-center col-12 mb-5">Favoritenliste</h4>
              <div class="col-3 offset-3">Speichere noch heute deine Filme und schaue sie, wenn es dir passt. </div>
              <div class="col-3 text-center">
                <font-awesome-icon icon="fa-solid fa-heart" class="fa-3x m-2" />
                <font-awesome-icon icon="fa-solid fa-star" class="fa-3x m-2" />
                <font-awesome-icon icon="fa-solid fa-bookmark" class="fa-3x m-2" />
                
                </div>
            </li>

            <li class="bg-colorful row p-5">
              <h4 class="text-center col-12 mb-5">
                Ausblenden schon gesehener Filme
              </h4>
              <div class="col-3 offset-3">
                Immer wieder die selben Vorschläge? Nicht bei Uns!
              </div>
              <div class="col-3 text-center">
              <font-awesome-icon icon="fa-solid fa-eye-slash" class="fa-3x m-2" />
              <font-awesome-icon icon="fa-solid fa-square-minus" class="fa-3x m-2" />
              <font-awesome-icon icon="fa-solid fa-trash" class="fa-3x m-2" />
              </div>
            </li>

            <li class="bg-dark text-light row p-5">
              <h4 class="text-center col-12 mb-5">Mehr Film geht nicht</h4>
              <div class="col-3 offset-3">Weniger Zeit zum Suchen bedeutet für Sie gleichzeitig mehr Zeit um Filme zu schauen</div>
              <div class="col-3 text-center">
                <font-awesome-icon icon="fa-solid fa-clock" class="fa-3x m-2" />
                <font-awesome-icon icon="fa-solid fa-hourglass-half" class="fa-3x m-2" />
                <font-awesome-icon icon="fa-solid fa-calendar-check" class="fa-3x m-2" />
                
                </div>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <template #rightCol>
      <!-- <RegisterNow /> -->
      <transition
      class= "relative" 
        enter-active-class="animate__animated animate__bounceInRight"
        leave-active-class="animate__animated animate__bounceOutRight"
        mode="out-in"
      >
        <component 
          :is="componentName"
          @change-component="changeComponent"
        ></component>
      </transition>
    </template>
  </TheRegistrationLayout>
</template>

<script>
import TheRegistrationLayout from "@/layouts/TheRegistrationLayout.vue";
import LogIn from "@/components/auth/LogIn.vue";
import RegisterNow from "@/components/auth/RegisterNow.vue";
export default {
  name: "LoginUserView",
  components: {
    TheRegistrationLayout,
    LogIn,
    RegisterNow,
  },
  data() {
    return {
      componentName: "register-now",
    };
  },
  methods: {
    changeComponent(payload) {
      this.componentName = payload.componentName;
    },
  },
};
</script>

<style scoped>
.relative {
  position: fixed;
}
.no-border {
  bottom: none !important;
}
.not-rounded {
  border-radius: 0px !important;
}
</style>