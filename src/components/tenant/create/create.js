
import { ADD_NEW_TENANT } from "@/store/actions.type";

export default {
    data() {
      return {
            name : '',
            meterNumber: '',
            meterInitialReading: 0,
            isCreateNewTenant: false,
      }
    },
    methods: {
        toggleCreateNewTenant() {
            this.isCreateNewTenant = !this.isCreateNewTenant;
        },
        onSubmit() {

            if (this.name === '' || this.meterNumber === '' || this.meterInitialReading === '') {
                this.flashMessage.show({
                    status: 'error',
                    title: 'Error!',
                    message: 'Please fill all the field.'
                });
    
                return;
            }
    
            this.$store
                .dispatch(ADD_NEW_TENANT, {
                    name: this.name,
                    meterNumber: this.meterNumber,
                    meterInitialReading: this.meterInitialReading,
                })
                .then(({response}) => {
                    this.toggleCreateNewTenant();
                    console.log(response);    
                    this.flashMessage.show({
                        status: 'success',
                        title: 'Success!',
                    //    message: response.message
                    })
                });
        }
    },
    computed: {
       
    },
}