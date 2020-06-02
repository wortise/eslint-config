module.exports = {

  rules: {

    'comma-dangle': ['error', 'never'],

    'dot-notation': ['warn', {
      allowPattern: '^[A-Z].+$'
    }],

    'no-underscore-dangle': ['warn', {
      allow: ['_id']
    }]
  }
};
