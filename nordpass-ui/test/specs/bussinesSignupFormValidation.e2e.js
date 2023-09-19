describe('Bussines free trial form', () => {
    it('does not allow the users to sign up without providing valid company data', async () => {
      await browser.url('/')
      await $('button.cursor-pointer').click()
      await $('button[type="button"][class*="nord-button"][wrapperclassname="w-full"]').click();
      const bussinesLink = $('a[href="/business-password-manager/"]');
      bussinesLink.click()
      await $(`=${"Start 14-day Free Trial"}`).click()
      await browser.pause(1000)
      await $('button.cursor-pointer').click()
      await expect($('strong=This field is mandatory')).toExist()
      const warningMessageNumber = await $$('strong=This field is mandatory')
      await expect(warningMessageNumber).toBeElementsArrayOfSize(6)
    })
  })
