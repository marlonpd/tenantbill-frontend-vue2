<template>
    <div class="container">
        <div  class="row m-auto">
           Power Rates
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_TENANTS } from "@/store/actions.type";

export default {
  name: "PowerRates",
  data() {
    return {
    };
  },
  mounted() {
    this.fetchTenants();
  },
  methods: {
    fetchTenants() {
      this.$store.dispatch(FETCH_TENANTS);
    }
  },
  computed: {
    ...mapGetters(['allTenats']),
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
