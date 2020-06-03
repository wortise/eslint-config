module.exports = {

  rules: {

    indent: ['error', 2, {
      SwitchCase: 0
    }],

    'key-spacing': ['error', {
      afterColon:  true,
      align:       'value',
      beforeColon: false
    }],

    'no-multi-spaces': 0,

    'no-whitespace-before-property': 0,

    'padded-blocks': 0,

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*',                     next: '*' },
      { blankLine: 'any',    prev: '*',                     next: ['break', 'continue', 'return'] },
      { blankLine: 'any',    prev: 'export',                next: 'export' },
      { blankLine: 'any',    prev: 'expression',            next: 'expression' },
      { blankLine: 'any',    prev: 'import',                next: 'import' },
      { blankLine: 'any',    prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
    ]
  }
};
