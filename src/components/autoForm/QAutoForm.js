import Vue from 'vue'

import ValidateMixin from 'quasar/src/mixins/validate.js'
// mport { mapState } from 'vuex'

export default Vue.extend({
    name: 'QAutoForm',
    mixins: [ValidateMixin],
    props: {
        item: { required: true },
    },
    render(h) {
        console.log(this.$attrs);
        console.log(this.item);
        console.log(this.$store)
        let properties = Object.assign({}, this.item.properties);
        let slot = this.item.slots || this.$slots.default
        if (this.item.childrens) {
            let childrens = this.item.childrens.map(e => {
                let s = {
                    props: {
                        item: e
                    }
                }
                return h('QAutoForm', s)
            })
            return h(this.item.type, properties, childrens);
        } else {
            return h(this.item.type, properties, slot);
        }




    }
})