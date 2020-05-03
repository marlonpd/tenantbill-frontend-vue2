<template>
    <div class="container">
        <div id="formContent" class="mx-auto">
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="fadeIn first m-6">
                <h4>Welcome</h4>
                <ul v-if="errors" class="error-messages">
                  <li v-for="(v, k) in errors" :key="k"> {{ v | error }}</li>
                </ul>
            </div>

            <!-- Login Form -->
            <form @submit.prevent="onSubmit">
              <input type="text" id="email" class="fadeIn second" v-model="email" name="email" placeholder="email">
              <input type="password" id="password" class="fadeIn third" v-model="password" name="password" placeholder="password">
              <input type="submit" class="fadeIn fourth" value="Log In">
            </form>

            <!-- Remind Passowrd -->
            <div id="formFooter">
              <p class="text-xs-center">
                <router-link :to="{ name: 'register' }">
                  Need an account?
                </router-link>
              </p>
              <a class="underlineHover" href="#">Forgot Password?</a>
            </div>

        </div>
    </div>
</template>


<script>
import { mapState } from "vuex";
import { LOGIN } from "@/store/actions.type";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    onSubmit() {
        if (this.email ===  '' || this.password === '') {
            this.flashMessage.show({
                status: 'error',
                title: 'Error!',
                message: 'Please fill!'
            });

            return;
        }

        this.$store
            .dispatch(LOGIN, {
                username: this.email,
                password: this.password
            })
            .then(() => this.$router.push({ name: "dashboard" }));
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>

<style >
.error-messages {
  -webkit-padding-start: 0;
  list-style-type: none;
  color: red;
}

</style>
