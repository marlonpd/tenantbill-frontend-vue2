<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <p class="text-xs-center">
        <router-link :to="{ name: 'logout' }">
          logout
        </router-link>
      </p>
    </div>
  </nav>
</template>

<script>

export default {
  name: "HeaderSection"
};
</script>
