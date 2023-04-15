module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
	},
	'extends': [
		'plugin:@typescript-eslint/recommended',
		'next',
		'next/core-web-vitals',
		'prettier',
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
		},
		'ecmaVersion': 12,
		'sourceType': 'module',
	},
	'plugins': ['@typescript-eslint'],
	'rules': {
		'semi': [2, 'always'],
		'indent': [2, 'tab'],
		'comma-dangle': [2, 'always-multiline'],
		'quotes': [2, 'single', { 'avoidEscape': true }],
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
				allowSeparatedGroups: true,
			},
		],
		'import/order': [
			'error',
			{
				groups: [
					'builtin', 
					'external', 
					'internal', 
					['sibling', 'parent'], 
					'index', 
					'unknown', 
				],
				'newlines-between': 'always',
				alphabetize: {
					order: 'desc',
					caseInsensitive: true,
				},
			},
		],
	},
};