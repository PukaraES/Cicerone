<template>
  <div>
    <main class="md:pl-20 w-125 h-80 mb-10">
      <div>
        <img :src="location.image != undefined ? location.image.value : 'default.jpg'" alt="img" class="w-80 h-auto sm:h-40 sm:col-span-2 lg:col-span-full rounded-lg shadow-2xl border-solid border border-black" loading="lazy">
      </div>
      <div class="max-w-4xl mx-auto">
        <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 class="mt-1 text-lg font-semibold text-dark sm:text-slate-900 md:text-2xl dark:sm:text-dark">
            {{ location.placeLabel.value }}
          </h1>
        </div>
        <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          <dt class="sr-only">Reviews</dt>
          <dd class="text-green flex items-center dark:text-green">
            <svg width="30" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
              <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="capitalize">Que es?</span>
          </dd>
          <dt class="sr-only">Location</dt>
          <dd class="flex items-center">
            <svg width="2" height="2" aria-hidden="true" fill="green" class="mx-3 text-slate-300">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <svg
              width="24"
              height="24"
              fill="green"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-1 text-slate-400 dark:text-slate-500"
              aria-hidden="true"
            >
              <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
              <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            </svg>
            {{ typeof(location.image) }}
          </dd>
        </dl>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LocationCard',
  props: ['location', 'image']

}
</script>
