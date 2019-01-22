module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'airbnb-base'],
    plugins: ['import'],
    rules: {
        'default-case': [0],
        indent: [
            1,
            4,
            {
                SwitchCase: 1,
            },
        ],
        'import/extensions': [2, 'never'],
        'import/no-extraneous-dependencies': [0],
    },
};
