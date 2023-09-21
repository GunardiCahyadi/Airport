<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  computed: {
    ...mapState(useCounterStore, ['airlinesData', 'airportData', 'flightData'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchAirlinesData', 'fetchAirportData', 'fetchFlightData']),
    formatTime(dateTime) {
      const date = new Date(dateTime)
      const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      return formattedTime
    },
    formatDate(dateTime) {
      const date = new Date(dateTime)
      const options = { month: 'long', day: 'numeric' }
      const formattedDate = date.toLocaleDateString([], options)
      return formattedDate
    }
  },
  created() {
    this.fetchAirlinesData()
    this.fetchAirportData()
    this.fetchFlightData()
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="card" v-for="flight in flightData" :key="flight.id">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-md-3 px-3">
            <h5 v-if="flight.airlines === 'GA'">Garuda Indonesia</h5>
            <h5 v-if="flight.airlines === 'SQ'">Singapore Airlines</h5>
            <h5 v-if="flight.airlines === 'QZ'">Air Asia Indonesia</h5>
          </div>
          <div class="col-md-3 px-3">
            <h5 v-if="flight.departure_airport === 'CGK'">Jakarta</h5>
            <h5>{{ formatTime(flight.departure_time) }}</h5>
            <h5>{{ formatDate(flight.departure_time) }}</h5>
          </div>
          <div class="col-md-2 text-center px-3">
            <img
              style="height: 50px"
              src="https://cdn.pixabay.com/photo/2014/04/03/09/56/airplane-309386_1280.png"
              alt="icon pesawat"
            />
          </div>
          <div class="col-md-3 px-3">
            <h5 v-if="flight.arival_airport === 'SIN'">Singapore</h5>
            <h5 v-if="flight.arival_airport === 'DPS'">Denpasar</h5>
            <h5 v-if="flight.arival_airport === 'YIA'">Yogyakarta</h5>
            <h5>{{ formatTime(flight.arival_time) }}</h5>
            <h5>{{ formatDate(flight.arival_time) }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
