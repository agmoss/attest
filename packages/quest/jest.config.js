module.exports = {
    preset: "ts-jest",
    testMatch: ["**/*.test.ts"],
    testEnvironment: "node",
    setupFilesAfterEnv: ["./jest.setup.after-env.ts"],
};
