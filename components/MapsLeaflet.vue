<template>
  <div style="height: 20rem; width:60%; display:flex; justify-content: center;">
    <client-only>
      <l-map id="map" :zoom="15" :center="[40.4166, -3.7038]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker v-for="coord,index in coords" :key="'mark-'+index" :lat-lng="[coord.lat, coord.lon]"></l-marker>
      </l-map>
    </client-only>
  </div>
</template>
<script>
export default {
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
