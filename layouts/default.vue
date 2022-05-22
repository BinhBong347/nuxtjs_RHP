<template>
  <div>
    <DefaultHeader />
    <Nuxt />
    <DefaultFooter />
  </div>
</template>

<script>
import DefaultHeader from '../components/Header/DefautHeader.vue'
import DefaultFooter from '@/components/Footer/DefaultFooter.vue'
export default {
  name: 'LayoutDefault',
  components: { DefaultHeader, DefaultFooter },
}
</script>