export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'complete-nuxt-js-2-4-create-nuxt-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: '/socket.io/socket.io.js' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '~/plugins/socket.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // 'nuxt-socket-io',
  ],

  // io: {
  //   // module options
  //   sockets: [{
  //     url: 'http://localhost:3000'
  //   }]
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  router: {
    linkExactActiveClass: 'active',
    // middleware: ["mw_cookie"]
  }

}
