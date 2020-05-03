<template>
    <div class="container">
        <div  class="row m-auto">
          <div class="tenants-container">
              <div  class="row m-auto">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Meter Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(tenant, index) in allTenats" :name="tenant" :key="index">
                          <th scope="row">{{index+1}}</th>
                          <td>
                            <router-link :to="{ name: 'meter.reading', params:{ tenantId:tenant.id } }">
                              {{tenant.name}}
                            </router-link>
                          </td>
                          <td>{{tenant.meterNumber}}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
             
          </div>
        </div>
        <div class="fixed-bottom w-100" style="width:100%;">
          <div class="container">
                <v-create-tenant></v-create-tenant>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_TENANTS, CREATE_NEW_TENANT } from "@/store/actions.type";
import VCreateTenant from "../components/tenant/create/create.vue";

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
    },
    toggleCreateNewTenant() {
      this.$store.dispatch(CREATE_NEW_TENANT);
    },
  },
  computed: {
    ...mapGetters(['allTenats']),
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
