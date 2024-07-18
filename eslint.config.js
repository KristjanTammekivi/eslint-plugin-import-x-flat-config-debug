const tseslint = require('typescript-eslint');
const importPlugin = require('eslint-plugin-import-x');

module.exports = tseslint.config(
    {
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: true
            }
        }
    },
    {
        plugins: {
            import: importPlugin
        },
        files: ['src/*.ts'],
        rules: {
            'import/order': "error",
            'import/no-unused-modules': ['error', { unusedExports: true, missingExports: false }],
        }
    }
)
