<template>
  <div>
    <h1>Homepage</h1>
    <hr />
    <button @click="handleChange">change from HomePage</button>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    title: {
      type: String,
      default: 'No data',
    },
  },
  data() {
    return {}
  },
  methods: {
    handleChange() {
      console.log('Truoc khi custom chay')
      this.$emit('changeTitle', { data: 'Du Lieu' })
    },
  },
}
</script>

