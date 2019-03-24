import Vue from 'vue'
/* eslint-disable */
import ValidateMixin from 'quasar/src/mixins/validate.js'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
    name: 'QForm',
    props: {
        c: { required: true },
    },
    render(h) {
        console.log(this.$attrs);
        console.log(this.c);
        return h(this.c.type);
    }
})