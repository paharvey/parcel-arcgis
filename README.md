# Parcel + ArcGIS Issue

This is a minimal demo of an issue with Parcel 2.4.1 and ArcGIS API 4.23.7.

Tested environment:

- Ubuntu 20.04
- Node 16.14.2
- Yarn 1.22.17
- Parcel 2.4.1
- ArcGIS 4.23.7

Running `parcel serve` works as expected. An ArcGIS map component will be
rendered when opening `http://localhost:1234`. To test:

    yarnpkg parcel serve src/index.html

Running `parcel build` does not work as expected. An ArcGIS map component will
not be rendered when using the built files (`./dist/index.html`). To test:

    yarnpkg parcel build src/index.html

Please note you need to disable CORS if simply opening `./dist/index.html`.
Once CORS is disabled, the following errors appear in the browser console:

    Uncaught Error: Cannot find module '27Lyk'
      at i (index.32294b52.js:1:446)
      at Object.<anonymous> (runtime-2bd3ba5244f3f640.js:1:1)
      at i (index.32294b52.js:1:402)
      at propUtils.js:5:45
