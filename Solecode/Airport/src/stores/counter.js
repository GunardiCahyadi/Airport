// src/store/appStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('app', {
  state: () => ({
    airlinesData: [],
    airportData: [],
    flightData: [],
    filterAirline: '',
    filterTimeRange: ''
  }),

  getters: {
    getAirlineName(code) {
      const airline = this.airlinesData.find((airline) => airline.Code === code)
      return airline ? airline.Name : ''
    },
    getAirportName(code) {
      const airport = this.airportData.find((airport) => airport.Code === code)
      return airport ? airport.Name : ''
    }
  },

  actions: {
    async fetchAirlinesData() {
      try {
        const response = await axios.get('http://localhost:3000/airlines_data')
        this.airlinesData = response.data
      } catch (error) {
        console.error('Error fetching airlines data:', error)
      }
    },
    async fetchAirportData() {
      try {
        const response = await axios.get('http://localhost:3000/airport_data')
        this.airportData = response.data
      } catch (error) {
        console.error('Error fetching airport data:', error)
      }
    },
    async fetchFlightData() {
      try {
        const response = await axios.get(`http://localhost:3000/flightData`)
        this.flightData = response.data
      } catch (error) {
        console.error('Error fetching flight data:', error)
      }
    }
  }
})
