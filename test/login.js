describe('Qenta Pak login',function(){

    test('Navigate to url', function(browser){

        browser.navigateTo("http://65.21.249.196:5545/login");
        
    })

    test('PA001 Valid login', function(broswer){

        browser
            .setValue('#username','hassan')
            .setValue('#password','1234')
            .click('#btn-login')
            .maximizeWindow()
            .pause('3000')
            .end()
    })

    test('PA002 invalid login', function(browser){
        browser
            .url('http://65.21.249.196:5545/login')
            .setValue('#username','aqaq')
            .setValue('#password','4323')
            .click('#btn-login')
            .waitForElementVisible('#swal2-html-container',3000)
            .verify.containsText('#swal2-html-container','Incorrect User Name or Password')
            .pause('3000')
            .end();
    })

    test('PA003 invalid username and valid password',function(browser){
        browser
        .url('http://65.21.249.196:5545/login')
        .setValue('#username','aqaq')
        .setValue('#password','1234')
        .click('#btn-login')
        .waitForElementVisible('#swal2-html-container',3000)
        .verify.containsText('#swal2-html-container','Incorrect User Name or Password')
        .end();
    })

    test('PA004 Valid username and invalid password',function(browser){

        browser
        .url('http://65.21.249.196:5545/login')
        .setValue('#username','hassan')
        .setValue('#password','4321')
        .click('#btn-login')
        .waitForElementVisible('#swal2-html-container',3000)
        .verify.containsText('#swal2-html-container','Incorrect User Name or Password')
        .end();
    })

    test('PA005 blank username and password',function(browser){

        browser
        .url('http://65.21.249.196:5545/login')
        .click('#btn-login')
        .waitForElementVisible('input[name="UserName"]', 5000)
           .expect.element('#username').to.have.attribute('required');
     
            browser.end()
    
    })

    test('PA006 empty username and valid password',function(browser){

        browser
        .url('http://65.21.249.196:5545/login')
        .setValue('#password','1234')
        .click('#btn-login')
        .waitForElementVisible('input[name="UserName"]',3000)
        .expect.element('#username').to.have.attribute('required');
        browser.end();
    })

    test('PA007 valid username and blank password',function(browser){

        browser
        .url('http://65.21.249.196:5545/login')
        .setValue('#username','hassan')
        .click('#btn-login')
        .waitForElementVisible('input[name="Password"]',3000)
        .expect.element('#password').to.have.attribute('required');
        browser.end();
    })

    test('PA011 Login by Enter key', async function (browser) {
     
        browser.navigateTo('http://65.21.249.196:5545/login') 
        browser
         .setValue('#username','hassan')
         .setValue('#password','1234')
         .perform(function(client, done) {
           const actions = client.actions({ async: true });
           
           actions.sendKeys(client.Keys.ENTER).perform(
             done() // Call the done() function to signal completion
           );
         });
         browser.pause(3000);
         browser
         .url(function(result) {
           const currentURL = result.value;
           //console.log('Current URL:', currentURL); // Print the current URL to the console
           this.assert.strictEqual(currentURL,'http://65.21.249.196:5545/');
         })
       
         
       });
})