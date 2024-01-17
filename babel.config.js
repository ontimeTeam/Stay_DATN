module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        ["module-resolver", {
            extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
            root: ['./src'],
            alias: {
                '@shared-state': './src/share-state',
                '@domain': './src/domain',
            },
        },
        ],
        'react-native-reanimated/plugin',
    ],
};
