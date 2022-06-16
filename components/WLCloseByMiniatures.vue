<template>
  <div class="w-4/5 p-4 mt-8 mb-12">
    <div class="grid md:grid-cols-3 md:grid-rows-2 gap-4">
      <a v-for="data, index in array" :key="'min-'+index" href="#" target="_blank" class="inline-block group mb-4 md:mb-12 rounded-lg shadow-xl md:hover:bg-teal-500 transition overflow-hidden">

        <img :src="data.image" :alt="'image-'+index" class="w-full h-48 rounded-lg object-cover">

        <p class="text-gray-700 md:group-hover:text-white font-bold text-2xl my-4 mx-4">
          {{ data.site }}
        </p>

        <p class="inline-block mb-6 mx-4">
          <i class="fas fa-tag text-teal-500 mr-2 md:group-hover:text-white"></i>
          <em class="text-gray-500 md:group-hover:text-white">
            {{ data.description }}
          </em>
        </p>
      </a>
    </div>

    <hr class="border my-6 md:my-0 md:mb-4">

    <div class="flex justify-center">
      <p class="text-gray-500 md:hover:text-white rounded-lg md:hover:bg-gray-500 mr-8 h-6 transition overflow-hidden">
        <a href="#" class="block w-full h-full text-center px-4"><i class="fa-solid fa-arrow-left-long"></i> <span class="hidden md:inline">Previous</span></a>
      </p>
      <p v-for="page, index in pages" :key="'page-'+index" class="text-gray-500 md:hover:text-white rounded-lg md:hover:bg-gray-500 mx-2 w-6 h-6 transition overflow-hidden">
        <a href="#" class="block w-full h-full text-center">
          {{ page }}
        </a>
      </p>
      <p class="text-gray-500 md:hover:text-white rounded-lg md:hover:bg-gray-500 ml-8 h-6 transition overflow-hidden">
        <a href="#" class="block w-full h-full text-center px-4"><span class="hidden md:inline">Next</span> <i class="fa-solid fa-arrow-right-long"></i></a>
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
          image: 'images/default.webp',
          site: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed ipsam doloremque rem esse. Eaque quidem dignissimos quisquam, sequi similique explicabo in esse, dolores nesciunt ducimus fuga sunt est. Natus.'
        },
        {
          image: 'images/default.webp',
          site: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed ipsam doloremque rem esse. Eaque quidem dignissimos quisquam, sequi similique explicabo in esse, dolores nesciunt ducimus fuga sunt est. Natus.'
        },
        {
          image: 'images/default.webp',
          site: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed ipsam doloremque rem esse. Eaque quidem dignissimos quisquam, sequi similique explicabo in esse, dolores nesciunt ducimus fuga sunt est. Natus.'
        },
        {
          image: 'images/default.webp',
          site: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed ipsam doloremque rem esse. Eaque quidem dignissimos quisquam, sequi similique explicabo in esse, dolores nesciunt ducimus fuga sunt est. Natus.'
        },
        {
          image: 'images/default.webp',
          site: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed ipsam doloremque rem esse. Eaque quidem dignissimos quisquam, sequi similique explicabo in esse, dolores nesciunt ducimus fuga sunt est. Natus.'
        },
        {
          image: 'images/default.webp',
          site: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed ipsam doloremque rem esse. Eaque quidem dignissimos quisquam, sequi similique explicabo in esse, dolores nesciunt ducimus fuga sunt est. Natus.'
        }
      ]
    }
  }
}
</script>
