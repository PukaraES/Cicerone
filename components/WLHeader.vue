<template>
  <div class="font-barlow text-slate-600 bg-slate-100 h-36 flex items-center">
    <div class="mx-auto px-24 flex justify-around w-full">
      <p class="text-6xl">
        WIKILOCAL
      </p>
      <a href="#" target="_blank" class="flex items-center px-4 hover:bg-slate-300 transition">
        ¿QUÉ ES WIKILOCAL?
      </a>
      <a href="#" target="_blank" class="flex items-center px-4 border-b-4 border-slate-300 hover:bg-slate-300 hover:border-b-0 transition">
        EXPLORA
      </a>
      <button class="px-4 bg-slate-300 rounded-xl hover:bg-slate-400 transition">
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
