module.exports = [
  // Ignore build and node_modules
  { ignores: ['build/**', 'node_modules/**'] },

  // Apply rules to JS/TS/JSX/TSX files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: require.resolve('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      'jsx-a11y': require('eslint-plugin-jsx-a11y'),
      import: require('eslint-plugin-import'),
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: {} },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'import/order': ['warn', { 'newlines-between': 'always' }],
    },
  },
];
