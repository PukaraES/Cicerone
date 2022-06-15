<template>
  <div class="box-border font-barlow">
    <div class="bg-teal-500 w-full h-12"></div>
    <WLHeader />
    <WLCloseBy />
    <div class="bg-teal-500 text-white w-full h-24 flex justify-center items-center">
      <p class="text-5xl font-bold mr-6">
        Disponible en
      </p>
      <p>
        <a href="#"><i class="p-2 rounded-lg text-4xl md:hover:bg-white hover:text-teal-500 transition mx-4 fa-brands fa-google-play"></i></a>
      </p>
      <p>
        <a href="#"><i class="p-2 rounded-lg text-4xl md:hover:bg-white hover:text-teal-500 transition mx-4 fa-brands fa-app-store"></i></a>
      </p>
    </div>
    <WLMap />
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
