describe('Login form', () => {
    it('does allow not bot accounts to log in to the system', async () => {
      await browser.url('https://app.nordpass.com/login')
      await $('div=Log In').waitForClickable(true)
      await $('div=Log In').click()
      await $('[data-testid="email"]').waitForClickable(true)
      await $('[data-testid="email"]').setValue('notauser@remigijus.lt')
      await $('div=Continue').click()
      await $('[data-testid="signin-password-input"]').setValue('thisIsNotAPassword')
      await $('[data-testid="signin-button"]').waitForClickable(true)
      await $('[data-testid="signin-button"]').click()
      await expect($('p.nord-text.text-small.leading-normal.text-color-secondary.font-medium.text-center.mb-8')).toExist()
    })
  })
