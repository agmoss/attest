module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "./",
  testEnvironment: "node",
  testRegex: ".e2e-spec.ts$",
  transform: {
      "^.+\\.(t)s$": "ts-jest",
  },
  collectCoverage: true,
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: ['TS151001'],
      },
      tsconfig: './tsconfig.app.json',
    },
  },
};
