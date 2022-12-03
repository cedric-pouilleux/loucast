import eslintPlugin from 'vite-plugin-eslint'
import glsl from 'vite-plugin-glsl'

export default defineNuxtConfig({
  css: [
    '@/assets/fonts/space-grotesk/SpaceGrotesk.scss',
    '@/assets/fonts/open-sans/OpenSans.scss',
    '@/assets/reset.scss',
    '@/assets/main.scss'
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false
  },
  modules: [
    'nuxt-icon'
  ],
  plugins: [
    { src: '~/plugins/v-tweakpane', mode: 'client' }
  ],
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
      eslintPlugin(),
      glsl()
    ]
  }
})
