<template>
  <div class="font-barlow flex flex-col items-center bg-teal-50">
    <div class="w-4/5 p-4">
      <p class="text-gray-700 my-4 text-2xl md:text-4xl text-justify font-bold mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <p class="text-gray-500 my-4 text-justify mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore provident dignissimos libero vel reprehenderit repudiandae facere sunt, laborum magnam possimus, doloribus ipsa fugit praesentium officiis debitis numquam, doloremque veniam minus?
      </p>
    </div>

    <div class="w-full md:w-4/5 p-4 flex justify-center">
      <input type="text" class="md:w-1/2 md:float-right mx-2 md:mx-4 p-2 md:p-4 rounded-lg shadow-md" placeholder="Tu ubicación">
      <button class="text-gray-500 md:float-right mx-2 md:mx-4 md:p-4 p-2 rounded-lg shadow-md md:active:bg-teal-700 md:active:text-white transition">
        <i class="fa-solid fa-magnifying-glass mr-2 text-teal-500"></i> Buscar
      </button>
    </div>
     <div class="w-4/5 mt-8 mb-24 p-4 border ">
      <div style="height: 20rem; display:flex; justify-content: center;">
    <client-only>
      <l-map id="map" :zoom="17" :center="[latitude, longitude]">
        <l-marker :lat-lng="[latitude, longitude]"></l-marker>
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker v-for="coord,index in coords" :key="'mark-'+index" :lat-lng="[coord.lat, coord.lon]"></l-marker>
      </l-map>
    </client-only>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WLMap',
  data () {
    return {
      coords: [],
      latitude: '',
      longitude: ''
    }
  },
  mounted () {
    this.getPosition()
  },
  methods: {
    getPosition () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude
        this.longitude = position.coords.longitude
      })
    }
  }
}
</script>
