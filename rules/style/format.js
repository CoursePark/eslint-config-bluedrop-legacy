module.exports = {
	rules: {
		// Names
		'id-match': ['error', '^((_|\\$|_\\$|)+(_|[A-Z]+[A-Z0-9]*|[a-z]+[a-zA-Z0-9]*)+(_|))'],
		
		// Commas
		'comma-style': ['error', 'last'],
		'comma-dangle': ['error', 'never'],
		'no-sequences': 2,
		'comma-spacing': ['error', {
			before: false,
			after: true
		}],
		
		// Braces
		curly: [2, 'multi-line'],
		'brace-style': ['error', 'stroustrup', {
			allowSingleLine: false
		}],
		
		// Lines
		'linebreak-style': ['error', 'unix'],
		'eol-last': ['error', 'always'],
		semi: ['error', 'always'],
		indent: ['error', 'tab', {
			SwitchCase: 1
		}],
		'no-multiple-empty-lines': [2, {
			max: 1
		}],

		// Spacing
		'no-multi-spaces': 2,
		'space-before-blocks': 2,
		'no-mixed-spaces-and-tabs': 2,
		'space-in-parens': ['error', 'never'],
		'array-bracket-spacing': ['error', 'never'],
		'key-spacing': ['error', {
			afterColon: true,
			beforeColon: false
		}],
		'space-unary-ops': [2, {
			words: true,
			nonwords: false
		}],
		'no-trailing-spaces': [2, {
			skipBlankLines: true
		}],
		'spaced-comment': ['error', 'always', {
			line: {
				exceptions: ['-']
			},
			block: {
				markers: ['!'],
				exceptions: ['-'],
				balanced: true
			}
		}],
		
		// Blocks
		'padded-blocks': ['error', 'never'],
		'no-lone-blocks': 2,
		
		// Strings
		quotes: [2, 'single'],
		'no-useless-concat': 0,
		
		// Comments
		'no-warning-comments': [
			0, {
				terms: [
					'todo',
					'fixme',
					'xxx'
				],
				location: 'start'
			}
		],
		
		// Docs
		'valid-jsdoc': 2,
		
		// Statements
		'keyword-spacing': ['error', {
			overrides: {
				if: {
					after: true,
					before: false
				},
				else: {
					after: true,
					before: false
				},
				for: {
					after: true,
					before: false
				},
				while: {
					after: true,
					before: false
				},
				do: {
					after: true,
					before: false
				},
				switch: {
					after: true,
					before: false
				},
				case: {
					after: true,
					before: false
				},
				return: {
					after: true,
					before: false
				},
				try: {
					after: true,
					before: false
				},
				catch: {
					after: true,
					before: false
				},
				finally: {
					after: true,
					before: false
				},
				typeof: {
					after: true
				}
			}
		}]
	}
};
