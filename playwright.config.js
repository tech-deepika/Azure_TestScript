// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Location of your test scripts
  testDir: './tests',

  // Maximum time for a single test
  timeout: 60000,

  // Maximum time for assertions
  expect: {
    timeout: 30000,
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
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
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