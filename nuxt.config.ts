export default defineNuxtConfig({
    experimental: {
        reactivityTransform: true,
        viteNode: false
    },
    hooks: {
        'vite:extendConfig'(config, { isServer }) {
            if (isServer) {
                // Workaround for netlify issue
                // https://github.com/nuxt/framework/issues/6204
                // @ts-ignore
                config.build.rollupOptions.output.inlineDynamicImports = true
            }
        }
    },
})
