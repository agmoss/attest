import { remote, Browser } from "webdriverio";
import { config } from "../wdio.conf";

describe("HeyAuto | Home page title", () => {
  let browser: Browser<"async">;
  beforeAll(async () => {
    browser = await remote(config);
  });

  afterAll(async () => {
    await browser.deleteSession();
  });

  test("Check the text on the home page", async () => {
    await browser.url("http://localhost:3000");
    expect(await browser.getTitle()).toContain("quest");
  });
});
