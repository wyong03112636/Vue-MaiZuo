module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": ["plugin:vue/essential", "prettier", "prettier/vue"],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "parser": 'babel-eslint',
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        camelcase: [
          1,
          {
            ignoreDestructuring: true,
            properties: 'never',
            allow: ['^UNSAFE_'],
          },
        ],
        'vue/max-attributes-per-line': 0
    }
};
