import { mapGetters } from "vuex";
import { CREATE_NEW_TENANT, ADD_NEW_TENANT } from "@/store/actions.type";

export default {
    data() {
      return {
            name : '',
      }
    },
    methods: {
        toggleCreateNewTenant() {
            this.$store.dispatch(CREATE_NEW_TENANT);
        },
        onSubmit() {
            console.log(this.name);
            if (this.name === '') {
                this.flashMessage.show({
                    status: 'error',
                    title: 'Error!',
                    message: 'Enter tenant name.'
                });
    
                return;
            }
    
            this.$store
                .dispatch(ADD_NEW_TENANT, {
                    name: this.name,

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
        ...mapGetters(['isCreateNewTenant']),
    },
}