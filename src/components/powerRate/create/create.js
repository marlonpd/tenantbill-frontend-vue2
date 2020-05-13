//import { mapGetters } from "vuex";
import { ADD_NEW_POWER_RATE } from "@/store/actions.type";

export default {
    data() {
      return {
            rate : 0,
            isAddNewPower: false,
      }
    },
    methods: {
        toggleAddNewPowerRate() {
            this.isAddNewPower = !this.isAddNewPower;
        },
        onSubmit() {
            if (this.rate <= 0) {
                this.flashMessage.show({
                    status: 'error',
                    title: 'Error!',
                    message: 'Enter power rate.'
                });
    
                return;
            }
    
            this.$store
                .dispatch(ADD_NEW_POWER_RATE, {
                    rate: this.rate,
                })
                .then(({response}) => {
                    this.toggleAddNewPowerRate();
                    this.flashMessage.show({
                        status: 'success',
                        title: 'Success!',
                        message: response
                    })
                });
        }
    },
    computed: {
    },
}