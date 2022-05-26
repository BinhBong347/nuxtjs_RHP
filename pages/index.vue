<template>
  <div id="root">
    <button @click="title = 'Change after click!'">click</button>
    <HomePage :title="title" @changeTitle="handleChangTitle" />
    <br />
    <div>
      <Counter @updated="result += $event" />
      <h1>Result: {{ result }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'Title of index',
      result: 0,
    }
  },
  methods: {
    // hàm dưới này là custom event
    handleChangTitle(e) {
      this.title = 'Thay doi tu componen con click'
      // eslint-disable-next-line no-console
      console.log(e)
    },

    // updated(data) {
    //   this.result += data
    // },
  },
}
</script>
