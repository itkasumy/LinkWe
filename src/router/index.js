import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'

import LogisticsManage from 'components/LogisticsManage/LogisticsManage'
import MarketingManage from 'components/MarketingManage/MarketingManage'
import OrderManage from 'components/OrderManage/OrderManage'
import ProductManage from 'components/ProductManage/ProductManage'
import Setting from 'components/Setting/Setting'
import ShopDesign from 'components/ShopDesign/ShopDesign'
import MemberManage from 'components/MemberManage/MemberManage'
import DataStatistics from 'components/DataStatistics/DataStatistics'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
	routes: [
		{
			path: '/logisticsmanage',
			component: LogisticsManage
		},
		{
			path: '/marketingmanage',
			component: MarketingManage
		},
		{
			path: '/ordermanage',
			component: OrderManage
		},
		{
			path: '/productmanage',
			component: ProductManage
		},
		{
			path: '/setting',
			component: Setting
		},
		{
			path: '/shopdesign',
			component: ShopDesign
		},
		{
			path: '/membermanage',
			component: MemberManage
		},
		{
			path: '/datastatistics',
			component: DataStatistics
		}
	]
})
