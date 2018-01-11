
module.exports = {
	"env": {
		"jasmine": true,
		"node": true,
		"es6": true
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'script',
		ecmaFeatures: {
			impliedStrict: true
		}
	},
	extends: [
		'../rules/environment/node-and-common'
	].map(require.resolve)
};
