<template>
  <div class="font-barlow text-gray-600 flex flex-col items-center">
    <div class="w-4/5 p-4 my-8">
      <p class="text-gray-700 float-left mx-4 font-bold text-4xl">
        Cerca de ti
      </p>

      <button class="float-right mx-4 p-4 rounded-lg shadow-md md:active:bg-teal-700 md:active:text-white transition">
        <i class="fa-solid fa-magnifying-glass mr-2 text-teal-500"></i> Buscar
      </button>

      <input type="text" class="float-right mx-4 p-4 rounded-lg shadow-md w-1/3" placeholder="Tu ubicación"/>
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
  }
}
</script>
