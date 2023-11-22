describe('add new role',function(){

    test('add role',function(browser){

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
        .click('#sidebar > ul > li:nth-child(2) > ul > li:nth-child(1) > a')
        .pause(2000)
        .click('#SubMer')
        .click('#content > div > div.form-dialog.open > div > div.container > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(1)')
        .click('#content > div > div.form-dialog.open > div > div.container > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
        .setValue('input[name="role"]','demo04')
        .click('#content > div > div.form-dialog.open > div > div.container > form > div.clearfix.form-actions > div > button.btn.btn-primary')
        .pause(2000)
        .assert.visible('#swal2-title')
        .click('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled')
    })

    test('existing role',function(browser){
       browser
        .click('#SubMer')
        .click('#content > div > div.form-dialog.open > div > div.container > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(1)')
        .click('#content > div > div.form-dialog.open > div > div.container > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
        .setValue('input[name="role"]','demo01') 
        .click('#content > div > div.form-dialog.open > div > div.container > form > div.clearfix.form-actions > div > button.btn.btn-primary')
        .assert.visible('#swal2-title')
        .click('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled')
    })

    test('blank fields',function(browser){
        //both blank
        browser
        .click('#SubMer')
        .click('#content > div > div.form-dialog.open > div > div.container > form > div.clearfix.form-actions > div > button.btn.btn-primary')
        .assert.visible('#content > div > div.form-dialog.open > div > div.container > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > div')
        .assert.visible('#content > div > div.form-dialog.open > div > div.container > form > div:nth-child(2) > div.col-sm-8.col-md-8.col-lg-8 > div > div')
        // organization blank

        .setValue('input[name="role"]','demo01') 
        .click('#content > div > div.form-dialog.open > div > div.container > form > div.clearfix.form-actions > div > button.btn.btn-primary')
        .assert.visible('#content > div > div.form-dialog.open > div > div.container > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > div')
        .clearValue('input[name="role"]')
        // blank role
        .click('#content > div > div.form-dialog.open > div > div.container > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(1)')
        .click('#content > div > div.form-dialog.open > div > div.container > form > div:nth-child(1) > div.col-sm-8.col-md-8.col-lg-8 > div > select > option:nth-child(2)')
        .click('#content > div > div.form-dialog.open > div > div.container > form > div.clearfix.form-actions > div > button.btn.btn-primary')
       

    })

})