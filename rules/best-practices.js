module.exports = {

  rules: {

    'comma-dangle': ['error', 'never'],

    'dot-notation': ['warn', {
      allowPattern: '^[A-Z].+$'
    }],

    'no-param-reassign': ['error', {
      props: false
    }],

    'no-underscore-dangle': ['warn', {
      allow: ['_id']
    }]
  }
};
