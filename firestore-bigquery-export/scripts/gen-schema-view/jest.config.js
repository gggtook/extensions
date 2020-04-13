const packageJson = require("./package.json");

module.exports = {
  name: packageJson.name,
  displayName: packageJson.name,
  rootDir: "./",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.json",
    },
  },
  preset: "ts-jest",
  testMatch: [
    "<rootDir>/src/test/bigquery/*.spec.ts",
    "<rootDir>/src/test/schema-loader-utils/*.spec.ts",
  ],
};
