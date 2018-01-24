'use strict';

const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');


before(function() {
  chai.use(sinonChai);
});

beforeEach(function() {
  this.sandbox = sinon.sandbox.create();
  global.expect = chai.expect;
  this.sinon = sinon;
});

afterEach(function() {
  this.sandbox.restore();
});
