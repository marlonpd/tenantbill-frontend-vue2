<template>
    <div class="container">
        <div id="formContent" class="m-auto">
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="fadeIn first m-6">
                <h4>Welcome</h4>
            </div>

            <!-- Login Form -->
            <form>
            <input type="text" id="email" class="fadeIn second" name="email" placeholder="email">
            <input type="text" id="password" class="fadeIn third" name="password" placeholder="password">
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
//import { LOGIN } from "@/store/actions.type";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
  
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>

<style >


</style>
