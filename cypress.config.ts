import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  viewportWidth: 1024,
  viewportHeight: 900,
  taskTimeout: 2000,
  chromeWebSecurity: false,
  retries: 1,
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.ts'
  }
});
