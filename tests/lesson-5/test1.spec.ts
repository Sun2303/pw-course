import test, { expect } from "@playwright/test";
import assert from "assert";

test("Fill form", async ({ page }) => {
    await test.step("Access to material playwrightvn", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click on 'Bài học 1: Register Page'", async () => {
        await page.locator("//a[contains(text(), 'Register Page')]").click();
    });

    await test.step("Fill username", async () => {
        await page.locator("//input[@id='username']").fill("suncd");
    });

    await test.step("Fill email", async () => {
        await page.locator("//input[@id='email']").fill("suncd@mail.com");
    });

    await test.step("Select gender", async () => {
        await page.locator("//input[@id='male']").click();
    });

    await test.step("Select hobbies", async () => {
        await page.locator("//input[@id='reading']").check();
    });

    await test.step("Select interests", async () => {
        await page.selectOption("//select[@id='interests']", "sports");
    });

    await test.step("Select country", async () => {
        await page.selectOption("//select[@id='country']", "australia");
    });

    await test.step("Pick date of birth", async () => {
        await page.locator("//input[@id='dob']").fill("1995-11-11");
    });

    await test.step("Upload profile picture", async () => {
        await page.locator("//input[@id='profile']").setInputFiles("tests/uploadData/shin.png");
    });

    await test.step("Fill biography", async () => {
        await page.locator("//textarea[@id='bio']").fill("Hello, I'm Sun. Welcome to my blog.");
    });

    await test.step("Rating", async () => {
        await page.locator("//input[@id='rating']").fill("9");
    });

    await test.step("Select favorite color", async () => {
        await page.locator("//input[@id='favcolor']").fill("#004cff");
    });

    await test.step("Hover and check tooltip", async () => {
        await page.locator("//div[@class='tooltip']").hover();
        await expect(page.locator("//span[@class='tooltiptext']")).toBeVisible();
        await expect(page.locator("//span[@class='tooltiptext']")).toHaveText("Subscribe to our newsletter for updates");
    });

    await test.step("Enable feature", async () => {
        await page.locator("//span[@class='slider round']").click();
    });

    await test.step("Select star rating", async () => {
        await page.locator("//div[@id='starRating']").click();
    });

    await test.step("Submit form", async () => {
        await page.locator("//button[@type='submit']").click();
    });
});