module.exports = {
	configureWebpack:{
		resolve:{
			// extensions:[]  这个是后缀
			alias:{
				// '@':'src' 这个是默认已经存在的
				'assets':'@/assets',
				'components':'@/components',
				'network':'@/network'
			}
		}
	}
}