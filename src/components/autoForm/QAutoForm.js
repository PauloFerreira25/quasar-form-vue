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
        let conf = Object.assign({}, this.item.vconf);
        if (this.item.childrens) {
            let childrens = this.item.childrens.map(e => {
                let s = {
                    props: {
                        item: e
                    }
                }
                return h('QAutoForm', s)
            })
            return h(this.item.type, conf, childrens);
        } else {
            return h(this.item.type, conf);
        }




    }
})