<template>
  <div class="w-4/5 p-4 mt-8 mb-12">
    <div class="grid md:grid-cols-3 md:grid-rows- gap-4">
      <a v-for="data, index in locations.slice(pageRange[0], pageRange[1])" :key="'min-'+index" href="#" target="_blank" class="inline-block group mb-4 md:mb-12 rounded-lg shadow-xl md:hover:bg-teal-500 transition overflow-hidden">

        <img :src="data.image != undefined ? data.image.value + width : '/images/default-image.jpg'" :alt="'image-'+index" class="w-full h-48 rounded-lg object-cover">

        <p class="text-gray-700 md:group-hover:text-white font-bold text-2xl my-4 mx-4">
          {{ data.placeLabel.value }}
        </p>

        <p class="inline-block mb-6 mx-4">
          <i class="fas fa-tag text-teal-500 mr-2 md:group-hover:text-white" />
          <em class="text-gray-500 md:group-hover:text-white">
            {{ data.placeDescription != undefined ? data.placeDescription.value : 'No hay descripción.' }}
          </em>
        </p>
      </a>
    </div>

    <hr class="border my-6 md:my-0 md:mb-4">

    <div class="flex justify-center">
      <button :class=" pageRange[0] != 0 ? ['mx-2', 'text-gray-500', 'md:hover:text-white', 'rounded-lg', 'md:hover:bg-gray-500', 'p-2', 'transition'] : ['mx-2', 'bg-gray-300', 'p-2', 'rounded-lg', 'cursor-default']" @click="pageRange[0] > 0 ? firstPage() : ''">
        <i class="fa-solid fa-arrow-left-long-to-line" />
        <span class="hidden md:inline">First</span>
      </button>

      <button :class=" pageRange[0] != 0 ? ['text-gray-500', 'md:hover:text-white', 'rounded-lg', 'md:hover:bg-gray-500', 'p-2', 'transition'] : ['bg-gray-300', 'p-2', 'rounded-lg', 'cursor-default']" @click="pageRange[0] > 0 ? previousPage() : ''">
        <i class="fa-solid fa-arrow-left-long" />
        <span class="hidden md:inline">Previous</span>
      </button>

      <button v-for="page, index in pagesPerSection()" :key="'page-'+index" :class="['text-gray-500', 'md:hover:text-white', 'rounded-lg', 'md:hover:bg-gray-500', 'px-4', 'py-2', 'mx-2', 'transition', { 'bg-gray-300' : actualPage == index + 1 }]" @click="getPages(page)">
        {{ page }}
      </button>

      <button :class=" pageRange[1] < locations.length ? ['text-gray-500', 'md:hover:text-white', 'rounded-lg', 'md:hover:bg-gray-500', 'p-2', 'transition'] : ['bg-gray-300', 'p-2', 'rounded-lg', 'cursor-default']" @click="pageRange[1] < locations.length ? nextPage() : ''">
        <span class="hidden md:inline">Next</span>
        <i class="fa-solid fa-arrow-right-long" />
      </button>

      <button :class=" pageRange[1] < locations.length ? ['mx-2', 'text-gray-500', 'md:hover:text-white', 'rounded-lg', 'md:hover:bg-gray-500', 'p-2', 'transition'] : ['mx-2', 'bg-gray-300', 'p-2', 'rounded-lg', 'cursor-default']" @click="pageRange[1] < locations.length ? lastPage() : ''">
        <span class="hidden md:inline">Last</span>
        <i class="fa-solid fa-arrow-right-long-to-line" />
      </button>
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
      pageRange: [0, 9],
      pagesPerPage: 9,
      actualPage: 1,
      locations: [],
      active: 1,
      width: '?width=320px'
    }
  },
  computed: {
  },
  mounted () {
    this.getPosition()
  },
  methods: {
    pagesPerSection () {
      return Math.ceil(this.locations.length / this.pagesPerPage)
    },
    firstPage () {
      this.getPages(1)
    },
    previousPage () {
      if (this.actualPage > 1) { this.actualPage-- }
      this.getPages(this.actualPage)
    },
    getPages (page) {
      this.actualPage = page
      const start = (page * this.pagesPerPage) - this.pagesPerPage
      const end = (page * this.pagesPerPage)
      this.pageRange = [start, end]
    },
    nextPage () {
      if (this.actualPage < this.pagesPerSection()) { this.actualPage++ }
      this.getPages(this.actualPage)
    },
    lastPage () {
      this.getPages(this.pagesPerSection())
    },
    getPosition () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.$store.commit('setLatitude', position.coords.latitude)
        this.$store.commit('setLongitude', position.coords.longitude)

        const query = `SELECT ?place ?placeLabel ?dist (SAMPLE(?country) AS ?country) (SAMPLE(?image) AS ?image) (SAMPLE(?coord) AS ?coord) (SAMPLE(?placeDescription) AS ?placeDescription)
          WHERE {
            SERVICE wikibase:around {
              ?place wdt:P625 ?location.
              bd:serviceParam wikibase:center 'Point(${position.coords.longitude} ${position.coords.latitude})'^^geo:wktLiteral.
              bd:serviceParam wikibase:radius '300'. }
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
