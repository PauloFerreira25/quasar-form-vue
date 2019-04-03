import Vue from 'vue'

import ValidateMixin from 'quasar/src/mixins/validate.js'
import { isArray } from 'util';
import { setObjectValueByStringNameTree } from '../../utils/objectHack'

export default Vue.extend({
    name: 'QAutoForm',
    mixins: [ValidateMixin],
    props: {
        item: { required: true },
    },
    methods: {
        eventHandler(eventName, handler, event) {
            console.debug({ eventName }, { handler }, { event })
            if (handler.store && handler.store.action) {
                let action = handler.store.action
                if (handler.store.module) {
                    action = handler.store.module + "/" + handler.store.action
                }
                let payload = event
                if (handler.store.state) {
                    payload = {
                        "state": this.item.store.state,
                        event
                    }
                }
                this.$store.dispatch(action, payload)
            }
        },
        i18n() {
            if (this.item.i18n.handler) {
                if (this.item.i18n.handler.t) {
                    setObjectValueByStringNameTree(this.item.i18n.handler.t.settext, this.item, this.$t(this.item.i18n.handler.t.gettext))
                }
            }

        }
    },
    render(h) {


        if (this.item.i18n) {
            this.i18n()
        }
        console.log(this.$attrs);
        console.log(this.item);
        console.log(this.$store)

        let properties = Object.assign({}, this.item.properties);
        if (this.item.store) {
            if (!this.item.store.module) {
                throw new Error('Configuração de Store requer um modulo!');
            }

            if (!this.item.store.state) {
                throw new Error('Configuração de Store requer um state!');
            }
            if (!properties.props) {
                properties.props = {}
            }
            properties.props['value'] = String(this.item.store.state).split('.')
                .reduce((p, c) => p && p[c] || null, this.$store.state[this.item.store.module])
        }
        if (this.item.event && isArray(this.item.event)) {
            if (!properties.on) {
                properties.on = {}
            }
            this.item.event.forEach(i => {
                properties.on[i.name] = (event) => this.eventHandler(i.name, i.handler, event)
            });
        } else {
            if (this.item.event)
                throw new Error('Configuração de event deve ser um Array!');
        }

        console.info({ properties })



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