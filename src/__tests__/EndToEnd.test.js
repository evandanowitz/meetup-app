import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true, // set to false to turn "headless mode" off (to visually see the tests in Chromium browser)
      slowMo: 250, // slow down by 250ms,
      timeout: 0 // removes any puppeteer/browser timeout limitations (not the same as the timeout of jest)
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });
  afterAll(() => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide its details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });
});

describe("filter events by city", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true, // set to false to turn "headless mode" off (to visually see the tests in Chromium browser)
      slowMo: 250, // slow down by 250ms,
      timeout: 0 // removes any puppeteer/browser timeout limitations (not the same as the timeout of jest)
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });
  afterAll(() => {
    browser.close();
  });

  test("When user has not searched for a city, show upcoming events from all cities.", async () => {
    const eventList = await page.$("#event-list");
    expect(eventList).not.toBeNull();
  });

  test("User should see a list of suggestions when they search for a city.", async () => {
    await page.type(".city", "Berlin, Germany");
    const suggestionListItems = await page.$(".city");
    expect(suggestionListItems.length).not.toBeNull();
  });

  test("User can select a city from the suggested list.", async () => {
    await page.waitForSelector(".suggestions");
    await page.click(".suggestions li:first-child");
    const cityInputValue = await page.$eval(".city", input => input.value);
    expect(cityInputValue).toBe("Berlin, Germany");
  });
});