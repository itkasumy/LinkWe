<template>
	<div class="submenu-tmp">
		<div class="title">数据概况</div>
		<ul>
			<li>
				<router-link to="/">
					<span>今日概况</span>
					<i class="el-icon-caret-right"></i>
				</router-link>
			</li>
		</ul>
		<span class="line"><i></i></span>
	</div>
</template>

<script>
export default {}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
ul, li
	list-style none
	margin 0
	padding 0

.submenu-tmp
	font-size 12px
	.title
		box-sizing border-box
		width 90px
		line-height 12px
		padding 12px 10px
		font-weight 700
	ul
		li, router-link
			display block
			width 90px
			height 36px
			line-height 36px
			margin 2px 0
			color #35323b
			background #e9eaf0
			border-radius 6px
			span
				float left
				padding-left 10px
			i
				line-height 36px
				padding-right 6px
				float right

	.line
		display block
		margin 2px 0
		padding 12px 10px
		i
			display block
			height 1px
			background #ccc
</style>
