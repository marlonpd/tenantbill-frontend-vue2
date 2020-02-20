<template>
  <footer>
    <div class="container">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }"> 
      </router-link>
      <span class="attribution">
        Ans interactive learning project froms
        <a rel="noopener noreferrer" target="blank" href="https://thinkster.io"
          ></a
        >. Code &amp; design licensed under MIT.
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection"
};
</script>
