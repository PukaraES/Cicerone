<template>
  <div class="bg-teal-50">
    <nuxt-link to="/">
      <p class="bg-teal-300 p-3 fixed left-6 hover:bg-teal-700 hover:text-white transition">
        ATRAS
      </p>
    </nuxt-link>
    <div class="bg-teal-500 w-full h-12 overflow-hidden font-barlow" />
    <WLHeader />
    <p class="text-4xl text-center font-extrabold my-8 text-gray-700">
      {{ $store.state.locations[$route.params.id].placeLabel.value }}
    </p>

    <img :src="$store.state.locations[$route.params.id].image ? $store.state.locations[$route.params.id].image.value + width : '/images/default-image.jpg'" class="mx-auto w-5/6 h-96 object-cover rounded-lg shadow-md">

    <div class="w-5/6 mx-auto flex flex-wrap flex-row mt-8 mb-16">
      <div class="w-1/2 overflow-hidden p-8">
        <p class="text-xl text-justify text-teal-500">
          {{ $store.state.locations[$route.params.id].placeDescription ? $store.state.locations[$route.params.id].placeDescription.value : 'No hay descripción' }}
        </p>
      </div>

      <div class="w-1/2 overflow-hidden p-8 bg-teal-100 shadow-md rounded-lg">
        <p class="text-2xl text-center font-extrabold text-gray-700">
          {{ $store.state.locations[$route.params.id].placeLabel.value }}
        </p>

        <p class="text-xl text-gray-700 my-4">
          <i class="fa-solid fa-location-dot" /> {{ $store.state.locations[$route.params.id].coord.value }}
        </p>

        <p class="text-xl text-gray-700 my-4">
          <i class="fa-solid fa-tag" /> ETIQUETA
        </p>

        <p class="text-xl text-gray-700 my-4">
          <i class="fa-solid fa-language" /> IDIOMAS
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      width: '?width=1024px'
    }
  },
  computed () {

  },
  methods: {

  }
}
</script>

<style>

</style>
