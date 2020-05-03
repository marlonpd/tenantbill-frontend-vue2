<template>
  <div id="app ">
    <div class="container">
    <HeaderSection v-if="isAuthenticated" />
    <FlashMessage ></FlashMessage>
    <router-view></router-view>
    <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import { mapGetters } from "vuex";

export default {
  name: 'App',
  components: {
    HeaderSection,
    FooterSection
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  },
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FF5F5F;
}

a {
  color: #FF5F5F;
}

.navbar-light {
  background: #56baed;
}


</style>
