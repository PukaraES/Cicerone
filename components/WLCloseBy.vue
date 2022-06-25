<template>
  <div class="font-barlow bg-teal-50 text-gray-600 flex flex-col items-center">
    <div class="w-full md:w-4/5 md:p-4 my-2 md:my-8 flex flex-col md:flex-row justify-between items-center">
      <p class="md:w-2/6 text-gray-700 my-2 md:my-0 md:mx-4 font-bold text-3xl text-center md:text-left md:text-4xl">
        Cerca de ti
      </p>

      <div class="flex flex-row-reverse w-full md:w-3/6 my-2 md:my-0 relative">
        <input v-model="search" type="text" class="md:mx-2 mx-auto w-11/12 md:w-full my-2 p-2 md:p-4 rounded-lg shadow-md" placeholder="Tu ubicación" @keyup="fetch">

        <div v-if="results != []" class="absolute w-full top-20 h-48 overflow-y-scroll">
          <div v-for="result, index in results" :key="'result-'+index" class="bg-white text-gray-700 text-xl px-2 py-1 hover:bg-gray-300" @click="sendEntity(index)">
            <span class="font-bold">{{ results[index].display.label.value | capitalize }}</span> -
            {{ results[index].display.description ? results[index].display.description.value : 'No hay descripción' | capitalize }}
          </div>
        </div>
      </div>
    </div>

    <WLCloseByMiniatures ref="miniatures" :coords="coords" />
  </div>
</template>

<script>

export default {
  name: 'WLCloseBy',
  filters: {
    capitalize (word) {
      return word.toUpperCase()
    }
  },
  data () {
    return {
      search: '',
      results: [],
      entity: '',
      coords: []
    }
  },
  methods: {
    sendEntity (index) {
      this.entity = this.results[index].id
      this.sendCoord()
      this.results = ''

      setTimeout(() => {
        this.$refs.miniatures.updateCoords()
      }, 500)
    },
    async fetch () {
      const url = `https://www.wikidata.org/w/api.php?action=wbsearchentities&origin=*&format=json&type=item&search=${this.search}&language=es&uselang=es`

      await fetch(url)
        .then(res => res.json())
        .catch(rerr => rerr)
        .then((data) => {
          this.results = data.search
        })
        .catch(derr => derr)
    },
    async sendCoord () {
      const url = `https://www.wikidata.org/w/api.php?action=wbgetclaims&format=json&entity=${this.entity}&property=p625&origin=*`

      await fetch(url)
        .then(res => res.json())
        .catch(rerr => rerr)
        .then((data) => {
          this.coords = data.claims
        })
        .catch(derr => derr)
    }
  }
}
</script>
