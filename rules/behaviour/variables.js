
module.exports = {
	rules: {
		'block-scoped-var': 2,
		'no-unused-vars': 2,
		'no-var': 0,
		'sort-vars': 1,
		'vars-on-top': 0,
		'one-var-declaration-per-line': [2, 'initializations'],
		'no-global-assign': 2,
		'no-undef': 2,
		'no-undefined': 0,
		'no-use-before-define': 2,
		'no-void': 0,
		'prefer-const': 0,
		'no-redeclare': 2,
		'no-const-assign': 2,
		'no-unused-expressions': [1, {
			allowShortCircuit: true,
			allowTernary: true
		}],
		'one-var': [1, {
			initialized: 'never',
			uninitialized: 'always'
		}]
	}
};
