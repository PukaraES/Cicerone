<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <button ref="location-button" @click="getLocation()">
      Get User Location
    </button>
  </div>
</template>

<script>
export default {
  name: 'LocationFinder',
  methods: {
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          console.log(position.coords)
        })
      } else {
        alert('not supported')
      }
    }
  }
}
</script>
