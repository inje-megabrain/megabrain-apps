module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'unused-imports'],
  ignorePatterns: ['**/.storybook/*.{ts,tsx}'],
  rules: {
    'no-empty-pattern': 'off',
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        usePrettierrc: true,
        endOfLine: 'auto',
      },
    ],
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['jsx'],
      },
    ],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react/no-unescaped-entities': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
