# Purpose

This is to demonstrate eslint-plugin-import / eslint-plugin-import-x error with unusedExports: true

This will fail

```shell
yarn run lint

# main ✓ yarn run lint
# yarn run v1.22.22
# $ eslint src/**/*.ts
# 
# Oops! Something went wrong! :(
# 
# ESLint: 9.7.0
# 
# ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:
# 
#     npm init @eslint/config@latest
# 
# ESLint looked for configuration files in /home/kristjan/self/flat-import and its ancestors. If it found none, it then looked in your home directory.
# 
# If you think you already have a configuration file or if you need more help, please stop by the ESLint Discord server: https://eslint.org/chat
# 
# error Command failed with exit code 2.
# info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```

When removing `import/no-unused-modules` from eslint.config.js (or removing it's options) it will work.

Apparently also starts working after adding .eslintrc https://github.com/import-js/eslint-plugin-import/issues/3079
