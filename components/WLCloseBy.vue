<template>
  <div class="font-barlow text-gray-600 flex flex-col items-center">
    <div class="w-full md:w-4/5 p-4 my-2 md:my-8 flex flex-col justify-center">
      <p class="text-gray-700 md:float-left md:mx-4 font-bold text-3xl text-center md:text-left md:text-4xl">
        Cerca de ti
      </p>

      <button class="md:float-right w-1/2 mx-auto md:mx-4 my-2 p-2 md:p-4 rounded-lg shadow-md md:active:bg-teal-700 md:active:text-white transition">
        <i class="fa-solid fa-magnifying-glass mr-2 text-teal-500"></i> Buscar
      </button>

      <input type="text" class="md:float-right md:mx-4 p-2 md:p-4 rounded-lg shadow-md w-2/3 mx-auto md:w-1/3" placeholder="Tu ubicación"/>
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
