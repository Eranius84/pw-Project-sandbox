import { test, expect, Locator } from '@playwright/test';
import { link } from 'fs';


test.beforeEach(async ({ page }) => {
  const  testURL = 'https://computer-database.gatling.io/computers'
  await page.goto(testURL);
});

test.describe('Add new Computer page', () => {
  test('Add new computer - fill inputs  ', async ({ page }) => {


    // click add new computer 
    await page.locator('#add').click();
    const requiredLabel = await page.locator('.help-inline').first().innerText()
    await expect(requiredLabel).toEqual('Required');
    await page.getByRole('textbox').first().fill("sdasdasdas")
  });
  test('Add new computer - verify form input labels ', async ({ page }) => {




  });
  test('Add new computer - pc brand drop list verification ', async({})=>{


  })

})

