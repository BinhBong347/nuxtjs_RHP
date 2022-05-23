<template>
  <div id="root">
    <button @click="title = 'Change after click!'">click</button>
    <HomePage :title="title" @changeTitle="handleChangTitle" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'Title of index',
    }
  },
  methods: {
    // hàm dưới này là custom event
    handleChangTitle(e) {
      this.title = 'Thay doi tu componen con click'
      console.log(e)
    },
  },
}
</script>
