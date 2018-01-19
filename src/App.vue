<template>
  <div id="app" class="layout">
    <header>
			<el-row>
				<el-col :span="4"><div class="logo el-icon-menu">lorem</div></el-col>
				<el-col :span="12" style="height: 60px;"></el-col>
				<el-col :span="8"></el-col>
			</el-row>
		</header>
		<div class="container">
			<aside>
				<router-link class="menu el-icon-upload" to="/shopdesign">商铺装修</router-link>
				<router-link class="menu el-icon-sold-out" to="/productmanage">商品管理</router-link>
				<router-link class="menu el-icon-upload" to="/ordermanage">订单管理</router-link>
				<router-link class="menu el-icon-upload" to="/logisticsmanage">物流管理</router-link>
				<router-link class="menu el-icon-upload" to="/membermanage">会员管理</router-link>
				<router-link class="menu el-icon-upload" to="/marketingmanage">营销管理</router-link>
				<router-link class="menu el-icon-upload active" to="/datastatistics">数据统计</router-link>
				<router-link class="menu el-icon-setting" to="/setting">基础设置</router-link>
			</aside>
			<main>
				<div class="main">
					<router-view />
				</div>
				<footer></footer>
			</main>
		</div>
  </div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style rel='stylesheet/stylus' lang="stylus" scoped>
.layout
	height 100%
	display flex
	flex-direction column
	header
		display block
		width 100%
		height 60px
		background #fff
		box-shadow 0 2px 20px 0 rgba(15,12,70,.1)
		.logo
			height 60px
			line-height 60px
			font-size: 24px
			font-weight 700
	.container
		flex 1
		display flex
		flex-direction row
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
			el-menu
				background none
		main
			flex 1
			display flex
			flex-direction column
			.main
				flex 1
				height calc(100% - 80px)
			footer
				height 80px
				background #ccc
</style>
