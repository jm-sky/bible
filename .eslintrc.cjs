/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'plugin:tailwindcss/recommended',
  ],
  plugins: [
    'import',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'sort-imports': ['error', {
      'ignoreCase': true,
      'ignoreDeclarationSort': true,
      'ignoreMemberSort': true,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
      'allowSeparatedGroups': false,
    }],
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true,
        },
        'pathGroups': [
          {
            'pattern': '@/**',
            'group': 'internal',
          },
        ],
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ], 
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 3,
      },      
      'multiline': {
        'max': 1,
      },
    }],
    'tailwindcss/no-custom-classname': ['warn', {
      'whitelist': ['fa-(.*)'],
    }],
  },
}
