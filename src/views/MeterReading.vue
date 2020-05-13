<template>
    <div class="container">
        <h3>Meter Reading</h3> 
        <h5>{{currentTenant.name}}</h5>
        <div  class="row m-auto">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Cover Period</th>
                    <th scope="col">Readings</th>
                    <th scope="col">Consumed Kwh</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Bill</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(reading, index) in allMeterReadings.slice(0, 10)" :name="reading" :key="index" >
                      <th scope="row">{{index+1}}</th>
                      <th scope="col">
                            From: {{reading.fromDate}}<br>
                            To  : {{reading.toDate}}
                      </th>
                      <th scope="col">
                          {{reading.previousReadingKwh}}<br>
                          {{reading.presentReadingKwh}}
                      </th>
                      <th scope="col">{{reading.consumedKwh}}</th>
                      <th scope="col">{{reading.ratePerKwh}}</th>
                      <th scope="col">{{reading.bill}}</th>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="fixed-bottom w-100" style="width:100%;">
          <div class="container">
                <v-add-meter-reading :tenant="currentTenant" :latestReading="latestReading" :powerRate="powerRate"></v-add-meter-reading>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_METER_READINGS, FETCH_TENANT, FETCH_POWER_RATE } from "@/store/actions.type";
import VAddMeterReading from "../components/meterReading/create/create.vue";

export default {
  name: "MeterReadings",
  data() {
    return {
      initMeterReading : {
        previousReadingDate : '',
        previousReadingKwh  : 0,
        ratePerKwh: 0
      },
      latestReading: null,
    };
  },
  mounted() {
    this.fetchTenant(this.$route.params.tenantId);
    this.fetchMeterReadings(this.$route.params.tenantId);
    this.fetchRatePerKwh();
  },
  methods: {
    fetchTenant(tenantId) {
      this.$store.dispatch(FETCH_TENANT, tenantId);
    },

    fetchMeterReadings(tenantId) {
      this.$store.dispatch(FETCH_METER_READINGS, tenantId);
    },

    fetchRatePerKwh() {
      this.$store.dispatch(FETCH_POWER_RATE);
    },
  },
  computed: {
    ...mapGetters(['allMeterReadings', 'currentTenant', 'powerRate']),
  },
  components: { 
    VAddMeterReading
  },
  watch: {
    allMeterReadings: function(meterReadings) {
      let readingCnt = Object.keys(meterReadings).length;
        
      if (readingCnt > 0) {
        this.latestReading = meterReadings[readingCnt-1];
      }
    } 
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
