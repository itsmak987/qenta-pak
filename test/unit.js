describe('unit test case testing', function () {
  test('PA001 users records',function(browser){

    browser
    browser
    .url('http://65.21.249.196:5545/login')
    .setValue('#username','hassan')
    .setValue('#password','1234')
    .click('#btn-login')
    .maximizeWindow()
   // .url('http://65.21.249.196:5545/')
    .pause('3000')
    browser.element.findByText('Management').click();
   browser
   .click('#sidebar > ul > li:nth-child(2) > ul > li:nth-child(2) > a')
   browser.pause(3000)
   //.url('http://65.21.249.196:5545/Users')
   //.click('#SubMer')
})



  });