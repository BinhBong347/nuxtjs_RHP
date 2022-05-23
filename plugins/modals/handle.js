import layout from './layout.vue'

const vModal = {
    install(Vue) {
        this.EvenBus = new Vue()

        Vue.component('v-modal', layout)

        Vue.prototype.$modal = {
            open(params) {
                vModal.EvenBus.$emit('open', params)
            },
            close(params) {
                vModal.EvenBus.$emit('close', params)
            }
        }
    }
}

export default vModal