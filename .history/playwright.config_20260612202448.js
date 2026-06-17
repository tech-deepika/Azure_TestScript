// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Location of your test scripts
  testDir: './tests',

  // Maximum time for a single test
  timeout: 60000,

  // Maximum time for assertions
  expect: {
    timeout: 10000,
  },

  // Run tests in parallel
  fullyParallel: true,

  // Prevent accidental test.only in CI/CD
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI
  retries: process.env.CI ? 2 : 0,

  // Reporter configuration
  reporter: [
    ['html', { open: 'always' }]
  ],

  // Common settings for all browsers
  use: {

    // Run browser in headless mode
    headless: true,

    // Take screenshot only if test fails
    screenshot: 'on',

    // Record video only for failed tests
    video: 'retain-on-failure',

    // Save trace for failed tests
    trace: 'retain-on-failure',

   // Ignore SSL certificate errors
    ignoreHTTPSErrors: true,
  },

  // Browser Configuration
  projects: [

    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    }

  ]

});