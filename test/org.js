describe('Organization setup-> Create Merchant screeen',function(){

    test('PA001 display registered merchants', function(broswer){

        browser
            .url('http://65.21.249.196:5545/login')
            .setValue('#username','hassan')
            .setValue('#password','1234')
            .click('#btn-login')
            .maximizeWindow()
           // .url('http://65.21.249.196:5545/')
            .pause('3000')
            browser.element.findByText('Admin').click();
           browser
           .click('#sidebar > ul > li:nth-child(1) > ul > li > a')
           .click('#sidebar > ul > li:nth-child(1) > ul > li > ul > li:nth-child(1) > a')
           browser.pause(3000)
           .url('http://65.21.249.196:5545/Organizations')
    })

    test('PA011 Add button functionality',function(){

        browser
        .click('#content > div:nth-child(2) > button')
        .pause(2000)
    })

    // test('PA013 create Merchant',function(browser){
    //     browser
    //     .setValue('input[name="Org_Code"]','099')
    //     .setValue('input[name="Merchant_Name"]','Muhammad Ali khan')
    //     .setValue('input[name="Entity_Code"]','MAK')
    //     .setValue('input[name="Address"]','abc123')
    //     .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select')
    //     .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(2)')
    //     .setValue('input[name="City_Name"]','Lahore')
    //     .setValue('input[name="Email"]','abc@gmail.com')
    //     .setValue('input[name="Post_Url"]','Mob')
    //     .click('select[name="Settlement_Id"]').click('#content > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(4)')
    //     .click('select[name="surcharge"]').click('#content > form > div:nth-child(3) > div:nth-child(2) > select > option:nth-child(3)')
    //     .click('input[name="Partner"]')
    //     .setValue('input[name="Commission"]','2')
    //     .click('#saveButton')
    //     .pause(3000)
    // })

    test('PA016 all fields blank',function(browser){

        browser
        .click('#saveButton')
        //merchant code
        .assert.visible('#content > form > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div')
        //merchant name
        .assert.visible('#content > form > div:nth-child(1) > div:nth-child(2) > div')
        //merchant short code
        .assert.visible('#content > form > div:nth-child(1) > div:nth-child(3) > div')
        //merchant address
        .assert.visible('#content > form > div:nth-child(1) > div:nth-child(4) > div')
        //merchant city
        .assert.visible('#content > form > div:nth-child(2) > div:nth-child(2) > div')
        //emial
        .assert.visible('#content > form > div:nth-child(2) > div:nth-child(3) > div')
        //post url
        .assert.visible('#content > form > div:nth-child(2) > div:nth-child(4) > div')
        .pause(3000)
        
        })

        test('PA017 blank merchant code',function(browser){

            browser
           
            .setValue('input[name="Merchant_Name"]','Muhammad Ali khan')
            .setValue('input[name="Entity_Code"]','MAK')
            .setValue('input[name="Address"]','abc123')
            .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select')
            .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(2)')
            .setValue('input[name="City_Name"]','Lahore')
            .setValue('input[name="Email"]','abc@gmail.com')
            .setValue('input[name="Post_Url"]','Mob')
            .click('select[name="Settlement_Id"]').click('#content > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(4)')
            .click('select[name="surcharge"]').click('#content > form > div:nth-child(3) > div:nth-child(2) > select > option:nth-child(3)')
            .click('input[name="Partner"]')
            .setValue('input[name="Commission"]','2')
            .click('#saveButton')
            .pause(3000)
             //merchant code
            .assert.visible('#content > form > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div')
            .click('#content > div > button.btn.btn-info')
            
        })

        test('PA018 Merchant name blank',function(browser){
            browser
            .setValue('input[name="Org_Code"]','099')
            .setValue('input[name="Entity_Code"]','MAK')
            .setValue('input[name="Address"]','abc123')
            .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select')
            .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(2)')
            .setValue('input[name="City_Name"]','Lahore')
            .setValue('input[name="Email"]','abc@gmail.com')
            .setValue('input[name="Post_Url"]','Mob')
            .click('select[name="Settlement_Id"]').click('#content > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(4)')
            .click('select[name="surcharge"]').click('#content > form > div:nth-child(3) > div:nth-child(2) > select > option:nth-child(3)')
            .click('input[name="Partner"]')
            .setValue('input[name="Commission"]','2')
            .click('#saveButton')
            .pause(3000)
             //merchant name
        .assert.visible('#content > form > div:nth-child(1) > div:nth-child(2) > div')
        .click('#content > div > button.btn.btn-info')
        })

        test('PA019 Merchant short code blank',function(browser){
            browser
            .setValue('input[name="Org_Code"]','099')
            .setValue('input[name="Merchant_Name"]','Muhammad Ali khan')
            .setValue('input[name="Address"]','abc123')
            .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select')
            .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(2)')
            .setValue('input[name="City_Name"]','Lahore')
            .setValue('input[name="Email"]','abc@gmail.com')
            .setValue('input[name="Post_Url"]','Mob')
            .click('select[name="Settlement_Id"]').click('#content > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(4)')
            .click('select[name="surcharge"]').click('#content > form > div:nth-child(3) > div:nth-child(2) > select > option:nth-child(3)')
            .click('input[name="Partner"]')
            .setValue('input[name="Commission"]','2')
            .click('#saveButton')
            .pause(3000)
             //merchant short code
        .assert.visible('#content > form > div:nth-child(1) > div:nth-child(3) > div')
        .click('#content > div > button.btn.btn-info')
        })

        test('PA020 Merchant address blank',function(browser){
            browser
            .setValue('input[name="Org_Code"]','099')
            .setValue('input[name="Merchant_Name"]','Muhammad Ali khan')
            .setValue('input[name="Entity_Code"]','MAK')
            .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select')
            .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(2)')
            .setValue('input[name="City_Name"]','Lahore')
            .setValue('input[name="Email"]','abc@gmail.com')
            .setValue('input[name="Post_Url"]','Mob')
            .click('select[name="Settlement_Id"]').click('#content > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(4)')
            .click('select[name="surcharge"]').click('#content > form > div:nth-child(3) > div:nth-child(2) > select > option:nth-child(3)')
            .click('input[name="Partner"]')
            .setValue('input[name="Commission"]','2')
            .click('#saveButton')
            .pause(3000)
            //merchant address
        .assert.visible('#content > form > div:nth-child(1) > div:nth-child(4) > div')
        .click('#content > div > button.btn.btn-info')
        })

        test('PA021 Merchant city blank',function(browser){
            browser
            .setValue('input[name="Org_Code"]','099')
            .setValue('input[name="Merchant_Name"]','Muhammad Ali khan')
            .setValue('input[name="Entity_Code"]','MAK')
            .setValue('input[name="Address"]','abc123')
            .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select')
            .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(2)')
            .setValue('input[name="Email"]','abc@gmail.com')
            .setValue('input[name="Post_Url"]','Mob')
            .click('select[name="Settlement_Id"]').click('#content > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(4)')
            .click('select[name="surcharge"]').click('#content > form > div:nth-child(3) > div:nth-child(2) > select > option:nth-child(3)')
            .click('input[name="Partner"]')
            .setValue('input[name="Commission"]','2')
            .click('#saveButton')
            .pause(3000)
             //merchant city
        .assert.visible('#content > form > div:nth-child(2) > div:nth-child(2) > div')
        .click('#content > div > button.btn.btn-info')
        })

        test('PA022 Email blank',function(browser){
            browser
            .setValue('input[name="Org_Code"]','099')
            .setValue('input[name="Merchant_Name"]','Muhammad Ali khan')
            .setValue('input[name="Entity_Code"]','MAK')
            .setValue('input[name="Address"]','abc123')
            .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select')
            .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(2)')
            .setValue('input[name="City_Name"]','Lahore')
            .setValue('input[name="Post_Url"]','Mob')
            .click('select[name="Settlement_Id"]').click('#content > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(4)')
            .click('select[name="surcharge"]').click('#content > form > div:nth-child(3) > div:nth-child(2) > select > option:nth-child(3)')
            .click('input[name="Partner"]')
            .setValue('input[name="Commission"]','2')
            .click('#saveButton')
            .pause(3000)
            //emial
        .assert.visible('#content > form > div:nth-child(2) > div:nth-child(3) > div')
        .click('#content > div > button.btn.btn-info')
        })

        test('PA023 Post url blank',function(browser){
            browser
            .setValue('input[name="Org_Code"]','099')
            .setValue('input[name="Merchant_Name"]','Muhammad Ali khan')
            .setValue('input[name="Entity_Code"]','MAK')
            .setValue('input[name="Address"]','abc123')
            .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select')
            .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(2)')
            .setValue('input[name="City_Name"]','Lahore')
            .setValue('input[name="Email"]','abc@gmail.com')
            .click('select[name="Settlement_Id"]').click('#content > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(4)')
            .click('select[name="surcharge"]').click('#content > form > div:nth-child(3) > div:nth-child(2) > select > option:nth-child(3)')
            .click('input[name="Partner"]')
            .setValue('input[name="Commission"]','2')
            .click('#saveButton')
            .pause(3000)
             //post url
        .assert.visible('#content > form > div:nth-child(2) > div:nth-child(4) > div')
        .click('#content > div > button.btn.btn-info')
        })

        // test('PA028 Existing merchant code',function(browser){
        //         browser
        //         .setValue('input[name="Org_Code"]','10')
        //         .setValue('input[name="Merchant_Name"]','Muhammad Ali khan')
        //         .setValue('input[name="Entity_Code"]','MAK')
        //         .setValue('input[name="Address"]','abc123')
        //         .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select')
        //         .click('#content > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(2)')
        //         .setValue('input[name="City_Name"]','Lahore')
        //         .setValue('input[name="Email"]','abc@gmail.com')
        //         .setValue('input[name="Post_Url"]','Mob')
        //         .click('select[name="Settlement_Id"]').click('#content > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > select > option:nth-child(4)')
        //         .click('select[name="surcharge"]').click('#content > form > div:nth-child(3) > div:nth-child(2) > select > option:nth-child(3)')
        //         .click('input[name="Partner"]')
        //         .setValue('input[name="Commission"]','2')
        //         .click('#saveButton')
        //         .pause(3000)
        //     })


         // test('PA029 Optional fields blank',function(browser){
        //         browser
        //         .setValue('input[name="Org_Code"]','090')
        //         .setValue('input[name="Merchant_Name"]','Muhammad Ali khan')
        //         .setValue('input[name="Entity_Code"]','MAK')
        //         .setValue('input[name="Address"]','abc123')
        //         .setValue('input[name="City_Name"]','Lahore')
        //         .setValue('input[name="Email"]','abc@gmail.com')
        //         .setValue('input[name="Post_Url"]','Mob')
        //         .click('#saveButton')
        //         .pause(3000)
        //     })
        
        
})