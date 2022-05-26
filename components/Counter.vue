<template>
  <div>
    <button @click="increase">increase</button>
    <button @click="decrease">decrease</button>
  </div>
</template>

<script>
export default {
  name: 'PageCount',
  methods: {
    increase() {
      this.$emit('updated', 1)
    },
    decrease() {
      this.$emit('updated', -1)
    },
  },
}
</script>
