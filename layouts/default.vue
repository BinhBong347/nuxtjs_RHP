<template>
  <div>
    <DefaultHeader />
    <Nuxt />
  </div>
</template>

<script>
import DefaultHeader from '../components/Header/DefautHeader.vue'
export default {
  name: 'LayoutDefault',
  components: { DefaultHeader },
}
</script>