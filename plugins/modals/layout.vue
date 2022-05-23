<template>
  <div modal="true">
    <div>
      <div :data-model="name" v-if="visible" class="modal">
        <div
          aria-modal="true"
          data-reach-dialog-content="true"
          tabindex="-1"
          class="modal_mask"
        >
          <div class="modal_body">
            <slot :payload="payload" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vModal from './handle'
export default {
  name: 'ModalPlugin',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      payload: null,
      visible: false,
    }
  },
  methods: {
    show(params) {
      this.visible = true
    },
    close(params) {
      this.visible = false
    },
  },
  beforeMount() {
    // open Modal
    vModal.EventBus.$on('open', (params) => {
      if (this.name === params.name) {
        this.show(params)
      }
    })
    // close Modal
    vModal.EventBus.$on('close', (params) => {
      if (this.name === params.name) {
        this.show(params)
      }
    })
  },
}
</script>

<style>
</style>