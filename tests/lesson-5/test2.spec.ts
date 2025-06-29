import test, { expect } from "@playwright/test";
import assert from "assert";

test("Add product to cart", async ({ page }) => {
    await test.step("Access to material playwrightvn", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click on 'Bài học 2: Product Page'", async () => {
        await page.locator("//a[contains(text(), 'Product page')]").click();
    });

    await test.step("Add Product 1 with quantity = 2", async () => {
        await page.locator("//div[contains(text(), 'Product 1')]//following-sibling::button").dblclick();
    });

    await test.step("Add Product 2 with quantity = 3", async () => {
        await page.locator("//div[contains(text(), 'Product 2')]//following-sibling::button").click({ clickCount: 3 });
    });

    await test.step("Add Product 3 with quantity = 1", async () => {
        await page.locator("//div[contains(text(), 'Product 3')]//following-sibling::button").click();
    });
});