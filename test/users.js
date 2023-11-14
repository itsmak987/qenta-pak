describe('Management -> Users',function(){

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
       .url('http://65.21.249.196:5545/Users')
})

// test('PA004 Add new user',function(){

//     browser
//     .click('#SubMer')
//     .pause(2000)
//     .click('select[name="org_id"]')
//     .click('#content > div > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
//     .setValue('input[name="user_name"]','khan123')
//     .setValue('input[name="password"]','1234')
//     .setValue('input[name="confirmPassword"]','1234')
//     .setValue('input[name="mobile"]','3009090091')
//     .setValue('input[name="email"]','a1234@gmail.com')
//     .setValue('input[name="first_name"]','Muammad')
//     .setValue('input[name="middle_name"]','Ali')
//     .setValue('input[name="last_name"]','khan')
//     .click('select[name="role_id"]')
//     .click('#content > div > form > div:nth-child(10) > div.col-sm-8.col-lg-8 > div > select > option:nth-child(2)')
//     .click('#saveButton')
//     .pause(2000)
//     .assert.visible('#swal2-title')
//     .click('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled')
//     })

    test('PA005 Blank user name',function(){

        browser
        .click('#SubMer')
        .pause(2000)
        .click('select[name="org_id"]')
        .click('#content > div > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
        .setValue('input[name="user_name"]','')
        .setValue('input[name="password"]','1234')
        .setValue('input[name="confirmPassword"]','1234')
        .setValue('input[name="mobile"]','3009090091')
        .setValue('input[name="email"]','a1234@gmail.com')
        .setValue('input[name="first_name"]','Muammad')
        .setValue('input[name="middle_name"]','Ali')
        .setValue('input[name="last_name"]','khan')
        .click('select[name="role_id"]')
        .click('#content > div > form > div:nth-child(10) > div.col-sm-8.col-lg-8 > div > select > option:nth-child(2)')
        .click('#saveButton')
        //User name
        .assert.visible('#content > div > form > div:nth-child(2) > div.col-sm-8.col-lg-8 > div > div')
        .pause(3000)
        .click('#resetButton')

        })

    test('PA006 Unselected Organization',function(){

    browser
   
    .pause(2000)
    .setValue('input[name="user_name"]','khan123')
    .setValue('input[name="password"]','1234')
    .setValue('input[name="confirmPassword"]','1234')
    .setValue('input[name="mobile"]','3009090091')
    .setValue('input[name="email"]','a1234@gmail.com')
    .setValue('input[name="first_name"]','Muammad')
    .setValue('input[name="middle_name"]','Ali')
    .setValue('input[name="last_name"]','khan')
    .click('select[name="role_id"]')
    .click('#content > div > form > div:nth-child(10) > div.col-sm-8.col-lg-8 > div > select > option:nth-child(2)')
    .click('#saveButton')
    .pause(2000)
    //Organization
    .assert.visible('#content > div > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > div')
    .click('#resetButton')
    })

test('PA007 Password blank',function(){

    browser
  
    .pause(2000)
    .click('select[name="org_id"]')
    .click('#content > div > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
    .setValue('input[name="user_name"]','khan123')
    .setValue('input[name="password"]','')
    .setValue('input[name="confirmPassword"]','1234')
    .setValue('input[name="mobile"]','3009090091')
    .setValue('input[name="email"]','a1234@gmail.com')
    .setValue('input[name="first_name"]','Muammad')
    .setValue('input[name="middle_name"]','Ali')
    .setValue('input[name="last_name"]','khan')
    .click('select[name="role_id"]')
    .click('#content > div > form > div:nth-child(10) > div.col-sm-8.col-lg-8 > div > select > option:nth-child(2)')
    .click('#saveButton')
    .pause(2000)
    //password
    .assert.visible('#content > div > form > div:nth-child(3) > div.col-sm-8.col-md-8 > div > div')
    .click('#resetButton')
})

test('PA008 Confirm Password blank',function(){

    browser

    .pause(2000)
    .click('select[name="org_id"]')
    .click('#content > div > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
    .setValue('input[name="user_name"]','khan123')
    .setValue('input[name="password"]','1234')
    .setValue('input[name="confirmPassword"]','')
    .setValue('input[name="mobile"]','3009090091')
    .setValue('input[name="email"]','a1234@gmail.com')
    .setValue('input[name="first_name"]','Muammad')
    .setValue('input[name="middle_name"]','Ali')
    .setValue('input[name="last_name"]','khan')
    .click('select[name="role_id"]')
    .click('#content > div > form > div:nth-child(10) > div.col-sm-8.col-lg-8 > div > select > option:nth-child(2)')
    .click('#saveButton')
    .pause(2000)
    //confirm password
    .assert.visible('#content > div > form > div:nth-child(4) > div.col-sm-8.col-lg-8 > div > div')
    .click('#resetButton')
})

test('PA009 Blank Mobil no',function(){

    browser
   
    .pause(2000)
    .click('select[name="org_id"]')
    .click('#content > div > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
    .setValue('input[name="user_name"]','khan123')
    .setValue('input[name="password"]','1234')
    .setValue('input[name="confirmPassword"]','1234')
    .setValue('input[name="mobile"]','')
    .setValue('input[name="email"]','a1234@gmail.com')
    .setValue('input[name="first_name"]','Muammad')
    .setValue('input[name="middle_name"]','Ali')
    .setValue('input[name="last_name"]','khan')
    .click('select[name="role_id"]')
    .click('#content > div > form > div:nth-child(10) > div.col-sm-8.col-lg-8 > div > select > option:nth-child(2)')
    .click('#saveButton')
    .pause(2000)
    //mobile no
    .verify.visible('#content > div > form > div:nth-child(5) > div.col-sm-8.col-lg-8 > div > div.invalid-feedback.error-msg')
    .click('#resetButton')
})

test('PA010 Blank Email',function(){

    browser
  
    .pause(2000)
    .click('select[name="org_id"]')
    .click('#content > div > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
    .setValue('input[name="user_name"]','khan123')
    .setValue('input[name="password"]','1234')
    .setValue('input[name="confirmPassword"]','1234')
    .setValue('input[name="mobile"]','3009090091')
    .setValue('input[name="email"]','')
    .setValue('input[name="first_name"]','Muammad')
    .setValue('input[name="middle_name"]','Ali')
    .setValue('input[name="last_name"]','khan')
    .click('select[name="role_id"]')
    .click('#content > div > form > div:nth-child(10) > div.col-sm-8.col-lg-8 > div > select > option:nth-child(2)')
    .click('#saveButton')
    .pause(2000)
    //email
    .assert.visible('#content > div > form > div:nth-child(6) > div.col-sm-8.col-lg-8 > div > div')
    .click('#resetButton')
})

test('PA011 blank first name',function(){

    browser
  
    .pause(2000)
    .click('select[name="org_id"]')
    .click('#content > div > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
    .setValue('input[name="user_name"]','khan123')
    .setValue('input[name="password"]','1234')
    .setValue('input[name="confirmPassword"]','1234')
    .setValue('input[name="mobile"]','3009090091')
    .setValue('input[name="email"]','a1234@gmail.com')
    .setValue('input[name="first_name"]','')
    .setValue('input[name="middle_name"]','Ali')
    .setValue('input[name="last_name"]','khan')
    .click('select[name="role_id"]')
    .click('#content > div > form > div:nth-child(10) > div.col-sm-8.col-lg-8 > div > select > option:nth-child(2)')
    .click('#saveButton')
    .pause(2000)
    //first name
    .assert.visible('#content > div > form > div:nth-child(7) > div.col-sm-8.col-lg-8 > div > div')
    .click('#resetButton')
})

test('PA012 unselected role',function(){

    browser
    
    .pause(2000)
    .click('select[name="org_id"]')
    .click('#content > div > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
    .setValue('input[name="user_name"]','khan123')
    .setValue('input[name="password"]','1234')
    .setValue('input[name="confirmPassword"]','1234')
    .setValue('input[name="mobile"]','3009090091')
    .setValue('input[name="email"]','a1234@gmail.com')
    .setValue('input[name="first_name"]','Muammad')
    .setValue('input[name="middle_name"]','Ali')
    .setValue('input[name="last_name"]','khan')
    .click('#saveButton')
    .pause(2000)
    //role
    .assert.visible('#content > div > form > div:nth-child(10) > div.col-sm-8.col-lg-8 > div > div')
    .click('#resetButton')    
})

test('PA013 last name blank',function(){

    browser
    
    .pause(2000)
    .click('select[name="org_id"]')
    .click('#content > div > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
    .setValue('input[name="user_name"]','khan123')
    .setValue('input[name="password"]','1234')
    .setValue('input[name="confirmPassword"]','1234')
    .setValue('input[name="mobile"]','3009090091')
    .setValue('input[name="email"]','a1234@gmail.com')
    .setValue('input[name="first_name"]','Muammad')
    .setValue('input[name="middle_name"]','Ali')
    .setValue('input[name="last_name"]','')
    .click('select[name="role_id"]')
    .click('#content > div > form > div:nth-child(10) > div.col-sm-8.col-lg-8 > div > select > option:nth-child(2)')
    .click('#saveButton')
    .pause(2000)
    //last name
    .assert.visible('#content > div > form > div:nth-child(9) > div.col-sm-8.col-lg-8 > div > div')
    .click('#resetButton')
})

test('PA034 All fields blak',function(){

    browser 
    .click('#saveButton')
    .pause(2000)
    //User name
    .assert.visible('#content > div > form > div:nth-child(2) > div.col-sm-8.col-lg-8 > div > div')
    //Organization
    .assert.visible('#content > div > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > div')
    //password
    .assert.visible('#content > div > form > div:nth-child(3) > div.col-sm-8.col-md-8 > div > div')
    //confirm password
    .assert.visible('#content > div > form > div:nth-child(4) > div.col-sm-8.col-lg-8 > div > div')
    //mobile no
    .verify.visible('#content > div > form > div:nth-child(5) > div.col-sm-8.col-lg-8 > div > div.invalid-feedback.error-msg')
    //email
    .assert.visible('#content > div > form > div:nth-child(6) > div.col-sm-8.col-lg-8 > div > div')
    //first name
    .assert.visible('#content > div > form > div:nth-child(7) > div.col-sm-8.col-lg-8 > div > div')
    //last name
    .assert.visible('#content > div > form > div:nth-child(9) > div.col-sm-8.col-lg-8 > div > div')
    //role
    .assert.visible('#content > div > form > div:nth-child(10) > div.col-sm-8.col-lg-8 > div > div')

    .click('#resetButton')
})

test('PA035 existing user data',function(){

    browser
    .pause(2000)
    .click('select[name="org_id"]')
    .click('#content > div > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
    .setValue('input[name="user_name"]','khan123')
    .setValue('input[name="password"]','1234')
    .setValue('input[name="confirmPassword"]','1234')
    .setValue('input[name="mobile"]','3009090091')
    .setValue('input[name="email"]','a1234@gmail.com')
    .setValue('input[name="first_name"]','Muammad')
    .setValue('input[name="middle_name"]','Ali')
    .setValue('input[name="last_name"]','khan')
    .click('select[name="role_id"]')
    .click('#content > div > form > div:nth-child(10) > div.col-sm-8.col-lg-8 > div > select > option:nth-child(2)')
    .click('#saveButton')
    .pause(2000)
    .assert.visible('#swal2-html-container')
    .click('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled')
    .click('#resetButton')
})

test('PA036 Different password',function(){

    browser
    
    .click('select[name="org_id"]')
    .click('#content > div > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
    .setValue('input[name="user_name"]','qaz123')
    .setValue('input[name="password"]','1234')
    .setValue('input[name="confirmPassword"]','4321')
    .setValue('input[name="mobile"]','3009090092')
    .setValue('input[name="email"]','qaz321@gmail.com')
    .setValue('input[name="first_name"]','Muammad')
    .setValue('input[name="middle_name"]','Ali')
    .setValue('input[name="last_name"]','khan')
    .click('select[name="role_id"]')
    .click('#content > div > form > div:nth-child(10) > div.col-sm-8.col-lg-8 > div > select > option:nth-child(2)')
    .click('#saveButton')
    .pause(2000)
    .assert.visible('#content > div > form > div:nth-child(4) > div.col-sm-8.col-lg-8 > div > div')
})

    test('PA022 Reset button',function(browser){
       browser
        .click('select[name="org_id"]')
        .click('#content > div > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
        .setValue('input[name="user_name"]','qaz123')
        .setValue('input[name="password"]','1234')
        .setValue('input[name="confirmPassword"]','4321')
        .setValue('input[name="mobile"]','3009090092')
        .setValue('input[name="email"]','qaz321@gmail.com')
        .setValue('input[name="first_name"]','Muammad')
        .setValue('input[name="middle_name"]','Ali')
        .setValue('input[name="last_name"]','khan')
        .click('select[name="role_id"]')
        .click('#content > div > form > div:nth-child(10) > div.col-sm-8.col-lg-8 > div > select > option:nth-child(2)')
        .click('#resetButton')
        .assert.valueEquals('select[name="org_id"]','')
        .assert.valueEquals('input[name="user_name"]', '')
        .assert.valueEquals('input[name="password"]','')
        .assert.valueEquals('input[name="confirmPassword"]','')
        .assert.valueEquals('input[name="mobile"]','')
        .assert.valueEquals('input[name="email"]','')
        .assert.valueEquals('input[name="first_name"]','')
        .assert.valueEquals('input[name="middle_name"]','')
        .assert.valueEquals('input[name="last_name"]','')
        .assert.valueEquals('select[name="role_id"]','')
        
        
    })

    test('PA023 Back button',function(browser){
        browser
         .click('select[name="org_id"]')
         .click('#content > div > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
         .setValue('input[name="user_name"]','qaz123')
         .setValue('input[name="password"]','1234')
         .setValue('input[name="confirmPassword"]','4321')
         .setValue('input[name="mobile"]','3009090092')
         .setValue('input[name="email"]','qaz321@gmail.com')
         .setValue('input[name="first_name"]','Muammad')
         .setValue('input[name="middle_name"]','Ali')
         .setValue('input[name="last_name"]','khan')
         .click('select[name="role_id"]')
         .click('#content > div > form > div:nth-child(10) > div.col-sm-8.col-lg-8 > div > select > option:nth-child(2)')
         .click('#Button')
         browser
         .url(function(result) {
           const currentURL = result.value;
           //console.log('Current URL:', currentURL); // Print the current URL to the console
           this.assert.strictEqual(currentURL,'http://65.21.249.196:5545/Users');
         })
    }) 
})
