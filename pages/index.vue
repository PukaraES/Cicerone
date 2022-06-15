<template>
  <div class="box-border font-barlow">
    <div class="bg-teal-500 w-full h-12"></div>
    <WLHeader />
    <WLCloseBy />
    <div class="bg-teal-500 text-white w-full md:h-24 flex flex-col md:flex-row md:justify-center items-center">
      <p class="text-4xl md:text-5xl font-bold mt-6 md:mt-0 md:mr-6">
        Disponible en
      </p>
      <p class="overflow-hidden w-12 h-12 my-2 md:my-0 md:mx-4">
        <a href="#" class="block md:flex items-center justify-center w-full h-full my-2 md:my-0 rounded-lg text-4xl md:hover:bg-white md:hover:text-teal-500 transition"><i class="fa-brands fa-google-play"></i></a>
      </p>
      <p class="overflow-hidden w-12 h-12 mb-6 md:mb-0 md:mx-4">
        <a href="#" class="block md:flex items-center justify-center w-full h-full my-2 md:my-0 rounded-lg text-4xl md:hover:bg-white md:hover:text-teal-500 transition "><i class="fa-brands fa-app-store"></i></a>
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
