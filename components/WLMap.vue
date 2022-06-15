<template>
  <div class="font-barlow text-slate-600 flex flex-col items-center">
    <div class="w-4/5 p-4">
      <p class="my-4 text-4xl text-center w-1/2 font-bold mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <p class="my-4 text-center w-1/2 mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore provident dignissimos libero vel reprehenderit repudiandae facere sunt, laborum magnam possimus, doloribus ipsa fugit praesentium officiis debitis numquam, doloremque veniam minus?
      </p>
    </div>

    <div class="w-4/5 p-4 flex justify-center">
      <input type="text" class="w-1/2 float-right mx-4 p-2 shadow-md">
      <button class="float-right mx-4 p-2 shadow-md">
        Buscar
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
