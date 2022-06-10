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
const wbk = require('wikibase-sdk')({
  instance: 'https:/wikidata.org',
  sparqlEndpoint: 'https://query.wikidata.org/sparql'
})

const sparql = `SELECT ?MUNICIPIO ?MUNICIPIOLabel ?MUNICIPIODescription ?coordenadas ?imagen WHERE {
  SERVICE wikibase:label { bd:serviceParam wikibase:language "es". }
  ?MUNICIPIO wdt:P131 wd:Q1157977.
  OPTIONAL { ?MUNICIPIO wdt:P625 ?coordenadas. }
  OPTIONAL { ?MUNICIPIO wdt:P18 ?imagen. }
}
`
const url = wbk.sparqlQuery(sparql)

export default {
  name: 'LocationFinder',
  data () {
    return {
      what: []
    }
  },
  async fetch () {
    this.what = await fetch(
      url,
      {
        method: 'GET',
        headers: ({
          'Api-User-Agent': 'Just trying'
        })
      }
    ).then(res => res.json())
      .then(data => console.log(data.results.bindings[1].MUNICIPIOLabel.value))
  },

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
