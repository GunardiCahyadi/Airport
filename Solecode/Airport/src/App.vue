<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapState, mapActions } from 'pinia'
import Flight from './views/Flight.vue'

import { useCounterStore } from './stores/counter'
export default {
  components: {
    Flight
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchAirlinesData', 'fetchAirportData', 'fetchFlightData'])
  },
  created() {
    this.fetchAirlinesData()
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
    <h1>Airport</h1>
  </nav>

  <RouterView />
</template>

<style></style>
