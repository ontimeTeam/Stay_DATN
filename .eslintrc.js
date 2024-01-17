module.exports = {
    root: true,
    extends: ['react-native', 'eslint:recommended', 'plugin:prettier/recommended', 'plugin:react/recommended'],
    ignorePatterns: ['node_modules/', 'build/'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        'no-console': 0,
        'no-unused-vars': 2,
        'react-hooks/exhaustive-deps': 2,
        'react-native/no-unused-styles': 2,
        // Additional rules
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-no-undef': 'error',
    },
    parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
};
