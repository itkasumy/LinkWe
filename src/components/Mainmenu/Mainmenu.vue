<template>
	<aside>
		<router-link class="menu el-icon-upload" to="/home/shopdesign">商铺装修</router-link>
		<router-link class="menu el-icon-sold-out" to="/home/product">商品管理</router-link>
		<router-link class="menu el-icon-upload" to="/home/order">订单管理</router-link>
		<router-link class="menu el-icon-upload" to="/home/logistics">物流管理</router-link>
		<router-link class="menu el-icon-upload" to="/home/member">会员管理</router-link>
		<router-link class="menu el-icon-upload" to="/home/marketing">营销管理</router-link>
		<router-link class="menu el-icon-upload active" to="/home/datastatistics">数据统计</router-link>
		<router-link class="menu el-icon-setting" to="/home/setting">基础设置</router-link>
	</aside>
</template>

<script>
export default {}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
aside
	flex 0 0 120px
	height 100%
	background #222430
	.menu
		display block
		position relative
		width 120px
		height 41px
		line-height 42px
		text-align center
		color #757993
		font-size 14px
		font-weight 700
		&.active, &:hover
			&:after
				content ""
				width 4px
				background #fff
				border-radius 2px
				position absolute
				right 10px
				top 25%
				bottom 25%
</style>
