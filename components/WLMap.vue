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
        <i class="fa-solid fa-magnifying-glass mr-2 text-teal-500" /> Buscar
      </button>
    </div>
    <div class="w-4/5 mt-8 mb-24 p-4 border ">
      <div style="height: 20rem; display:flex; justify-content: center;">
        <client-only>
          <l-map id="map" :zoom="15" :center="[$store.state.latitude, $store.state.longitude]">
            <l-marker :lat-lng="[$store.state.latitude, $store.state.longitude]">
              <l-icon
                icon-url="/images/person-solid.svg"
              ></l-icon>
              <l-popup> Aqui estas tú </l-popup>
            </l-marker>
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <v-marker-cluster>
              <l-marker v-for="(mark,index) in marca" :key="index" :lat-lng="[mark[1], mark[0]]">
                <l-popup>
                  <NuxtLink :to="{ name: 'places-id-place-details', params: { id: index } }">
                    <div class="p-2">
                      <img :src="marker[index].image != undefined ? marker[index].image.value + '?width=320px' : '/images/default-image.jpg'">
                      <span class="font-bold">{{ marker[index].placeLabel.value }}</span>
                    </div>
                  </NuxtLink>
                </l-popup>
              </l-marker>
            </v-marker-cluster>
          </l-map>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
const wbk = require('wikibase-sdk')({
  instance: 'https:/wikidata.org',
  sparqlEndpoint: 'https://query.wikidata.org/sparql'
})

export default {
  name: 'WLMap',
  data () {
    return {
      marker: [],
      latitude: '',
      longitude: '',
      marca: []
    }
  },
  mounted () {
    this.getPosition()
  },
  methods: {
    getPosition () {
      navigator.geolocation.getCurrentPosition((position) => {
        const query = `SELECT ?place ?placeLabel ?dist (SAMPLE(?country) AS ?country) (SAMPLE(?image) AS ?image) (SAMPLE(?coord) AS ?coord) (SAMPLE(?placeDescription) AS ?placeDescription)
          WHERE {
            SERVICE wikibase:around {
              ?place wdt:P625 ?location.
              bd:serviceParam wikibase:center 'Point(${position.coords.longitude} ${position.coords.latitude})'^^geo:wktLiteral.
              bd:serviceParam wikibase:radius '30'. }
            SERVICE wikibase:label {
              bd:serviceParam wikibase:language 'es'.}
            SERVICE wikibase:label {
              bd:serviceParam wikibase:language 'es'.
              ?place schema:description ?placeDescription. }
            ?place wdt:P1435 ?monument.
            OPTIONAL { ?place wdt:P18 ?image. }
            OPTIONAL { ?place wdt:P17 ?country. }
            OPTIONAL { ?place wdt:P625 ?coord. }
            BIND(geof:distance('Point(${position.coords.longitude} ${position.coords.latitude})'^^geo:wktLiteral, ?location) as ?dist)
          }
          GROUP BY ?place ?placeLabel ?dist
          ORDER BY ?dist`

        const url = wbk.sparqlQuery(query)

        fetch(url, {
          method: 'GET'
        })
          .then(res => res.json())
          .then((data) => {
            this.marker = data.results.bindings
            const coordenada = this.marker.map(point => point.coord.value)
            const regex = /-*\d+.[0-9]*/g
            const latLng = coordenada.map(points =>
              points.match(regex)
            )
            this.marca = latLng
          })
      })
    }
  }
}
</script>
