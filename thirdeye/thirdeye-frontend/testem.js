'use strict';

module.exports = {
  framework: 'qunit',
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  browser_disconnect_timeout: 500,
  browser_start_timeout: 90,
  launch_in_ci: ['Chrome'],
  launch_in_dev: ['Chrome', 'Firefox'],
  browser_args: {
    Chrome: {
      ci: [
        // --no-sandbox is needed when running Chrome inside a container
        process.env.TRAVIS ? '--no-sandbox' : null,
        '--disable-gpu',
        '--headless',
        '--disable-dev-shm-usage',
        '--disable-software-rasterizer',
        '--mute-audio',
        '--remote-debugging-port=0',
        '--window-size=1440,900'
      ].filter(Boolean)
    },
    Firefox: {
      mode: 'ci',
      args: ['-headless', '--window-size=1440,900']
    }
  }
};
