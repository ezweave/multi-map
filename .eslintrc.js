module.exports = {
  extends: ['airbnb-typescript/base', 'plugin:jest/recommended'],
  settings: {
    next: {
      rootDir: ['src/*/', 'packages/*/'],
    },
  },
  plugins: ['jest', '@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'eol-last': ['error', 'always'],
    'function-paren-newline': [0],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true, // Since lambdas have aws-sdk we don't need to package it
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_' }, // TS will sometimes demand you flesh out arguments.  If they are intentionally unused, prefix with '_'
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
      },
    ],
    'consistent-return': 'off',
    '@typescript-eslint/return-await': 'off',
    // 'no-console': 2,
    'no-underscore-dangle': 'off',
    'jest/no-mocks-import': 'off',
    'jest/valid-title': 'off',
    'jest/valid-expect': 'off',
    'jest/no-done-callback': 'off',
    quotes: [2, 'single', { avoidEscape: true }],
  },
};
