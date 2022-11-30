import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  modules: ['nuxt-icon'],
  css: [
    '@/assets/main.scss',
    '@/assets/reset.scss'
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false
  },
  // @ts-ignore
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Open+Sans': true
    }
  },
  hooks: {
    'vite:extendConfig' (config, { isServer }) {
      if (isServer) {
        // Workaround for netlify issue
        // https://github.com/nuxt/framework/issues/6204
        // @ts-ignore
        config.build.rollupOptions.output.inlineDynamicImports = true
      }
    }
  },
  vite: {
    plugins: [
      eslintPlugin()
    ]
  }
})
