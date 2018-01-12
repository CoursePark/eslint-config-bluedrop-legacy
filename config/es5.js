
module.exports = {
	env: {
		jasmine: true,
		browser: true,
		node: true,
		es6: true
	},
	parserOptions: {
		ecmaVersion: 5,
		sourceType: 'script',
		ecmaFeatures: {
			impliedStrict: true
		}
	},
	globals: {
		_: true,
		$: true,
		angular: true,
		confirm: true,
		io: true
	},
	plugins: [
		'disable',
		'json'
	],
	extends: [
		'../rules/environment/browser',
		'../rules/style/format',
		'../rules/behaviour/constructors',
		'../rules/behaviour/functions',
		'../rules/behaviour/numbers',
		'../rules/behaviour/objects',
		'../rules/behaviour/operators',
		'../rules/behaviour/security',
		'../rules/behaviour/statements',
		'../rules/behaviour/strings',
		'../rules/behaviour/types',
		'../rules/behaviour/variables'
	].map(require.resolve),
	rules: {}
};
