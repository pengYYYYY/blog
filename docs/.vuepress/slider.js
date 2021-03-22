exports.getFontEndBar = () => {
	return [
		{
			title: 'Javascript',
			children: [
				'js/js',
				'js/typeScript',
				'js/array',
				'js/string',
				'js/storage',
				'js/handwritten'
			]
		},
		{
			title: 'vue',
			children: [
				'vue/vue',
				'vue/vue3',
				'vue/vue-question',
				'vue/vue-router',
				'vue/vuex'
			]
		},
		{
			title: 'react',
			children: [
				'react/LogicReuse',
				// 'react/question',
			]
		},
		{
			title: '工程化',
			children: [
				'engineering/webpackBase',
				'engineering/webpackAdvance',
				'engineering/npm',
				'engineering/modular',
				'engineering/babel',
				'engineering/optimize'
			]
		},
		{
			title: '浏览器',
			children: [
				'browser/base',
				'browser/process',
			]
		},
		{
			title: 'HTML',
			children: [
				'html/html',
				'html/load',
			]
		},
		'css'
	]
}

exports.getNodeBar = () => {
	return [
		'nodeBase',
	]
}

exports.getNetWorkBar = () => {
	return [
		'connectionProcess',
		'crossDomain',
		'httpCode',
		'security',
		'https',
		'cache'
	]
}

exports.getOthersBar = () => {
	return [
		'computerOrganization',
	]
}

exports.getAlgorithmBar = () => {
	return [
		'dataStructure',
		'linkedList',
		'framework',
		'tree',
		'mind',
		'sort',
		'complexity',
	]
}

exports.getArticlesBar = () => {
	return [
		{
			title: '前端',
			children: [
				'fe/inheritance',
				'fe/functional',
				'fe/eventLoop',
				'fe/mobile-adapter'
			]
		},
		{
			title: 'vue',
			children: [
				'vue/vueProtocol',
				'vue/ssr',
				'vue/vue-loader'
			]
		},
		{
			title: '兴趣',
			children: [
				'other/nat',
				'other/db',
				'other/howComputerRun',
				'other/threadsAndProcesses'
			]
		},
		{
			title: '工程与实践',
			children: [
				'engineering/siskinImport',
				'engineering/siskinStyle',
				'engineering/buildSystem',
				'engineering/unitTest',
				'engineering/jwt'
			]
		},
		{
			title: '杂物与思考',
			children: [
				'clutter/24岁的程序员',
				'clutter/engineering',
			]
		},
	]
}
