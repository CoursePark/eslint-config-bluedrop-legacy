
module.exports = {
	rules: {
		eqeqeq: 2,
		'no-bitwise': 2,
		'no-plusplus': 0,
		'no-div-regex': 0,
		'space-infix-ops': 2,
		'multiline-ternary': 0,
		'no-implicit-coercion': 0,
		'no-extra-boolean-cast': 1,
		'operator-linebreak': ['error', 'before', {
			overrides: {
				'&&': 'ignore',
				'+': 'ignore',
				'=': 'ignore'
			}
		}]
	}
};
