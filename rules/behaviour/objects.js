
module.exports = {
	rules: {
		'accessor-pairs': 0,
		'no-new-object': 2,
		'no-proto': 2,
		'object-curly-spacing': ['error', 'never'],
		'object-shorthand': 0,
		'quote-props': ['error', 'as-needed'],
		'dot-location': 0,
		'no-empty-pattern': 0,
		'dot-notation': [1, {
			allowKeywords: true
		}],
		'newline-per-chained-call': [1, {
			ignoreChainWithDepth: 1
		}]
	}
};
