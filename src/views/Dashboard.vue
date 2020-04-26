<template>
    <div class="container">
        <div  class="row m-auto">
            <ul class="tenants-table">
                <li v-for="(tenant, index) in allTenats" :name="tenant" :key="index">
                    {{tenant.name}}
                </li>
            </ul>    
        </div>
        <div class="fixed-bottom w-100" style="width:100%;">
          <div class="container">
              <div>
                <v-create-tenant v-if="isCreateNewTenant"></v-create-tenant>
              </div>
              <button v-if="!isCreateNewTenant" type="button" class="btn btn-primary btn-add-new" @click="toggleCreateNewTenant()">Add New</button>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_TENANTS, CREATE_NEW_TENANT, GET_IS_CREATE_NEW_TENANT } from "@/store/actions.type";
import VCreateTenant from "../components/tenant/create/create.vue";

export default {
  name: "Dashboard",
  data() {
    return {
    };
  },
  mounted() {
    this.getIsCreateNewTenant();
    this.fetchTenants();
  },
  methods: {
    fetchTenants() {
      this.$store.dispatch(FETCH_TENANTS);
      
    },
    getIsCreateNewTenant() {
      this.$store.dispatch(GET_IS_CREATE_NEW_TENANT);
    },
    toggleCreateNewTenant() {
      this.$store.dispatch(CREATE_NEW_TENANT);
    },
  },
  computed: {
    ...mapGetters(['allTenats', 'isCreateNewTenant']),
  },
  components: { 
    VCreateTenant
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
