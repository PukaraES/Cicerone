<template>
  <div class="w-4/5 p-4 mt-8 mb-12">
    <div class="grid md:grid-cols-3 md:grid-rows-2 gap-4">
      <a v-for="data, index in 6" :key="'min-'+index" href="#" target="_blank" class="inline-block group mb-4 md:mb-12 rounded-lg shadow-xl md:hover:bg-teal-500 transition overflow-hidden">

        <img :src="locations[index].image != undefined ? locations[index].image.value : '/images/default-image.jpg'" :alt="'image-'+index" class="w-full h-48 rounded-lg object-cover">

        <p class="text-gray-700 md:group-hover:text-white font-bold text-2xl my-4 mx-4">
          {{ locations[index].placeLabel.value }}
        </p>

        <p class="inline-block mb-6 mx-4">
          <i class="fas fa-tag text-teal-500 mr-2 md:group-hover:text-white"></i>
          <em class="text-gray-500 md:group-hover:text-white">
            {{ locations[index].placeLabel.value }}
          </em>
        </p>
      </a>
    </div>

    <hr class="border my-6 md:my-0 md:mb-4">

    <div class="flex justify-center">
      <p class="text-gray-500 md:hover:text-white rounded-lg md:hover:bg-gray-500 mr-8 h-6 transition overflow-hidden">
        <a href="#" class="block w-full h-full text-center px-4"><i class="fa-solid fa-arrow-left-long"></i> <span class="hidden md:inline">Previous</span></a>
      </p>
      <p v-for="page, index in pages" :key="'page-'+index" class="text-gray-500 md:hover:text-white rounded-lg md:hover:bg-gray-500 mx-2 w-6 h-6 transition overflow-hidden">
        <a href="#" class="block w-full h-full text-center">
          {{ page }}
        </a>
      </p>
      <p class="text-gray-500 md:hover:text-white rounded-lg md:hover:bg-gray-500 ml-8 h-6 transition overflow-hidden">
        <a href="#" class="block w-full h-full text-center px-4"><span class="hidden md:inline">Next</span> <i class="fa-solid fa-arrow-right-long"></i></a>
      </p>
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
  name: 'WLCloseByMiniatures',
  data () {
    return {
      pages: [
        1,
        2,
        3
      ]
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
    )
    .then(res => res.json())
    .then(data => data.results.bindings)
  }
}
</script>
