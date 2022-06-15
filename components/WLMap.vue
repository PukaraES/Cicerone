<template>
  <div class="font-barlow flex flex-col items-center bg-teal-50">
    <div class="w-4/5 p-4">
      <p class="text-gray-700 my-4 text-4xl text-justify font-bold mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <p class="text-gray-500 my-4 text-justify mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore provident dignissimos libero vel reprehenderit repudiandae facere sunt, laborum magnam possimus, doloribus ipsa fugit praesentium officiis debitis numquam, doloremque veniam minus?
      </p>
    </div>

    <div class="w-4/5 p-4 flex justify-center">
      <input type="text" class="w-1/2 float-right mx-4 p-4 rounded-lg shadow-md" placeholder="Tu ubicación">
      <button class="text-gray-500 float-right mx-4 p-4 rounded-lg shadow-md md:active:bg-teal-700 md:active:text-white transition">
        <i class="fa-solid fa-magnifying-glass mr-2 text-teal-500"></i> Buscar
      </button>
    </div>

    <div class="w-4/5 mt-8 mb-24 p-4 border border-red-500">
      <p>
        Aqui va el mapa, quita esto y coloca lo que estas implementando.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WLMap',
  data () {
    return {

    }
  }
}
</script>
