<template>
	<div class="layout">
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
				<router-link class="menu el-icon-upload" to="/datastatistics">数据统计</router-link>
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
export default {}
</script>
<style style="text/stylus" lang="stylus" scoped>
@import './Home'
</style>
