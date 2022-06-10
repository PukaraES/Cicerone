<template>
  <div>
    <div class="bg-slate-300 w-full h-12" />
    <div class="bg-slate-100 h-36 flex justify-around items-center">
      <p class="font-barlow text-6xl">
        WIKILOCAL
      </p>
      <a href="#" target="_blank" class="p-4 border-b-8 border-slate-300 hover:bg-slate-300 transition">
        ¿QUÉ ES WIKILOCAL?
      </a>
      <a href="#" target="_blank" class="p-4 border-b-8 border-slate-300 hover:bg-slate-300 transition">
        EXPLORA
      </a>
      <button class="bg-slate-300 p-4 rounded-xl hover:bg-slate-400 transition">
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
