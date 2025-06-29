import test, { expect } from "@playwright/test";

const notes = [
    {
        title: "Siêu bom xuyên phá của Mỹ 'bất lực' trước cơ sở hạt nhân Iran",
        content: "Washington không thả bom GBU-57 xuống cơ sở hạt nhân Isfahan trong chiến dịch Búa Đêm, dường như vì nó nằm quá sâu, ngoài tầm với của vũ khí Mỹ."
    },
    {
        title: "Elon Musk chỉ trích gay gắt dự luật ngân sách của Thượng viện Mỹ",
        content: "Elon Musk cho rằng dự luật do Thượng viện Mỹ soạn thảo để cấp ngân sách cho nghị trình của Tổng thống Trump là 'điên rồ, mang tính phá hoại'."
    },
    {
        title: "Xung đột Israel - Iran xoay chuyển tính toán của các nước Arab ",
        content: "Các nước Arab đang điều chỉnh lập trường đối ngoại để thích ứng với những thay đổi tại Trung Đông liên quan xung đột Israel - Iran."
    },
    {
        title: "Người trẻ ở New York tuyệt vọng tìm thuê nhà ",
        content: "Vật lộn với giá thuê nhà quá cao ở New York, những người trẻ mới ra trường đã đặt niềm tin vào ứng viên thị trưởng 33 tuổi, người cam kết hạ giá thuê nhà nếu đắc cử."
    },
    {
        title: "Đi ngược chiều, leo vỉa hè trở lại",
        content: "Đi làm qua các tuyến đường trung tâm TP HCM, tôi tận mắt chứng kiến người đi xe máy nối đuôi nhau đi ngược chiều, leo vỉa hè trở lại."
    },
    {
        title: "Bí ẩn kho uranium Iran sau đòn không kích của Mỹ",
        content: "Mỹ ngày 22/6 tiến hành chiến dịch 'Búa Đêm', sử dụng tổng cộng 14 quả bom xuyên phá hầm GBU-57 nặng 14 tấn và hơn 20 tên lửa Tomahawk, nhắm vào 3 cơ sở hạt nhân Iran gồm Isfahan, Natanz và Fordow."
    },
    {
        title: "Vi khuẩn biến rác thải nhựa thành thuốc giảm đau ",
        content: "Các nhà nghiên cứu phát hiện có thể sử dụng vi khuẩn để biến rác thải nhựa thành thuốc giảm đau, mở ra khả năng sản xuất thuốc bền vững hơn."
    },
    {
        title: "Cô gái chạy bộ xuyên Australia để ủng hộ nạn nhân bạo lực gia đình ",
        content: "Cựu cầu thủ Fran Hurndall hoàn tất hành trình chạy 3.800 km xuyên Australia trong 60 ngày nhằm gây quỹ cho nạn nhân bạo lực gia đình."
    },
    {
        title: "17 bảo vật quốc gia tại TP HCM lần đầu trưng bày ",
        content: "Các bảo vật quốc gia của bảo tàng và cá nhân lần đầu được trưng bày cùng một nơi trong triển lãm tại Bảo tàng Lịch sử TP HCM."
    },
    {
        title: "4 câu nói thể hiện người EQ cao ",
        content: "Bốn câu nói dưới đây, dù đơn giản, nhưng chứng tỏ một người có trí tuệ cảm xúc (EQ) cao vượt trội, theo tiến sĩ, nhà trị liệu tâm lý Erin Leonard (Mỹ)."
    }
]

test("Add product to cart", async ({ page }) => {
    await test.step("Access to material playwrightvn", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click on 'Bài học 4: Personal notes'", async () => {
        await page.locator("//a[contains(text(), 'Personal notes')]").click();
    });

    await test.step(`Add ${notes.length} notes`, async () => {
        await addNote(page, notes);
    });

    await test.step("Search the article by title", async () => {
        const searchInfo = {
            title: "Vật lộn với giá thuê nhà quá cao ở New York",
            content: "Vật lộn với giá thuê nhà quá cao ở New York, những người trẻ mới ra trường đã đặt niềm tin vào ứng viên thị trưởng 33 tuổi, người cam kết hạ giá thuê nhà nếu đắc cử."
        }
        await page.locator("//input[@id='search']").fill(searchInfo.title);
        await expect(page.locator("//ul[@id='notes-list']//p")).toHaveText(searchInfo.content);
    })
});

async function addNote(page, notes) {
    for (const note of notes) {
        await page.locator("//input[@id='note-title']").fill(note.title);
        await page.locator("//textarea[@id='note-content']").fill(note.content);
        await page.locator("//button[@id='add-note']").click();
    }
}