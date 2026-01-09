import path from 'node:path'
import mdx from '@mdx-js/rollup'
import rehypeShiki from '@shikijs/rehype'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
// import generateSitemap from 'vite-ssg-sitemap'
import 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        rehypePlugins: [
          [
            rehypeShiki,
            {
              themes: {
                dark: 'vitesse-dark',
                light: 'vitesse-light',
              },
            },
          ],
        ],
      }),
    },

    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'React Vitesse',
        short_name: 'React Vitesse',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],

  // https://github.com/vitest-dev/vitest
  // test: {
  // include: ['test/**/*.test.ts'],
  // environment: 'jsdom',
  // },

  // https://github.com/antfu/vite-ssg
  /* ssgOptions: {
    script: 'async',
    formatting: 'minify',
    beastiesOptions: {
      reduceInlineStyles: false,
    },
    onFinished() {
      generateSitemap()
    },
  }, */

  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window'],
  },
})
