import { RemoteOptions } from "webdriverio";

export const config: RemoteOptions = {
  capabilities: {
    browserName: "chrome",
  },
  waitforTimeout: 60000,
  baseUrl: "http://localhost:3000",
  framework: "jest",
  logLevel: "silent",
};
