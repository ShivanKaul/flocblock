# FLoC Block 

![Icon](ext/assets/icon-64.png?raw=true)

Prevent Federated Learning of Cohorts aka [FLoC](https://web.dev/floc/) ad-targeting code from running in Chrome.

## Why?
~~So I could call it FLoC Block~~ FLoC, short for Federated Learning of Cohorts, is the new mechanism used by Google Chrome to group users into buckets based on their interests. You can read more about it [here](https://web.dev/floc) and why Brave and some other browsers have blocked it [here](https://brave.com/why-brave-disables-floc). [EFF](https://www.eff.org/deeplinks/2021/03/googles-floc-terrible-idea) did some analysis as well. 

## How does this Chrome Extension help? 
If you HAVE to use Chrome but don't like the idea of being grouped into a bucket (aka cohort) based on the websites you visit, this extension is a simple way to prevent FLoC from divulging your "cohort id" to websites. The extension removes `document.interestCohort()` from every page so that a website cannot get your cohort id. 

## How do I verify that the extension is working?
Go to [the demo website](https://floc.glitch.me) - your cohort id should not be detectable after installing this extension. 

This is what the demo website should show after you install the extension:

![After screenshot](screenshots/screenshot_after.png?raw=true)
*"not supported by this browser"*

## How do I install this extension?
### From Chrome Web Store
https://chrome.google.com/webstore/detail/floc-block/amoljnglfkpjdjhmeaocffefmhppmane

### From GitHub
1. Download `flocblock.zip` from https://github.com/ShivanKaul/flocblock/releases/latest. Direct link: https://github.com/ShivanKaul/flocblock/releases/download/v0.0.2/flocblock.zip
2. Extract extension.
3. [Follow the instructions to load into Chrome.](https://www.smashingmagazine.com/2017/04/browser-extension-edge-chrome-firefox-opera-brave-vivaldi/#google-chrome-opera-vivaldi)

## Develop
```bash
git clone https://github.com/ShivanKaul/flocblock.git
cd flocblock
npm install # to install browserify.
npm run build # to build the extension. 
npm run pkg # to create a .zip
```
### To setup FLoC locally
Follow the instructions at https://floc.glitch.me


## Icons
Icons made by https://www.freepik.com from https://www.flaticon.com
