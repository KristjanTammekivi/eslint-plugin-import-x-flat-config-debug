const importPlugin = require('eslint-plugin-import');
const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
    importPlugin.flatConfigs.react,
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        ...importPlugin.flatConfigs.recommended,
        ...importPlugin.flatConfigs.typescript,
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
        },
    },
    {
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
        },
        rules: {
            'import/no-unused-modules': ['error', { unusedExports: true }],
        },
    },
];
