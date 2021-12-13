module.exports = {
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {},
	},
	env: {
		'browser': true,
		'amd': true,
		'node': true,
	},
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
	rules: {
		'no-extra-semi': 'off',
		'@typescript-eslint/no-extra-semi': ['off'],
		'@typescript-eslint/no-var-requires': 0,
	},
};
