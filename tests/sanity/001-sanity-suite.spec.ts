import { test } from '@playwright/test';
import { Page } from '@playwright/test'; 
import { UrlConfig } from '../../helpers/urlConfig';
import { expect } from '@playwright/test';

test.describe('@sanity sanity tests',  () => {
    test.beforeAll(async ({ page }) => {
        const testURL = new UrlConfig('test')
  await page.goto(testURL.url)
  await expect(page.url).toContain('database.gatling.io')

    });
    
    test.only('Sanity  - verify page loaded and header displayed  ', async ({ page }) => {
        //from home page 
        
    });
    test.only('Sanity  - verify "filter by name" and "Add new" displayed  ', async ({ page }) => {
        //from home page 
        
    });
    test.only('Sanity - complete Add new computer flow  ', async ({ page }) => {
        //from home page 
        
    });
    test.only('Sanity - Show computer name home page table ', async ({ page }) => {
        //from home page 
        
    });
    test.only('Sanity  - Add new computer and view entry in list ', async ({ page }) => {
        //from home page 
        
    });
    test.only('Sanity  - Add new computer and view entry in list ', async ({ page }) => {
        //from home page 
        
    });
    test.only('Sanity  - Add new computer and view entry in list ', async ({ page }) => {
        //from home page 
        
    });

});
