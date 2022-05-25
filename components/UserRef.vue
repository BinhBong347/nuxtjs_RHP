<template>
  <div>
    <h1>Demo REF</h1>
    <div>
      <h2>Input type File ( set image )</h2>
      <button class="set-avatar" @click="handleClickInput">Set Avata</button>
      <input ref="input_avatar" type="file" style="display: none" />
    </div>
    <div>
      <h2>Input type File ( set Dropdoww )</h2>
      <button class="set-avatar" @click="handleListJob">List Job</button>
      <select ref="list_job" style="display: none">
        <option value="1">ABC</option>
        <option value="2">A123</option>
        <option value="3">ABC</option>
        <option value="4">ABC</option>
        <option value="5">ABC</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClickInput() {
      this.$refs.input_avatar.click()
    },
    handleListJob() {
      this.$refs.list_job.click()
    },
  },
}
</script>
<style scoped>
.set-avatar {
  font-size: 1.4rem;
  padding: 7px;
  outline: none;
  border: none;
  background: black;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
/* stylelint-disable-next-line */
.set-avatar:hover {
  background: blue;
}
</style>
