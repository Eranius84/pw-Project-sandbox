import { Locator, Page, test } from '@playwright/test';
import { expect } from '@playwright/test';
import { UrlConfig } from '../../helpers/urlConfig';
import { Console } from 'console';

test.beforeEach(async ({ page }) => {
  const testURL = new UrlConfig('test')
  await page.goto(testURL.url)


  // click add new computer 
  await page.locator('#add').click();
});

test('AddNewComputer - verify brand list', async ({ page }) => {
  const dropdownRoot = await page.locator('#company')
  const companyDefaultText = await dropdownRoot.locator('.blank').innerText()

  await expect(companyDefaultText).toBe('-- Choose a company --')

  const options = await dropdownRoot.locator('option').elementHandles()

  for await (const option of options) {
    const value = await option.innerText()

  }
  const op3value = await options[3].textContent()
  expect(op3value).toBe('RCA')
});
test.afterEach(async({page}) => {
await page.close()

})