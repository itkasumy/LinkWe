<template>
	<div class="loginContainer">
		<div class="title">登录</div>
		<div class="loginWrap">
			<form action="" method="POST" class="loginForm">
				<div class="inputBox">
					<div class="text">账号</div>
					<div class="telNum">
						<input type="tel" name="tel" class="tel" id="" placeholder="请输入您的手机号">
					</div>
				</div>
				<div class="inputBox">
					<div class="text">密码</div>
					<div class="password">
						<input type="password" name="password" class="pwd" id="" placeholder="密码">
					</div>
				</div>
				<div class="assistance">
					<div class="left">
						<input type="checkbox" name="freelogin" id="freelogin" class="freeLogin">
						<label for="freelogin">七天内免登录</label>
					</div>
					<div class="right">
						<router-link to="/fogetpwd" class="forgetpwd">忘记密码?</router-link>
					</div>
				</div>
				<div class="loginOrRegister">
					<div class="login">
						<input type="button" value="登录">
					</div>
					<div class="register">
						<router-link to="/register">
							<input type="button" value="去注册">
						</router-link>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.loginContainer
	width 276px
	height 400px
	padding 10px
	background #eee
	box-shadow 0 0 6px 0 rgba(180, 180, 180, .5)
	border-radius 4px
	.title
		height 40px
		line-height 40px
		margin-top 10px
		padding-left 20px
		font-size 20px
		font-weight 400
	.loginWrap
		margin-top 20px
		.loginForm
			.inputBox
				width 100%
				height 40px
				line-height 40px
				margin-bottom 20px
				.text
					float left
				.telNum, .password
					float left
					.tel, .pwd
						width 140px
						height 40px
						margin-left 10px
						padding 0 0 0 40px
						border-radius 4px
						border none
						outline none
						font-size 16px
						font-weight 600
			.assistance
				width 220px
				height 40px
				line-height 40px
				color #666
				font-size 12px
				.left
					float left
					margin-left 10px
				.right
					float right
					.forgetpwd
						color #666
			.loginOrRegister
				height 40px
				margin-top 20px
				.login
					float left
					input
						width 118px
						height 40px
						background #409EFF
						margin-left 10px
						border-radius 4px
						border none
						outline none
						font-size 16px
						font-weight 400
						color #fff
				.register
					float left
					input
						width 118px
						height 40px
						margin-left 10px
						border-radius 4px
						border none
						outline none
						font-size 16px
						font-weight 500
</style>
