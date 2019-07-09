const puppeteer = require('puppeteer');
const request = require('supertest');
const Model = require('../database/index.js')
const app = require('../server/index.js')


// describe('practiceSolution', function() {
//   test('should be a function', function() {
//     expect(practiceSolution).toBeInstanceOf(Function);
//   });
// });

describe('sum of a + b', function() {
  test('should be 3', function() {
    expect(app.sum(1, 2)).toBe(3);
  });
});


// let page;
// let browser;
// const width = 1280;
// const height = 720;

// beforeAll(async () => {
//   browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 80,
//     args: [`--window-size=${width},${height}`]
//   });
//   page = await browser.newPage();
//   await page.setViewport({ width, height });
// });
// afterAll(() => {
//   browser.close();
// });