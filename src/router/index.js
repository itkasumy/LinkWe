import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'

import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI)

const Login = resolve => {
	import('components/Login/Login').then(module => {
		resolve(module)
	})
}
const Register = resolve => {
	import('components/Register/Register').then(module => {
		resolve(module)
	})
}
const Home = resolve => {
	import('components/Home/Home').then(module => {
		resolve(module)
	})
}
const Logistics = resolve => {
	import('components/Logistics/Logistics').then(module => {
		resolve(module)
	})
}
const Marketing = resolve => {
	import('components/Marketing/Marketing').then(module => {
		resolve(module)
	})
}
const Order = resolve => {
	import('components/Order/Order').then(module => {
		resolve(module)
	})
}
const Product = resolve => {
	import('components/Product/Product').then(module => {
		resolve(module)
	})
}
const Setting = resolve => {
	import('components/Setting/Setting').then(module => {
		resolve(module)
	})
}
const ShopDesign = resolve => {
	import('components/ShopDesign/ShopDesign').then(module => {
		resolve(module)
	})
}
const Member = resolve => {
	import('components/Member/Member').then(module => {
		resolve(module)
	})
}
const DataStatistics = resolve => {
	import('components/DataStatistics/DataStatistics').then(module => {
		resolve(module)
	})
}

const routes = [
	{
		path: '/register',
		component: Register
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/home',
		component: Home,
		children: [
			{
				path: 'logistics',
				component: Logistics
			},
			{
				path: 'marketing',
				component: Marketing
			},
			{
				path: 'order',
				component: Order
			},
			{
				path: 'product',
				component: Product
			},
			{
				path: 'setting',
				component: Setting
			},
			{
				path: 'shopdesign',
				component: ShopDesign
			},
			{
				path: 'member',
				component: Member
			},
			{
				path: 'datastatistics',
				component: DataStatistics
			}
		]
	}
]

export default new Router({
	routes
})
