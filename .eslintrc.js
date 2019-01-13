module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "mocha": true,
  },
  "extends": [
    "airbnb",
  ],
  globals: {},
  rules: {
    //general
    "global-require": "off",
    "class-methods-use-this": "off",
    "import/no-unresolved": "off",
    "no-underscore-dangle": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    'no-unused-expressions': ["error", { "allowShortCircuit": true }],
    
    //react
    "react/no-multi-comp": "off",
    "react/no-array-index-key": "off",
    "react/jsx-no-bind": "off",
    "react/destructuring-assignment": "off",
    "react/props-validation": "off",
    "react/prop-types": "off",
    'react/button-has-type': 'off',
    "react/jsx-curly-spacing": [2, "always", {
      "allowMultiline": true,
      "spacing": {"objectLiterals": "always"}
    }],
    "react/sort-comp": [2, {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'rendering',
      ],
      groups: {
        rendering: [
          '/^render.+$/',
          'render'
        ]
      }
    }],
    
    //jsx-a11y
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
};

