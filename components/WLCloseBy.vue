<template>
  <div class="font-barlow text-slate-600 flex flex-col items-center">
    <div class="w-4/5 p-4 border border-red-500">
      <p class="float-left mx-4 p-2 font-bold text-4xl">
        Cerca de ti
      </p>

      <button class="float-right mx-4 p-2 shadow-md">
        Buscar
      </button>

      <input type="text" class="float-right mx-4 p-2 shadow-md w-1/3">
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
