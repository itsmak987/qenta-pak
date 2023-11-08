describe('Qenta Pak non functional',function(){

    test('check title ', function(browser){
        browser
        .url('http://65.21.249.196:5545/login')
        .verify.titleContains('React App');

    })

    test(  'PA008 Cursor position', function (browser){
          browser
          .url('http://65.21.249.196:5545/login')
          .maximizeWindow()
          .pause('3000')
          .execute(function() {
              const usernameInput = document.querySelector('input[name="UserName"]');
              return usernameInput === document.activeElement;
            }, [], function(result) {
              if (result.value === true) {
                console.log('Cursor is in the username field.');
              } else {
                console.log('Cursor is not in the username field.');
              }
              browser.end()
            });
         
      });
  
     test( 'PA010 Check password is masked', function (browser){
          browser
          .url('http://65.21.249.196:5545/login')
          .setValue('#username','hassan')
          .setValue('#password','1234')
          browser.waitForElementPresent('input[type="Password"]', 10000, false);
  
          // Check if the password input field has the 'password' type attribute
          browser.getAttribute('input[type="Password"]', 'type', function(result) {
            if (result.value === 'Password') {
              console.log('Password field is masked.');
            } else {
              console.log('Password field is not masked.');
            }
          });
          
      });
  })