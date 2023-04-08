<template>
  <div class="">
    <div class="my-5 text-center offset-2 col-8 ">
      <img src="@/assets/images/login.svg" class="img-fluid" />
    </div>
    <div class="text-center">
      <h2>Jetzt Anmelden</h2>
      <p>
        oder
        <a
          class="text-colorful"
          role="button"
          @click="changeComponent('register-now')"
          >Oder erstellen sie ein Konto.</a
        >
      </p>
    </div>
    <div class="alert alert-danger col-md-8 offset-2" v-if="error">
      {{ errorDisplayText }}
    </div>
    <Form @submit="submitData" :validation-schema="schema" v-slot="{ errors }">
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="email"><strong>Email Adresse</strong></label>
          <Field
            as="input"
            name="email"
            type="email"
            class="form-control"
            id="email"
          />
          <small class="text-danger" v-if="errors.email">{{
            errors.email
          }}</small>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="password"><strong>Passwort</strong></label>
          <Field
            as="input"
            name="password"
            type="password"
            class="form-control"
            id="password"
          />
          <small class="text-danger" v-if="errors.password">{{
            errors.password
          }}</small>
        </div>
      </div>

      <div class="form-row mt-3">
        <div class="form-group col-md-8 offset-2">
          <div class="d-grid">
            <button class="btn bg-colorful">
              <span v-if="!isLoading">Einloggen</span>
              <span v-else class="spinner-border spinner-border-sm"> </span>
            </button>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";

export default {
  name: "LogIn",
  components: {
    Form,
    Field,
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("E-Mail Adresse wird benötigt")
        .trim()
        .email("Keine gültige E-Mail-Adresse!"),
      password: yup
        .string()
        .required("Password wird benötigt")
        .min(6, "Das Passwort muss mindestens 6 Zeichen lang sein."),
    });
    return {
      schema,
      error: "",
      isLoading: false,
    };
  },
  computed: {
      errorDisplayText(){
        if(this.error){
          if(this.error.includes("INVALID_PASSWORD")){
            return "Das Passwort ist ungültig"
          } else if(this.error.includes("EMAIL_NOT_FOUND")){
            return "Email nicht gefunden.";
          }
          return "Es ist ein unbekannter Fehler aufgetreten. Bitte versuchen sie es erneut oder wenden sie sich an den Support.";

        }
        return "";
      }
    },
  emits: {
    "change-component": (payload) => {
      if (payload.componentName !== "register-now") {
        return false;
      }
      return true;
    },
  },
  methods: {

    changeComponent(componentName) {
      this.$emit("change-component", { componentName });
    },
    submitData(values){
        this.isLoading = true;
        this.error="";
        this.$store.dispatch("signin", { //dispatch ruft die action auf
          email:values.email,
          password:values.password,
          loggedIn : true,
        }).then(() => {
          this.isLoading = false;
          console.log("login erfolgreich");
          //Weiterleitung zum internen bereich.
          // this.$router.push('/shop');
          console.log(this.$store.state);
          this.$router.push({
            path: "/shop",
          });
          // this.changeComponent("log-in")
        }).catch((error)=>{
          this.error = error.message;
          this.isLoading=false;
        })   
      },
  },
};
</script>

<style scoped>
</style>