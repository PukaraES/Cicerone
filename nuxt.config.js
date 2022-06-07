export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wikilocal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,viewport-fit=cover' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: 'lightblue' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      title: 'wikilocal',
      shortname: 'wikilocal',
      theme_color: 'lightblue',
      display: 'standalone',
      description: 'La mejor idea para hacer turismo inteligente'
    } // we have to add icons that are going to be added on the folder .nuxt/dist/client/icons
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
