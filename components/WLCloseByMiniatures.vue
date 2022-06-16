<template>
  <div class="w-4/5 p-4 mt-8 mb-32">
    <div class="grid grid-cols-3 gap-4">
      <div v-for="index in 6" :key="'min-'+index" class="w-full h-auto rounded-lg overflow-hidden">
        <div>
          <p class="absolute text-xl bg-slate-500 rounded-md text-white px-2 py-1 transform translate-x-2 translate-y-2">
            Gratuito
          </p>
          <img :src="locations[index].image != undefined ? locations[index].image.value : '/default-image.jpg'" :alt="'image-'+index" class="w-full h-full border rounded-lg shadow-md object-cover">
        </div>
        <p class="font-bold text-2xl px-2">
          {{ locations[index].placeLabel.value }}
        </p>
        <p class="inline-block m-2">
          <i class="fas fa-tag"></i>
          <em class="inline">
            {{ locations[index].placeLabel.value }}
          </em>
        </p>
        <p class="inline-block m-2">
          <i class="fas fa-location"></i>
          {{ locations[index].placeLabel.value }}
        </p>
        <p class="px-2">
          <!-- <i v-for="stars, sindex in data.stars" :key="'star-'+sindex" class="fas fa-star inline-block mx-1 my-2"></i> -->
        </p>
      </div>
    </div>

    <hr class="border my-4">

    <div class="flex justify-center">
      <p class="block hover:text-white rounded-lg hover:bg-slate-500 mr-8 h-6 transition overflow-hidden">
        <a href="#" class="block w-full h-full text-center px-4"><i class="fa-solid fa-arrow-left-long"></i> Previous</a>
      </p>
      <p v-for="page, index in pages" :key="'page-'+index" class="block hover:text-white rounded-lg hover:bg-slate-500 mx-2 w-6 h-6 transition overflow-hidden">
        <a href="#" class="block w-full h-full text-center">
          {{ page }}
        </a>
      </p>
      <p class="block hover:text-white rounded-lg hover:bg-slate-500 ml-8 h-6 transition overflow-hidden">
        <a href="#" class="block w-full h-full text-center px-4">Next <i class="fa-solid fa-arrow-right-long"></i></a>
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
      ],
      locations: [
        {
          tier: 'Gratuito',
          image: '/default.webp',
          site: 'Lorem ipsum',
          city: 'Ciudad',
          stars: 5,
          tags: ['monument', 'building', 'historic']
        },
        {
          tier: 'Gratuito',
          image: '/default.webp',
          site: 'Lorem ipsum',
          city: 'Ciudad',
          stars: 5,
          tags: ['monument', 'building', 'historic']
        },
        {
          tier: 'Gratuito',
          image: '/default.webp',
          site: 'Lorem ipsum',
          city: 'Ciudad',
          stars: 5,
          tags: ['monument', 'building', 'historic']
        },
        {
          tier: 'Gratuito',
          image: '/default.webp',
          site: 'Lorem ipsum',
          city: 'Ciudad',
          stars: 5,
          tags: ['monument', 'building', 'historic']
        },
        {
          tier: 'Gratuito',
          image: '/default.webp',
          site: 'Lorem ipsum',
          city: 'Ciudad',
          stars: 5,
          tags: ['monument', 'building', 'historic']
        },
        {
          tier: 'Gratuito',
          image: '/default.webp',
          site: 'Lorem ipsum',
          city: 'Ciudad',
          stars: 5,
          tags: ['monument', 'building', 'historic']
        }
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
    ).then(res => res.json())
      .then(data => data.results.bindings)
  }
}
</script>
