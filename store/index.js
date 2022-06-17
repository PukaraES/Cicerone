export const state = () => ({
  locations: [],
  latitude: 0,
  longitude: 0
})

export const mutations = {
  setLocations (state, arr) {
    state.locations = arr
  },
  setLatitude (state, lat) {
    state.latitude = lat
  },
  setLongitude (state, lon) {
    state.longitude = lon
  }
}
