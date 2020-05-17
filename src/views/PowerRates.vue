<template>
    <div class="container">
        <div  class="row m-auto">
          <h3>Rate Per KiloWatt</h3>
           <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" width=70% class="text-center">Rates</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(rate, index) in allPowerRates.slice(0, 10)" :name="rate" :key="index" >
                <th scope="row">{{index+1}}</th>
                <td class="text-center">
                  {{rate.rate}}
                </td>
                <td>{{rate.created}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="fixed-bottom w-100" style="width:100%;">
          <div class="container">
                <v-add-power-rate></v-add-power-rate>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_POWER_RATES } from "@/store/actions.type";
import VAddPowerRate from "../components/powerRate/create/create.vue";

export default {
  name: "PowerRates",
  data() {
    return {
    };
  },
  mounted() {
    this.fetchPowerRates();
  },
  methods: {
    fetchPowerRates() {
      this.$store.dispatch(FETCH_POWER_RATES);
    }
  },
  computed: {
    ...mapGetters(['allPowerRates']),
  },
  components: { 
    VAddPowerRate
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
