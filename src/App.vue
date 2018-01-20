<template>
  <div id="app" class="layout">
		<l-header></l-header>
		<div class="container">
			<mainmenu></mainmenu>
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
import LHeader from 'components/LHeader/Lheader'
import Mainmenu from 'components/Mainmenu/Mainmenu'

export default {
	name: 'App',
	components: {
		LHeader,
		Mainmenu
	}
}
</script>

<style rel='stylesheet/stylus' lang="stylus" scoped>
.layout
	height 100%
	display flex
	flex-direction column
	.container
		flex 1
		display flex
		flex-direction row
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
