import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
// 1.安装插件
Vue.use(VueRouter)
// 2.创建路由对象

const routers = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/cart',
		component: Cart
	}
]
const router = new VueRouter({
	routers,
	mode: 'history'
})
// 3. 导出
export default router