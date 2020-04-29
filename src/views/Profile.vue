<template>
    <div class="container">
        <div  class="row m-auto">
           Profile
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
  computed: {
    ...mapGetters(['allTenats']),
  }
};
</script>

<style >

</style>
