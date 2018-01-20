<template>
	<div class="layout">
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
	components: {
		LHeader,
		Mainmenu
	}
}
</script>
<style style="text/stylus" lang="stylus" scoped>
@import './Home'
</style>
