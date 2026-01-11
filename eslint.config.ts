import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    pnpm: true,
    react: true,
  },
  {
    ignores: ['./src/routeTree.gen.ts'],
  },
)
