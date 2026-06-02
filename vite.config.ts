export default defineConfig({
  base: '/ubuntu-web-os/',   // 👈 correct for GitHub Pages
  plugins: [inspectAttr(), react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
