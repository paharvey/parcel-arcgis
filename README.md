# Parcel + ArcGIS Issue

This is a minimal demo of an issue with Parcel 2.4.1 and ArcGIS API 4.23.7.

Tested environment:

- Ubuntu 20.04
- Node 16.14.2
- NPX 8.5.0
- Parcel 2.4.1
- ArcGIS 4.23.7

Running `parcel serve` works as expected. To test, use the following commands.
An ArcGIS map component will be rendered when opening `http://localhost:1234`
in a browser.

    npm install
    npx parcel serve src/index.html

Running `parcel build` and serving the result does not work as expected. To
test, use the following commands. An ArcGIS map component will not be rendered
when opening `http://localhost:1234` in a browser.

    npm install
    npx parcel build src/index.html
    npx http-server -p 1234 dist/

In this case the following errors appear in the browser console:

    Uncaught Error: Cannot find module '27Lyk'
      at i (index.32294b52.js:1:446)
      at Object.<anonymous> (runtime-2bd3ba5244f3f640.js:1:1)
      at i (index.32294b52.js:1:402)
      at propUtils.js:5:45

    Uncaught Error: Cannot find module '27Lyk'
      at i (index.32294b52.js:1:446)
      at Object.<anonymous> (runtime-67cbcd57a7d17f6d.js:1:1)
      at i (index.32294b52.js:1:402)
      at runtime-061bac526dd4f281.js:1:467

    Uncaught Error: Cannot find module '27Lyk'
      at i (index.32294b52.js:1:446)
      at Object.<anonymous> (runtime-e0c22d6f35b9c6f6.js:1:1)
      at i (index.32294b52.js:1:402)
      at popupUtils.js:5:612

    Uncaught Error: Cannot find module 'kvpM4'
      at i (index.32294b52.js:1:446)
      at OwningCollection.js:5:1

Re-running the `parcel build` with `--no-optimize --no-scope-hoist` produces
more detailed errors in the browser console:

    index.45612411.js:61 Uncaught Error: Cannot find module 'gS3k4'
      at newRequire (index.45612411.js:61:19)
      at newRequire (index.4f5c6430.js:53:18)
      at newRequire (index.4f5c6430.js:45:18)
      at localRequire (index.4f5c6430.js:84:35)
      at Object.kp4t1../helpers/bundle-manifest (runtime-794d7c94b4c96ebf.js:1:1)
      at newRequire (index.4f5c6430.js:71:24)
      at index.4f5c6430.js:122:5
      at index.4f5c6430.js:145:3

    Uncaught Error: Cannot find module 'gS3k4'
      at newRequire (index.45612411.js:61:19)
      at newRequire (index.4f5c6430.js:53:18)
      at newRequire (index.46e31f36.js:53:18)
      at newRequire (index.46e31f36.js:45:18)
      at localRequire (index.46e31f36.js:84:35)
      at Object.3Y1ib../helpers/bundle-manifest (runtime-3588a330b0b083c4.js:1:1)
      at newRequire (index.46e31f36.js:71:24)
      at index.46e31f36.js:122:5
      at index.46e31f36.js:145:3

    Uncaught Error: Cannot find module 'gS3k4'
      at newRequire (index.45612411.js:61:19)
      at newRequire (index.4f5c6430.js:53:18)
      at newRequire (index.46e31f36.js:53:18)
      at newRequire (FeatureLayer.5243379d.js:53:18)
      at newRequire (FeatureLayer.5243379d.js:45:18)
      at localRequire (FeatureLayer.5243379d.js:84:35)
      at Object.dHTwm../helpers/bundle-manifest (runtime-2e2f738735587ea0.js:1:1)
      at newRequire (FeatureLayer.5243379d.js:71:24)
      at FeatureLayer.5243379d.js:122:5
      at FeatureLayer.5243379d.js:145:3

    Uncaught Error: Cannot find module 'j9GvQ'
      at newRequire (index.45612411.js:61:19)
      at newRequire (index.4f5c6430.js:53:18)
      at newRequire (index.46e31f36.js:53:18)
      at newRequire (FeatureLayer.5243379d.js:53:18)
      at newRequire (FeatureLayer.e7bcd0e7.js:53:18)
      at newRequire (FeatureLayer.4c77a394.js:53:18)
      at newRequire (FeatureLayer.d4438b86.js:53:18)
      at newRequire (FeatureLayer.8ad747af.js:53:18)
      at newRequire (FeatureLayer.5047d2d6.js:53:18)
      at newRequire (index.659863f9.js:53:18)

Oddly, the missing module `"gS3k4"` can be found in two generated `.js` files,
but those two `.js` files are not being loaded. The code for that missing
module appears to be:

    "use strict";
    var mapping = {};
    function register(pairs) {
        var keys = Object.keys(pairs);
        for(var i = 0; i < keys.length; i++)mapping[keys[i]] = pairs[keys[i]];
    }
    function resolve(id) {
        var resolved = mapping[id];
        if (resolved == null) throw new Error('Could not resolve bundle with id ' + id);
        return resolved;
    }
    module.exports.register = register;
    module.exports.resolve = resolve;
