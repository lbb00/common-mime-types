import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const entry = {
  index: './src/index.ts',
}

export default defineConfig({
  build: {
    lib: {
      entry,
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        if (format === 'es') return `${entryName}.js`
        return `${entryName}.${format}`
      },
    },
  },
  plugins: [
    dts({
      entryRoot: 'src',
      rollupTypes: true,
    }),
  ],
})
