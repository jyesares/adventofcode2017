const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

global.expect = expect;
global.fs = fs;
global.path = path;
global.rewire = rewire;
