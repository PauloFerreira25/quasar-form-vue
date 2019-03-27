import Vue from 'vue'

import ValidateMixin from 'quasar/src/mixins/validate.js'
// import { store } from 'vuex'

export default Vue.extend({
    name: 'QForm',
    mixins: [ValidateMixin],
    props: {
        c: { required: true },
    },
    render(h) {
        console.log(this.$attrs);
        console.log(this.c);
        console.log(this.$store)

        return h(this.c.type, { props: { value: this.$store.state.user.temp.name } });
    }
})