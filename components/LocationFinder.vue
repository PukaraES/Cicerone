<template>
  <div
    class="relative items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <div class="flex justify-around mb-10">
      <h1 class="font-bold text-2xl">Cerca de ti</h1>
      <div>
        <form action="">
          <input type="text" placeholder="Tu ubicación" class="rounded-lg shadow-2xl pl-3 h-18 bg-white ">
          <button ref="location-button" v-on:click="getLocation()" class="shadow-2xl bg-white h-18 p-2 rounded-lg">
            Search
          </button>
        </form>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-2 w-120 h-90 justify-around w-4/5 ml-28">
      <LocationCard v-for="index in 6" :key="index" :location="locations[index]" />
    </div>
  </div>
</template>

<script>
const wbk = require('wikibase-sdk')({
  instance: 'https:/wikidata.org',
  sparqlEndpoint: 'https://query.wikidata.org/sparql'
})

const sparql = `SELECT ?place ?placeLabel ?dist (SAMPLE(?country) AS ?country) (SAMPLE(?image) AS ?image) (SAMPLE(?coord) AS ?coord) (SAMPLE(?placeDescription) AS ?placeDescription)
      WHERE
      {
        SERVICE wikibase:around {
            ?place wdt:P625 ?location .
            bd:serviceParam wikibase:center "Point(-2.54611111 37.22361111)"^^geo:wktLiteral .
            bd:serviceParam wikibase:radius "20" .
        }
        ?place wdt:P1435 ?monument .
        OPTIONAL { ?place wdt:P18 ?image . }
        OPTIONAL { ?place wdt:P17 ?country . }
        OPTIONAL { ?place wdt:P625 ?coord . }
        SERVICE wikibase:label { bd:serviceParam wikibase:language "es" }
        BIND(geof:distance("Point(-22.54611111 -57.22361111)"^^geo:wktLiteral, ?location) as ?dist) 
      }
      GROUP BY ?place ?placeLabel ?dist
      ORDER BY ?dist
`
const url = wbk.sparqlQuery(sparql)

export default {
  name: 'LocationFinder',
  data () {
    return {
      locations: [],
      coords: {}
    }
  },
  async fetch () {
    this.locations = await fetch(
      url,
      {
        method: 'GET',
        headers: ({
          'Api-User-Agent': 'Just trying'
        })
      }
    ).then(res => res.json())
      .then(data => data.results.bindings)
  },

  methods: {
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          this.coords = position.coords
        })
      } else {
        alert('not supported')
      }
    }
  }
}
</script>
