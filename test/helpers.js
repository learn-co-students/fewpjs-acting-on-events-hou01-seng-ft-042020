const chai = require('chai')
global.expect = chai.expect
const fs = require('file-system')
const jsdom = require('mocha-jsdom')
// import 'jsdom-global/register'; 
const path = require('path')
const babel = require("@babel/core");
const url = "http://localhost"

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['@babel/env']
  }
);

const src = babelResult.code
// before(function () { this.jsdom = require('jsdom-global')()}) 
// after(function () { this.jsdom()}) 
jsdom({
  html, src, url
});