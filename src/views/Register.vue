<template>
    <div class="container">
        <div id="formContent" class="m-auto">
            <!-- Tabs Titles -->
            <!-- Icon -->
            <div class="fadeIn first m-6">
                <h4>Create Account</h4>
                <ul v-if="errors" class="error-messages">
                  <li >{{errors}}</li>
                </ul>
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
                    id="username" 
                    class="fadeIn second" 
                    name="username" 
                    v-model="username"
                    placeholder="username"
                />
                <input 
                    type="password" 
                    id="password" 
                    class="fadeIn third" 
                    name="password" 
                    v-model="password"
                    placeholder="password"
                />
                <input 
                    type="password" 
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
import { mapState, mapGetters } from "vuex";
import { REGISTER } from "@/store/actions.type";

export default {
  name: "Register",
  data() {
    return {
      email: null,
      username: null,
      password: null,
      password1: null  
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    }),
    ...mapGetters(["isSuccessRegistration"])
  },
  watch: {
    isSuccessRegistration() {
        const self = this;
        if (this.isSuccessRegistration) {
            this.flashMessage.show({
                status: 'success',
                title: 'Success!',
                message: 'Successfully created an account!'
            });
            setTimeout(function(){ 
                self.$router.push({
                    name: 'login'
                });
            }, 3000);
        }
    }
  },
  methods: {
    onSubmit() {
        if (this.password !== this.password1) {
            this.flashMessage.show({
                status: 'error',
                title: 'Error!',
                message: 'Password did not match!'
            });

            return;
        }

        this.$store
            .dispatch(REGISTER, {
                email: this.email,
                username: this.username,
                password: this.password
            })
            .then(({response}) => 
                this.flashMessage.show({
                    status: 'success',
                    title: 'Success!',
                    message: response.message
                })
            );
    }
  }
};
</script>

<style >


</style>
