<template>
  <div id="app">
    <HeaderSection />
    <router-view></router-view>
    <FlashMessage ></FlashMessage>
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";

export default {
  name: 'App',
  components: {
    HeaderSection,
    FooterSection
  }
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
