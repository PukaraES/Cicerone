<template>
  <div class="font-barlow text-gray-600 flex flex-col items-center">
    <div class="w-full md:w-4/5 md:p-4 my-2 md:my-8 flex flex-col md:flex-row justify-between items-center">
      <p class="md:w-2/6 text-gray-700 my-2 md:my-0 md:mx-4 font-bold text-3xl text-center md:text-left md:text-4xl">
        Cerca de ti
      </p>

      <div class="flex flex-row-reverse md:w-3/6 my-2 md:my-0">
        <button class="mx-2 my-2 p-2 md:p-4 rounded-lg shadow-md md:active:bg-teal-700 md:active:text-white transition">
          <i class="fa-solid fa-magnifying-glass mr-2 text-teal-500" /> Buscar
        </button>

        <input type="text" class="mx-2 md:w-4/6 my-2 p-2 md:p-4 rounded-lg shadow-md" placeholder="Tu ubicación">
      </div>
    </div>

    <WLCloseByMiniatures />
  </div>
</template>

<script>

export default {
  name: 'WLCloseBy',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
