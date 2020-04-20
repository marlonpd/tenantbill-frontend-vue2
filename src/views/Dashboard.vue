<template>
    <div class="container">
        <div id="row" class="m-auto">
            <ul>
                <li v-for="(tenant, index) in allTenats" :name="tenant" :key="index">
                    {{tenant.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_TENANTS } from "@/store/actions.type";

export default {
  name: "Dashboard",
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
