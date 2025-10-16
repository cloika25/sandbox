import js from "@eslint/js";
import react from "eslint-plugin-react";
import ts from "@typescript-eslint/eslint-plugin";
import importNewlines from "eslint-plugin-import-newlines";
import airbnb from "eslint-config-airbnb";
import reactHooks from "eslint-plugin-react-hooks";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    ignores: ["node_modules", "dist", "src/vite-env.d.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react,
      "@typescript-eslint": ts,
      "import-newlines": importNewlines,
      "react-hooks": reactHooks,
    },
    rules: {
      ...airbnb.rules,
      "jsx-a11y/label-has-associated-control": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "no-undef": "off",
      "react/jsx-no-undef": "error",
      "no-shadow": "off",
      indent: ["error", 2, { SwitchCase: 1 }],
      "brace-style": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "no-restricted-syntax": 1,
      "spaced-comment": ["error", "always"],
      "no-underscore-dangle": "off",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "const", next: "return" },
        { blankLine: "always", prev: "import", next: "*" },
        { blankLine: "never", prev: "import", next: "import" },
        { blankLine: "always", prev: "*", next: "export" },
        { blankLine: "any", prev: "export", next: "export" },
      ],
      "class-methods-use-this": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "import/extensions": "off",
      "import/prefer-default-export": "off",
      "import-newlines/enforce": [
        "error",
        {
          items: 3,
          "max-len": 150,
          semi: false,
        },
      ],
      "react-hooks/exhaustive-deps": "off",
      "react/destructuring-assignment": ["error", "always"],
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/no-array-index-key": "error",
      "react/jsx-closing-bracket-location": "error",
      "react/jsx-closing-tag-location": "error",
      "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
      "react/jsx-indent": [2, 2, { indentLogicalExpressions: true }],
      "react/jsx-indent-props": [2, 2],
      "react/jsx-one-expression-per-line": ["error", { allow: "single-child" }],
      "react/jsx-pascal-case": ["error", { allowNamespace: true }],
      "react/jsx-props-no-multi-spaces": "error",
      "react/jsx-sort-props": [
        "warn",
        { shorthandLast: true, reservedFirst: true },
      ],
      "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
      "react/require-default-props": 0,
      "react/jsx-props-no-spreading": "off",
      curly: ["error", "all"],
      "no-plusplus": "off",
      "max-len": ["error", { code: 150 }],
      "no-param-reassign": "off",
    },
  },
];
