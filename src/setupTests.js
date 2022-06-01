/* const jsdom = require('jsdom');
const { JSDOM } = jsdom;

global.document = JSDOM('<!doctype html><html><body><div id="root"></div></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator; */

import '@testing-library/jest-dom'