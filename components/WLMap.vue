<template>
  <div class="font-barlow text-slate-600 flex flex-col items-center">
    <div class="w-4/5 p-4">
      <p class="my-4 text-4xl text-center w-1/2 font-bold mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <p class="my-4 text-center w-1/2 mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore provident dignissimos libero vel reprehenderit repudiandae facere sunt, laborum magnam possimus, doloribus ipsa fugit praesentium officiis debitis numquam, doloremque veniam minus?
      </p>
    </div>

    <div class="w-4/5 p-4 flex justify-center">
      <input type="text" class="w-1/2 float-right mx-4 p-2 shadow-md">
      <button class="float-right mx-4 p-2 shadow-md">
        Buscar
      </button>
    </div>
     <div class="w-4/5 mt-8 mb-24 p-4 border border-red-500">
      <div style="height: 20rem; display:flex; justify-content: center;">
    <client-only>
      <l-map id="map" :zoom="15" :center="[-2.54611111, 37.22361111]">
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
      coords: []
    }
  },
  mounted () {
    const markers = require('../static/markers')
    this.coords = markers.coordenadas
  }
}
</script>
