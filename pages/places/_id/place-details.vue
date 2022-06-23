<template>
  <div class="bg-teal-50">
    <nuxt-link to="/">
      <p class="bg-teal-300 p-3 fixed left-6 hover:bg-teal-700 hover:text-white transition rounded-b-lg">
        ATRAS
      </p>
    </nuxt-link>
    <div class="bg-teal-500 w-full h-12 overflow-hidden font-barlow" />
    <WLHeader />
    <p class="px-4 text-2xl md:text-4xl text-center font-extrabold my-8 text-gray-700">
      {{ $store.state.locations[$route.params.id].placeLabel.value }}
    </p>

    <img :src="$store.state.locations[$route.params.id].image ? $store.state.locations[$route.params.id].image.value + width : '/images/default-image.jpg'" class="mx-auto w-11/12 md:w-5/6 md:p-0 h-64 md:h-96 object-cover rounded-lg shadow-md">

    <div class="mx-auto md:w-5/6 overflow-hidden px-8 pt-8 pb-16">
      <p class="text-lg md:text-xl text-justify text-teal-500">
        {{ wikiExtract != '' ? wikiExtract : 'No hay descripción' }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      width: '?width=1024px',
      wikiExtract: '',
      wikiImages: ''
    }
  },
  computed: {
    getId () {
      const url = this.$store.state.locations[this.$route.params.id].place.value
      // eslint-disable-next-line
      const regex = /(?:http:\/\/www.wikidata.org\/entity\/)/g
      const id = url.replace(regex, '')
      return id
    }
  },
  mounted () {
    this.fetchWiki()
  },
  methods: {
    async fetchWiki () {
      const urlId = `https://www.wikidata.org/wiki/Special:EntityData/${this.getId}.json`

      const getId = await fetch(urlId)
        .then(res => res.json())
        .catch(eres => eres)
        .then(data => data.entities[this.getId].sitelinks)
        .catch(edata => edata)

      const wikiUrl = getId.eswiki.url
      const commonsUrl = getId.commonswiki.url
      const regexWiki = /(?:https:\/\/es.wikipedia.org\/wiki\/)/g
      const regexCommons = /(?:https:\/\/commons.wikimedia.org\/wiki\/)/g
      const wikiArticle = wikiUrl.replace(regexWiki, '')
      const wikiCommons = commonsUrl.replace(regexCommons, '')

      const urlWiki = `https://es.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&explaintext=false&exintro&titles=${wikiArticle}&indexpageids=true`

      const urlCommons = `https://commons.wikimedia.org/w/api.php?action=query&origin=*&generator=categorymembers&gcmtype=file&prop=imageinfo&iiprop=url&format=json&indexpageids=true&gcmtitle=${wikiCommons}`

      const getWiki = await fetch(urlWiki)
        .then(res => res.json())
        .catch(eres => eres)
        .then(data => data)
        .catch(edata => edata)

      const getCommons = await fetch(urlCommons)
        .then(res => res.json())
        .catch(eres => eres)
        .then(data => data)
        .catch(edata => edata)

      const pageId = getWiki.query.pageids
      const imagesIds = getCommons.query.pageids

      this.wikiExtract = getWiki.query.pages[pageId].extract
      this.wikiImages = imagesIds.map((id) => {
        return getCommons.query.pages[id].imageinfo[0].url
      })
    }
  }
}
</script>

<style>

</style>
