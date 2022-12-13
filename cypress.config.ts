import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  viewportWidth: 1024,
  viewportHeight: 900,
  chromeWebSecurity: false,
  retries: 1,

  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.spec.ts'
  }
});