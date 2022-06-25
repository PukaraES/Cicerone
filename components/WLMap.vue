<template>
  <div class="font-barlow flex flex-col items-center bg-teal-50">
    <div class="w-11/12 md:w-4/5 my-8 overflow-hidden rounded-lg">
      <div style="height: 20rem; display:flex; justify-content: center;">
        <client-only>
          <l-map id="map" :zoom="18" :center="[$store.state.latitude, $store.state.longitude]">
            <l-marker :lat-lng="[$store.state.latitude, $store.state.longitude]">
              <l-icon icon-url="/images/person-solid.svg" />
              <l-popup> Aqui estas tú </l-popup>
            </l-marker>

            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

            <v-marker-cluster>
              <l-marker v-for="(data, index) in getData" :key="index" :lat-lng="[getCoords[index][1], getCoords[index][0]]">
                <l-popup>
                  <NuxtLink :to="{ name: 'places-id-place-details', params: { id: getEntity(index), index: index } }">
                    <div class="p-2">
                      <img :src="data.image != undefined ? data.image.value + '?width=320px' : '/images/default-image.jpg'">
                      <span class="font-bold">{{ data.placeLabel.value }}</span>
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
export default {
  name: 'WLMap',
  data () {
    return {
    }
  },
  computed: {
    getData () {
      return this.$store.state.locations
    },
    getCoords () {
      const coords = this.$store.state.locations.map((data) => {
        const regex = /([-0-9]+.[0-9]*)/g
        return data.coord.value.match(regex)
      })

      return coords
    }
  },
  mounted () {
  },
  methods: {
    getEntity (index) {
      const url = this.getData[index].place.value
      // eslint-disable-next-line
      const regex = /(?:http:\/\/www.wikidata.org\/entity\/)/g
      const entity = url.replace(regex, '')
      return entity
    }
  }
}
</script>
