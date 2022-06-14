<template>
  <div class="w-4/5 p-4 mt-8 mb-32">
    <div class="grid grid-cols-3 gap-4">
      <div v-for="data, index in array" :key="'min-'+index" class="w-full border inline-block">
        <img :src="data.image" :alt="'image-'+index" class="border">
        <p>
          Nombre: {{ data.fname }}
        </p>
        <p>
          Apellido: {{ data.lname }}
        </p>
        <p>
          Calificación: {{ data.stars }}
        </p>
      </div>
    </div>
    <hr class="border-2 my-4">
    <p>
      PAGINAS
    </p>
  </div>
</template>

<script>
export default {
  name: 'WLCloseByMiniatures',
  data () {
    return {
      array: [
        {
          image: '/skyrim.jpg',
          fname: 'Orlando',
          lname: 'Pernia',
          stars: 5,
          tags: ['gamer', 'racing', 'frontend', 'taliwindcss']
        },
        {
          image: '/skyrim.jpg',
          fname: 'Orlando',
          lname: 'Pernia',
          stars: 5,
          tags: ['gamer', 'racing', 'frontend', 'taliwindcss']
        },
        {
          image: '/skyrim.jpg',
          fname: 'Orlando',
          lname: 'Pernia',
          stars: 5,
          tags: ['gamer', 'racing', 'frontend', 'taliwindcss']
        },
        {
          image: '/skyrim.jpg',
          fname: 'Orlando',
          lname: 'Pernia',
          stars: 5,
          tags: ['gamer', 'racing', 'frontend', 'taliwindcss']
        },
        {
          image: '/skyrim.jpg',
          fname: 'Orlando',
          lname: 'Pernia',
          stars: 5,
          tags: ['gamer', 'racing', 'frontend', 'taliwindcss']
        },
        {
          image: '/skyrim.jpg',
          fname: 'Orlando',
          lname: 'Pernia',
          stars: 5,
          tags: ['gamer', 'racing', 'frontend', 'taliwindcss']
        },
        {
          image: '/skyrim.jpg',
          fname: 'Orlando',
          lname: 'Pernia',
          stars: 5,
          tags: ['gamer', 'racing', 'frontend', 'taliwindcss']
        }
      ]
    }
  }
}
</script>
