import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "no-unused-vars": "warn",
      "prefer-const": ["error", { "ignoreReadBeforeAssign": true }],
      "no-duplicate-case": "error",
      "no-irregular-whitespace": "warn",
      "no-invalid-regexp": "warn",
      "no-self-assign": "error",
      "no-self-compare": "error",
      "no-sparse-arrays": "error",
      "no-undef": "error",
      "no-unused-vars": "error",
      "camelcase": "error",
      "eqeqeq": "error",
      "no-else-return": "warn",
      "no-empty": "warn",
      "no-empty-function": "warn",
      "no-eval": "error",
      "no-var": "error",
      "prefer-destructuring": "warn",
      "indent": ["warn", 2],
      "semi-style": ["error", "last"],
      "no-extra-semi": "error",
      "semi": "error"
    },
  },
)
