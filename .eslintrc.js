module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'amd': true
    },
    'extends': [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'google',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 2018,
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        '@typescript-eslint',
    ],
    'rules': {
        'linebreak-style': [0, 'error', 'windows'], // 忽略linux和windows换行符差异
        'react/prop-types': 0, // typescript使用 :React.SFC<prop> 时，eslint无法识别，会提示props无验证，所以禁用
        'max-len': ['error', { 'code': 120 }]
    },
};