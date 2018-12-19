const package =  require('./package.json');

module.exports = {
  "presets": [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "targets": {
          "esmodules": false,
          "node": true,
          "browsers": package.browserslist,
        }
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": false,
        "helpers": false,
        "regenerator": false,
        "useESModules": false
      }
    ]
  ]
};
