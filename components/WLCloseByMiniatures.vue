<template>
  <div class="md:w-4/5 p-4 mt-8 mb-12">
    <div class="grid md:grid-cols-3 md:grid-rows- gap-4">
      <a
        v-for="data, index in locations"
        :key="'min-'+index"
        ref="noreferrer"
        href="#"
        target="_blank"
        class="inline-block mb-4 md:mb-12 rounded-lg shadow-xl md:hover:bg-teal-300 transition overflow-hidden"
      >

        <img :src="data.image != undefined ? data.image.value + width : '/images/default-image.jpg'" :alt="'image-'+index" class="w-full h-48 object-cover">

        <p class="text-gray-700 font-bold text-2xl my-4 mx-4">
          {{ data.placeLabel.value }}
        </p>

        <p class="inline-block mb-6 mx-4">
          <i class="fas fa-tag text-teal-500 mr-2" />
          <em class="text-gray-500">
            {{ data.placeDescription != undefined ? data.placeDescription.value : 'No hay descripción.' }}
          </em>
        </p>
      </a>
    </div>

    <hr class="border my-6 md:my-0 md:mb-4">

    <div class="flex justify-center">
      <p class="text-gray-500 md:hover:text-white rounded-lg md:hover:bg-gray-500 mr-8 h-6 transition overflow-hidden">
        <a ref="noreferrer" href="#" target="_blank" class="block w-full h-full text-center px-4"><i class="fa-solid fa-arrow-left-long" /> <span class="hidden md:inline">Previous</span></a>
      </p>
      <p v-for="page, index in pages" :key="'page-'+index" class="text-gray-500 md:hover:text-white rounded-lg md:hover:bg-gray-500 mx-2 w-6 h-6 transition overflow-hidden">
        <a ref="noreferrer" href="#" target="_blank" class="block w-full h-full text-center">
          {{ page }}
        </a>
      </p>
      <p class="text-gray-500 md:hover:text-white rounded-lg md:hover:bg-gray-500 ml-8 h-6 transition overflow-hidden">
        <a ref="noreferrer" href="#" target="_blank" class="block w-full h-full text-center px-4"><span class="hidden md:inline">Next</span> <i class="fa-solid fa-arrow-right-long" /></a>
      </p>
    </div>
  </div>
</template>

<script>
const wbk = require('wikibase-sdk')({
  instance: 'https:/wikidata.org',
  sparqlEndpoint: 'https://query.wikidata.org/sparql'
})

export default {
  name: 'WLCloseByMiniatures',
  data () {
    return {
      pages: [
        1,
        2,
        3
      ],
      locations: [],
      width: '?width=320px'
    }
  },
  mounted () {
    this.getPosition()
  },
  methods: {
    getPosition () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.$store.commit('setLatitude', position.coords.latitude)
        this.$store.commit('setLongitude', position.coords.longitude)

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
            this.locations = data.results.bindings
            this.$store.commit('setLocations', data.results.bindings)
          })
      })
    }
  }
}
</script>
