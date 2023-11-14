describe ('Login Page tests', function(){
    test('Forgot Password', function(browser) {
      browser
      .url('http://65.21.249.196:5545/login')
      .window.maximize()
      .waitForElementVisible('#login > div > div > div > div > div:nth-child(1) > h2')
      .pause(3000)

      //Forgot Password testcase
      .click('#login > div > div > div > div > div.forgetpassword > a')
      .waitForElementVisible('#login > div > div > div > div > div > h2')
      .pause(2000)

      //Email field blank
      .click('#btn-login')
     
     // .assert.attributeEquals('input[name="email"]', 'required', 'true', 'Please fill out this field (Recover Password).')
      // .assert.valueContains('')
      
      //changes done here
      .assert.elementPresent('#password-recovery-form > div.form-group > div')
      browser.pause(1000)

      //Invalid Email
      .setValue('input[name="email"]', '1234')
      .click('#btn-login')
      .pause(2000)

      // Valid Email
      .setValue('input[name="email"]', 'test@mail.com')
      .click('#btn-login')
      .pause(2000)


      //changes done here
      .assert.textContains('#swal2-html-container','We have sent you an Email.')
      .assert.textContains('#swal2-title','Please check your Mail Box.')
      .click('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled')
      .click('#achor-color')
      .waitForElementVisible('#login > div > div > div > div > div:nth-child(1) > h2')

    }) 

    // // Login Testcases 
    test('Login functionality', function(browser) {
      browser
      //both fields blank
      .setValue('#username', '')
      .setValue('#password', '')
      .click('#btn-login')
      .assert.attributeEquals('#username', 'required', 'true', 'Please fill out this field (Username Login).')
      .pause(2000)

      //Username blank and Password valid
      .setValue('#username', '')
      .setValue('#password', '1234')
      .click('#btn-login')
      .pause(2000)
      .assert.attributeEquals('#username', 'required', 'true', 'Please fill out this field (Username Login).')
      .clearValue('input[name="UserName"]')
      .clearValue('input[name="Password"]')

      //Username Valid and Password blank
      .setValue('#username', 'test')
      .setValue('#password', '')
      .click('#btn-login')
      .pause(2000)
      .assert.attributeEquals('#password', 'required', 'true', 'Please fill out this field (Password Login).')
      .clearValue('input[name="UserName"]')
      .clearValue('input[name="Password"]')

      //Username Invalid and Password Invalid
      .setValue('#username', 'tester')
      .setValue('#password', '123456')
      .click('#btn-login')
      .pause(2000)
      .assert.textContains('#swal2-html-container', 'Incorrect User Name or Password')
      .pause(2000)
      .click('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled')
      .clearValue('input[name="UserName"]')
      .clearValue('input[name="Password"]')

       //Username Valid and Password Invalid
       .setValue('#username', 'hassan')
       .setValue('#password', '123456')
       .click('#btn-login')
       .pause(2000)
       .assert.textContains('#swal2-html-container', 'Incorrect User Name or Password')
       .pause(2000)
       .click('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled')
       .clearValue('input[name="UserName"]')
       .clearValue('input[name="Password"]')

       //Username Invalid and Password Valid
       .setValue('#username', 'tester')
       .setValue('#password', '1234')
       .click('#btn-login')
       .pause(2000)
       .assert.textContains('#swal2-html-container', 'Incorrect User Name or Password')
       .pause(2000)
       .click('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled')
       .clearValue('input[name="UserName"]')
       .clearValue('input[name="Password"]')
      
       //Username Valid and Password Valid
       .setValue('#username', 'hassan')
       .setValue('#password', '1234')
       .click('#btn-login')
       .pause(2000)
       .assert.urlEquals('http://65.21.249.196:5545/')
       .waitForElementVisible('#mainLogo')
       .pause(2000)
       .perform(done => {
        console.log('The script has finished its execution');
        done();
    })
    })
});
