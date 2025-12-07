<template>
  <div>
    <Mycarousel />
    <ServicesSeparator />
    <CardsSection />
  </div>
</template>

<script>
import Mycarousel from '../components/MySection.vue'
import ServicesSeparator from '../components/ServicesSeparator.vue'
import CardsSection from '../components/CardsSection.vue'

export default {
  name: 'HomeView',
  components: {
    Mycarousel,
    ServicesSeparator,
    CardsSection
  }
}
</script>
