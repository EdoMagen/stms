STMS Spotify favorite picker
=========================

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Development](#development)
- [Build](#build--buildproduction)

## About
- [React](https://github.com/facebook/react)
- [Redux](https://github.com/gaearon/redux)
- [React Router](https://github.com/rackt/react-router)
- [Bootstrap-loader](https://github.com/shakacode/bootstrap-loader) (configured with .bootstraprc)
- Sass modules ([sass-loader](https://github.com/jtangelder/sass-loader) [css-loader](https://github.com/webpack/css-loader) [style-loader](https://github.com/webpack/style-loader))
- [react transform](https://github.com/gaearon/react-transform)
- [redux-logger](https://github.com/fcomb/redux-logger)
- [react-document-meta](https://github.com/kodyl/react-document-meta)
- [redux-form](https://github.com/erikras/redux-form)
- [karma](https://github.com/karma-runner/karma)
- [mocha](https://github.com/mochajs/mocha)

## Installation
```
$ git clone https://github.com/EdoMagen/stms.git
$ cd stms
$ npm install
```

## Development
```
$ npm start
```
Runs the project in development mode with hot-reloading of `src` folder.
Open your browser at [http://localhost:3000](http://localhost:3000).

### Try
```
$ rm -rf node_modules
$ npm i
$ npm start
```

## Clean
```
$ npm run clean
```
Using rimraf clean the `dist` folder, which is the target of the `build`

## Build & build:production
```
$ npm run build
```
Builds the app into the 'dist' folder for deployment
```
$ npm run build:production
```
clean the `dist` folder and rebuilds the app for deployment

### Production
To run your server in production simply place the `index.html` and `dist` folder into
your `web root`.

## Run karma
```
$ npm test
```
## TODO
1. [ ] Write more tests!
2. [ ] Add more providers and expand the program
