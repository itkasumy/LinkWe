<template>
	<header>
		<el-row>
			<el-col :span="4"><div class="logo el-icon-menu">Linkwe</div></el-col>
			<el-col :span="12" style="height: 60px;"></el-col>
			<el-col :span="8"></el-col>
		</el-row>
	</header>
</template>

<script>
export default {}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
header
	position relative
	display block
	width 100%
	height 60px
	background #fff
	box-shadow 0 2px 20px 0 rgba(15,12,70,.1)
	z-index 0
	.logo
		height 60px
		line-height 60px
		font-size: 24px
		font-weight 700
</style>
