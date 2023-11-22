module.exports = {


'@tags':['google','sanity'],
  'Login1': function (browser) {
    // Test steps for login scenario 1
    browser.url('https://www.google.com/')
    browser.pause(3000)
  },


  '@tags': ['facebook','sanity'],
  'Login2': function (browser) {
    // Test steps for login scenario 1
    browser.url('https://www.facebook.com')
    browser.pause(3000)
  }

};

