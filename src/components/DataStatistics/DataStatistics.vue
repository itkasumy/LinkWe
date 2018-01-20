<template>
	<div class="container">
		<submenu></submenu>
		<div class="content">
			<tabmenu></tabmenu>
			DataStatistics
		</div>
	</div>
</template>

<script>
import Submenu from 'components/Submenu/Submenu'
import Tabmenu from 'components/Tabmenu/Tabmenu'
export default {
	data () {
		return {}
	},
	components: {
		Submenu,
		Tabmenu
	}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
	.container
		width 100%
		height 100%
		overflow hidden
		background #fafafa
		.content
			width 100%
			overflow-y scroll
			margin 20px
			padding 10px
			background #fff
			border-radius 4px
			box-shadow 0 0 4px 0 rgba(180, 180, 180, .5)
</style>
