<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
        <img src="@/assets/images/register.svg" class="img-fluid">
    </div>
    <div class="text-center">
      <h2>Jetzt Registrieren</h2>
      <p>oder <a class="text-colorful" role="button" @click="changeComponent('log-in')">Melden sie sich mit ihrem Konto an.</a></p>
    </div>
    
      <div class="alert alert-danger col-md-8 offset-2" v-if="error">
        {{errorDisplayText}}
      </div>
    <Form @submit="submitData" :validation-schema="schema" v-slot="{errors}">
      
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="email"><strong>Email Adresse</strong></label>
          <Field as="input" name="email" type="email" class="form-control" id="email" />
          <small class="text-danger" v-if="errors.email">{{errors.email}}</small>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="password"><strong>Passwort</strong></label>
          <Field as="input" name="password" type="password" class="form-control" id="password" />
                    <small class="text-danger" v-if="errors.password">{{errors.password}}</small>

        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="confirmPassword"><strong>Passwort wiederholen</strong></label>
          <Field as="input" name="confirmPassword" type="password" class="form-control" id="confirmPassword" />
                    <small class="text-danger" v-if="errors.confirmPassword">{{errors.confirmPassword}}</small>

        </div>
      </div>

      <div class="form-row mt-3">
        <div class="form-group col-md-8 offset-2">
          <div class="d-grid">
            <button class="btn bg-colorful text-light ">
              <span v-if="!isLoading">Registrieren</span>
              <span v-else class="spinner-border spinner-border-sm"> </span>
              </button>
          </div>
          
        </div>
      </div>

    </Form>
  </div>
</template>

<script>
import {Form,Field} from "vee-validate";
import * as yup from "yup";

export default {
    name: "RegisterNow",
    components:{
      Form,
      Field,
    },
    data(){
      const schema = yup.object().shape({
        email: yup.string().required("E-Mail Adresse wird benötigt").trim().email("Keine gültige E-Mail-Adresse"),
        password: yup.string().required("Password wird benötigt").min(6, "Das Passwort muss mindestens 6 Zeichen lang sein."),
        confirmPassword: yup.string().oneOf([yup.ref("password")],"Passwörter stimmen nicht überein!"),
      });
      return {
        schema,
        error:"",
        isLoading: false,
      };
    },
    computed: {
      errorDisplayText(){
        if(this.error){
          if(this.error.includes("EMAIL_EXISTS")){
            return "Die E-Mail-Adresse existiert bereits."
          }
          return "Es ist ein unbekannter Fehler aufgetreten. Bitte versuchen sie es erneut oder wenden sie sich an den Support.";

        }
        return "";
      }
    },
    emits:{
      'change-component': (payload)=>{
        if(payload.componentName !== "log-in"){
          return false;
        }
        return true;
      }
    },
    methods:{
      submitData(values){
        this.isLoading = true;
        this.error="";
        this.$store.dispatch("signup", { //dispatch ruft die action auf
          email:values.email,
          password:values.password,
        }).then(() => {
          this.isLoading = false;
          this.changeComponent("log-in")
        }).catch((error)=>{
          this.error = error.message;
          this.isLoading=false;
        })   
        
      },
      changeComponent(componentName){
        this.$emit("change-component", {componentName});
      }
    }
}
</script>

<style scoped>

</style>