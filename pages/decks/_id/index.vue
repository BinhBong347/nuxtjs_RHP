
<template>
  <div>
    <h3>page params id: {{ $route.params }}</h3>
  </div>
</template>

<script>
export default {
  name: 'PageParamDeck',
  validate({ params }) {
    // eslint-disable-next-line no-console

    return /^[0-9]{9,12}$/.test(params.id)
  },
}
</script>
