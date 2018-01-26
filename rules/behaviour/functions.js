module.exports = {
	rules: {
		'func-style': 0,
		'func-names': 0,
		complexity: [0, 11],
		'consistent-return': 'off',
		'consistent-this': [1, 'self', 'ctrl'],
		'wrap-iife': [2, 'inside'],
		'no-invalid-this': 0,
		'no-extra-bind': 2,
		'no-caller': 2,
		'no-loop-func': 2,
		'no-self-assign': 2,
		'no-new-func': 2,
		'no-return-assign': 1,
		'no-self-compare': 2,
		'no-else-return': 2,
		'no-extend-native': 2,
		'no-useless-call': 0,
		'no-throw-literal': 1,
		'no-param-reassign': [0, {
			props: false
		}],
		'space-before-function-paren': ['error', {
			anonymous: 'always',
			named: 'ignore',
			asyncArrow: 'ignore'
		}]
	}
};
