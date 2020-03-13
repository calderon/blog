/**
 * source: https://www.gatsbyjs.org/docs/unit-testing/#2-creating-a-configuration-file-for-jest
 */

module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__tests__/mocks/file-mock.js`,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `<rootDir>/__tests__`,
    `\\.cache`,
    `<rootDir>.*/public`,
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
}
