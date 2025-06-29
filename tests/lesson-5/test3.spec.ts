import test from "@playwright/test";

test("Add product to cart", async ({ page }) => {
    let numberOfItem = 100;
    await test.step("Access to material playwrightvn", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click on 'Bài học 3: Todo page'", async () => {
        await page.locator("//a[contains(text(), 'Todo page')]").click();
    });

    await test.step(`Add ${numberOfItem} items`, async () => {
        await addItem(page, numberOfItem);
    });

    await test.step("Delete odd-numbered items", async () => {
        await deleteOddItems(page, numberOfItem);
    });
});

async function addItem(page, numberOfItem) {
    for (let i = 0; i < numberOfItem; i++) {
        await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
        await page.locator("//button[@id='add-task']").click();
    }
}

async function deleteOddItems(page, numberOfItem) {
    page.on("dialog", async dialog => dialog.accept());
    for (let i = 0; i < numberOfItem; i++) {
        if (i % 2 !== 0) {
            await page.locator(`//button[@id="todo-${i}-delete"]`).click();
        }
    }
}
