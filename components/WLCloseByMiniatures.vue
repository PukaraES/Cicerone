<template>
  <div class="w-4/5 p-4 mt-8 mb-32">
    <div class="grid grid-cols-3 gap-4">
      <div v-for="data, index in array" :key="'min-'+index" class="w-full h-auto rounded-lg">
        <div>
          <p class="absolute text-xl bg-slate-500 rounded-md text-white px-2 py-1 transform translate-x-2 translate-y-2">
            {{ data.tier }}
          </p>
          <img :src="'dist/'+data.image" :alt="'image-'+index" class="w-full h-full border rounded-lg shadow-md object-cover">
        </div>
        <p class="font-bold text-2xl px-2">
          {{ data.site }}
        </p>
        <p class="inline-block m-2">
          <i class="fas fa-tag"></i>
          <em v-for="tag, tindex in data.tags" :key="'tag-'+tindex" class="inline">
            {{ tag }}
          </em>
        </p>
        <p class="inline-block m-2">
          <i class="fas fa-location"></i>
          {{ data.city }}
        </p>
        <p class="px-2">
          <i v-for="stars, sindex in data.stars" :key="'star-'+sindex" class="fas fa-star inline-block mx-1 my-2"></i>
        </p>
      </div>
    </div>

    <hr class="border my-4">

    <div class="flex justify-center">
      <p class="block hover:text-white rounded-lg hover:bg-slate-500 mr-8 h-6 transition overflow-hidden">
        <a href="#" class="block w-full h-full text-center px-4"><i class="fa-solid fa-arrow-left-long"></i> Previous</a>
      </p>
      <p v-for="page, index in pages" :key="'page-'+index" class="block hover:text-white rounded-lg hover:bg-slate-500 mx-2 w-6 h-6 transition overflow-hidden">
        <a href="#" class="block w-full h-full text-center">
          {{ page }}
        </a>
      </p>
      <p class="block hover:text-white rounded-lg hover:bg-slate-500 ml-8 h-6 transition overflow-hidden">
        <a href="#" class="block w-full h-full text-center px-4">Next <i class="fa-solid fa-arrow-right-long"></i></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WLCloseByMiniatures',
  data () {
    return {
      pages: [
        1,
        2,
        3
      ],
      array: [
        {
          tier: 'Gratuito',
          image: '/default.webp',
          site: 'Lorem ipsum',
          city: 'Ciudad',
          stars: 5,
          tags: ['monument', 'building', 'historic']
        },
        {
          tier: 'Gratuito',
          image: '/default.webp',
          site: 'Lorem ipsum',
          city: 'Ciudad',
          stars: 5,
          tags: ['monument', 'building', 'historic']
        },
        {
          tier: 'Gratuito',
          image: '/default.webp',
          site: 'Lorem ipsum',
          city: 'Ciudad',
          stars: 5,
          tags: ['monument', 'building', 'historic']
        },
        {
          tier: 'Gratuito',
          image: '/default.webp',
          site: 'Lorem ipsum',
          city: 'Ciudad',
          stars: 5,
          tags: ['monument', 'building', 'historic']
        },
        {
          tier: 'Gratuito',
          image: '/default.webp',
          site: 'Lorem ipsum',
          city: 'Ciudad',
          stars: 5,
          tags: ['monument', 'building', 'historic']
        },
        {
          tier: 'Gratuito',
          image: '/default.webp',
          site: 'Lorem ipsum',
          city: 'Ciudad',
          stars: 5,
          tags: ['monument', 'building', 'historic']
        }
      ]
    }
  }
}
</script>
