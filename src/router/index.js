import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const My = () => import('../views/my/My')
const Category = () => import('../views/category/Category')
// 1.安装插件
Vue.use(VueRouter)
// 2.创建路由对象

const routes = [
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
	},
	{
		path: '/category',
		component: Category
	},
	{
		path: '/my',
		component: My
	}
]
const router = new VueRouter({
	routes,
	mode: 'hash'
})
// 3. 导出
export default router