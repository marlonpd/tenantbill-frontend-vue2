<template>
    <div class="container">
        <div id="formContent" class="m-auto">
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="fadeIn first m-6">
                <h4>Create Account</h4>
                
            </div>

            <!-- Login Form -->
            <form @submit.prevent="onSubmit">
                <input 
                    type="text" 
                    id="email" 
                    class="fadeIn second" 
                    name="email" 
                    v-model="email"
                    placeholder="email"
                />
                <input 
                    type="text" 
                    id="password" 
                    class="fadeIn third" 
                    name="password" 
                    placeholder="password"
                />
                <input 
                    type="text" 
                    id="password1" 
                    class="fadeIn third" 
                    name="password1" 
                    v-model="password1"
                    placeholder="re-type password"
                />
                <input 
                    type="submit" 
                    class="fadeIn fourth" 
                    value="Register"
                />
            </form>

            <!-- Remind Passowrd -->
            <div id="formFooter">
                <p class="text-xs-center">
                    <router-link :to="{ name: 'login' }">
                    Already have an account?
                    </router-link>
                </p>
            </div>

        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
//import { REGISTER } from "@/store/actions.type";

export default {
  name: "Register",
  data() {
    return {
      email: null,
      password: null,
      password1: null  
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  },
  methods: {
    onSubmit() {
        this.flashMessage.show({
            status: 'error',
            title: 'Error Message Title',
            message: 'Oh, you broke my heart! Shame on you!'
        });

        /*this.$store
            .dispatch(REGISTER, {
            email: this.email,
            password: this.password,
            username: this.username
            })
            .then(() => this.$router.push({ name: "home" }));*/
    }
  }
};
</script>

<style >


</style>
