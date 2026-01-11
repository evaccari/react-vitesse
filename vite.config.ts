import path from 'node:path'
import mdx from '@mdx-js/rollup'
import rehypeShiki from '@shikijs/rehype'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    // https://github.com/mdx-js/mdx
    {
      enforce: 'pre',
      ...mdx({
        rehypePlugins: [
          [
            // https://github.com/shikijs/shiki
            rehypeShiki,
            {
              defaultColor: false,
              themes: {
                dark: 'vitesse-dark',
                light: 'vitesse-light',
              },
            },
          ],
        ],
      }),
    },

    tanstackRouter({
      autoCodeSplitting: true,
      target: 'react',
    }),

    // https://github.com/vitejs/vite-plugin-react
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),

    // https://github.com/sapphi-red/vite-plugin-static-copy
    viteStaticCopy({
      targets: [
        {
          dest: '.',
          src: 'locales',
        },
      ],
    }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
  },
})
