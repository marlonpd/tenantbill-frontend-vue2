import { ADD_NEW_METER_READING } from "@/store/actions.type";
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';

export default {

    props: ['tenant', 'latestReading'],

    data() {
      return {
            rate : 0,
            showHideForm : false,
            previousReadingDate : '',
            previousReading : 0,
            currentReadingDate : '', 
            currentReading : 0,
            ratePerKwh : 0
      }
    },

    methods: {
        toggleShowHideForm() {
            this.showHideForm = !this.showHideForm;

            this.currentReadingDate = ''; 
            this.currentReading = 0;

            if (this.showHideForm && this.latestReading !== null) {
                this.previousReadingDate = this.latestReading.toDate;
                this.previousReading = this.latestReading.presentReadingKwh;
                this.ratePerKwh = this.latestReading.ratePerKwh;

                return;
            }

            if (this.showHideForm && this.tenant !== null) {
                this.previousReadingDate = this.tenant.created;
                this.previousReading = this.tenant.meterInitialReading;
                this.ratePerKwh = this.tenant.ratePerKwh;
            }
        },

        mounted() {

        },
        
        onSubmit() {
            if (this.totalBill <= 0) {
                this.flashMessage.show({
                    status: 'error',
                    title: 'Error!',
                    message: 'Enter power rate.'
                });
    
                return;
            }
    
            this.$store
                .dispatch(ADD_NEW_METER_READING, {
                    tenantId            : this.tenant.id,
                    previousReadingDate : this.previousReadingDate, 
                    previousReading     : this.previousReading,
                    presentReadingDate  : moment(this.currentReadingDate).format('L'), 
                    presentReading      : this.currentReading,
                    ratePerKwh          : this.ratePerKwh,
                    consumedKwh         : this.consumedKwh,
                    totalBill           : this.totalBill
                })
                .then(({response}) => {
                    this.toggleShowHideForm();
                    this.flashMessage.show({
                        status: 'success',
                        title: 'Success!',
                        message: response
                    })
                });
        },

        customFormatter(date) {
            return moment(date).format('L');
        }
    }, 

    computed: {
        totalBill: function() {
            return (this.currentReading - this.previousReading) * this.ratePerKwh;
        },

        consumedKwh: function() {
            return this.currentReading - this.previousReading;
        }

    },

    components: {
        Datepicker
    }
}