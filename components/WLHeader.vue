<template>
  <div class="text-teal-800 font-barlow bg-teal-50 h-36 flex items-center">
    <div class="mx-auto px-24 flex justify-around w-full">
      <p class="text-6xl">
        WIKILOCAL
      </p>
      <a href="#" target="_blank" class="text-teal-500 flex items-center px-4 md:hover:bg-teal-500 md:hover:text-white transition">
        ¿QUÉ ES WIKILOCAL?
      </a>
      <a href="#" target="_blank" class="text-teal-500 flex items-center px-4 border-b-4 border-teal-500 md:hover:bg-teal-500 md:hover:text-white md:hover:border-b-0 transition">
        EXPLORA
      </a>
      <button class="text-white px-4 bg-teal-500 rounded-lg md:hover:bg-teal-400 transition md:active:bg-teal-700">
        INSTALAR
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WLHeader',
  data () {
    return {
      active: true
    }
  }
}
</script>
