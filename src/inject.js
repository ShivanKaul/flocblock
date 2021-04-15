'use strict';
// Inject flocblock.js
const injected = document.createElement('script');
injected.src = chrome.extension.getURL('dist/flocblock.js');
(document.head || document.documentElement).appendChild(injected);