<template>
  <div class="font-barlow text-slate-600 flex flex-col items-center">
    <div class="w-4/5 p-4 my-8">
      <p class="float-left mx-4 font-bold text-4xl">
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
      coords: {}
    }
  },
  methods: {
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          this.coords = position.coords
        })
      } else {
        alert('not supported')
      }
    }
  }
}
</script>
