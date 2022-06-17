<template>
  <div class="text-teal-800 font-barlow bg-teal-50 h-36 flex items-center">
    <div class="mx-auto px-24 flex flex-col md:flex-row md:justify-around w-full">
      <p class="text-4xl md:text-6xl text-center md:text-left">
        WIKILOCAL
      </p>

      <button class="my-2 mx-auto md:mx-0 md:my-0 text-white p-2 w-1/2 md:w-auto md:py-0 md:px-4 bg-teal-500 rounded-lg md:hover:bg-teal-400 transition md:active:bg-teal-700">
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
