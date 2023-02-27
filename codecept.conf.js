const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  mocha: {
    reporterOptions: {
        reportDir: "output"
    }
  },
  helpers: {
    Puppeteer: {
      url: 'https://qa-ui.venzee.io/login',
      show: true,
      windowSize: '1200x900'
    },
    ChaiWrapper: {
      require: "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/loginpage.js",
    dashboardPage: "./pages/dashboardpage.js",
    connectionPage: "./pages/connectionspage.js"
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
