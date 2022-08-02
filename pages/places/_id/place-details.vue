<template>
  <div>
    <nuxt-link to="/">
      <p class="bg-teal-300 p-3 fixed left-6 hover:bg-teal-700 hover:text-white transition rounded-b-lg">
        ATRAS
      </p>
    </nuxt-link>

    <div class="bg-teal-500 w-full h-12 overflow-hidden font-barlow" />

    <WLHeader />

    <p class="px-4 text-2xl md:text-4xl text-center font-extrabold my-8 text-gray-700 ">
      {{ $store.state.locations[$route.params.index].placeLabel.value }}
    </p>

    <img v-show="wikiImages !== '' && isLinks === false" :src="wikiImages" :class="['mx-auto', 'w-11/12', 'md:w-5/6', 'md:p-0', 'h-64', 'md:h-96', 'object-cover', 'rounded-lg', 'shadow-md']">

    <div v-if="isLinks !== false" class="flex flex-row justify-around items-center md:flex-wrap">
      <i class="fa-solid fa-circle-left rounded-full text-gray-700 md:active:text-gray-500 text-4xl transform translate-x-2" @click="prevBtn" />
      <img
        v-for="image, index in wikiImages"
        :key="'images'+index"
        :ref="'image-n-'+index"
        :src="image"
        :class="['w-11/12', 'md:w-5/6', 'md:p-0', 'h-64', 'md:h-96', 'object-cover', 'rounded-lg', 'shadow-md', 'transition', { 'hidden': active !== index }]"
      >
      <i class="fa-solid fa-circle-right rounded-full text-gray-700 md:active:text-gray-500 text-4xl transform -translate-x-2" @click="nextBtn" />
    </div>

    <WLMonumentProperties :monumentId="id" v-if="id"/>

    <div class="mx-auto md:w-5/6 overflow-hidden px-8 pt-8 pb-16">
      <p class="text-lg md:text-xl text-justify text-gray-700">
        {{ wikiExtract != '' ? wikiExtract : 'No hay descripción' }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      width: '?width=800px',
      wikiExtract: '',
      wikiImages: '',
      active: 0,
      error: '',
      isLinks: false,
      id: ''
    }
  },
  computed: {
    getId () {
      const url = this.$store.state.locations[this.$route.params.index].place.value
      // eslint-disable-next-line
      const regex = /(?:http:\/\/www.wikidata.org\/entity\/)/g
      const id = url.replace(regex, '')
      return id
    },
    getImage () {
      return this.$store.state.locations[this.$route.params.index].image
    }
  },
  mounted () {
    this.fetchWiki()
    this.isLoading = true
  },
  methods: {
    async fetchWiki () {
      this.id = this.getId
      const urlId = `https://www.wikidata.org/wiki/Special:EntityData/${this.getId}.json`

      const getLinks = await fetch(urlId)
        .then(res => res.json())
        .catch(eres => eres)
        .then(data => data.entities[this.getId].sitelinks)
        .catch((edata) => {
          this.error = edata
        })

      if (this.error !== '') {
        return
      }

      if (Object.keys(getLinks).length !== 0) {
        const wikiUrl = getLinks.eswiki.url
        const regexWiki = /(?:https:\/\/es.wikipedia.org\/wiki\/)/g
        const wikiArticle = wikiUrl.replace(regexWiki, '')
        const urlWiki = `https://es.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&explaintext=false&exintro&titles=${wikiArticle}&indexpageids=true`
        const getWiki = await fetch(urlWiki)
          .then(res => res.json())
          .catch(eres => eres)
          .then(data => data)
          .catch(edata => edata)

        const pageId = getWiki.query.pageids
        this.wikiExtract = getWiki.query.pages[pageId].extract
      }

      if (getLinks.commonswiki !== undefined) {
        const commonsUrl = getLinks.commonswiki.url
        const regexCommons = /(?:https:\/\/commons.wikimedia.org\/wiki\/)/g
        const wikiCommons = commonsUrl.replace(regexCommons, '')
        const urlCommons = `https://commons.wikimedia.org/w/api.php?action=query&origin=*&generator=categorymembers&gcmtype=file&prop=imageinfo&iiprop=url&format=json&indexpageids=true&gcmtitle=${wikiCommons}`
        const getCommons = await fetch(urlCommons)
          .then(res => res.json())
          .catch(eres => eres)
          .then(data => data)
          .catch(edata => edata)

        const imagesIds = getCommons.query.pageids

        this.wikiImages = imagesIds.map((id) => {
          const imageUrl = getCommons.query.pages[id].imageinfo[0].url
          const regexThumbs = /(?:https:\/\/upload.wikimedia.org\/wikipedia\/commons\/)/g
          let thumbUrl = imageUrl.replace(regexThumbs, '')
          thumbUrl = thumbUrl.substring(5)
          const imagePx = `/600px-${thumbUrl}`
          let resized = imageUrl.replace(regexThumbs, 'https://upload.wikimedia.org/wikipedia/commons/thumb/')
          resized += imagePx
          return resized
        })
        this.isLinks = true
        return
      }

      if (this.getImage !== undefined) {
        this.wikiImages = this.getImage.value
        return
      }

      this.wikiImages = '/images/default-image.jpg'
    },
    prevBtn () {
      if (this.active < 1) {
        this.active = (Object.keys(this.$refs).length - 1)
        return
      }
      this.active -= 1
    },
    nextBtn () {
      if (this.active >= (Object.keys(this.$refs).length - 1)) {
        this.active = 0
        return
      }
      this.active += 1
    }
  }
}
</script>

<style scoped>
  * {
    scroll-behavior: smooth;
  }
</style>
