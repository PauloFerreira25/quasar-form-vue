import Vue from 'vue'

import ValidateMixin from 'quasar/src/mixins/validate.js'
// import { store } from 'vuex'

export default Vue.extend({
    name: 'QAutoForm',
    mixins: [ValidateMixin],
    props: {
        myProp: { required: true },
    },
    render(h) {
        console.log(this.$attrs);
        console.log(this.myProp);
        console.log(this.$store)

        if (this.myProp.childrens) {
            let childrens = this.myProp.childrens.map(e => {
                let s = {
                    props: {
                        myProp: e
                    }
                }
                return h('QAutoForm', s)
            })
            return h(this.myProp.type, { props: { value: this.$store.state.user.temp.name } }, childrens);
        } else {
            return h(this.myProp.type, { props: { value: this.$store.state.user.temp.name } });
        }




    }
})