<template>
	<div class="loginContainer">
		<div class="title">
			注册
			<router-link to="/login" class="toLogin">登录</router-link>
		</div>
		<div class="loginWrap">
			<form action="" method="POST" class="loginForm">
				<div class="inputBox">
					<div class="text">账号</div>
					<div class="telNum">
						<input type="tel" name="tel" class="tel" id="" placeholder="请输入您的手机号">
					</div>
				</div>
				<button class="getCheckCode">免费获取短信验证码</button>
				<div class="inputBox">
					<div class="text">短信验证码</div>
					<div class="check">
						<input type="text" name="checknumber" class="checknumber" id="" />
					</div>
				</div>
				<div class="inputBox">
					<div class="text">密码</div>
					<div class="password">
						<input type="password" name="password" class="pwd" id="" placeholder="密码">
					</div>
				</div>
				<div class="inputBox">
					<div class="text">确认密码</div>
					<div class="password">
						<input type="password" name="confirpwd" class="confirpwd" id="" placeholder="确认密码">
					</div>
				</div>
				<div class="inputBox">
					<div class="submit">
						<input type="submit" name="submit" class="" id="" value="提交">
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
	width 296px
	height 480px
	padding 10px
	background #eee
	box-shadow 0 0 6px 0 rgba(180, 180, 180, .5)
	border-radius 4px
	.title
		width 200px
		height 40px
		line-height 40px
		margin-top 10px
		padding-left 20px
		font-size 20px
		font-weight 400
		.toLogin
			float right
			color #f5222d
			font-size 16px
	.loginWrap
		margin-top 20px
		.loginForm
			.inputBox
				width 100%
				height 40px
				overflow hidden
				line-height 40px
				margin-bottom 20px
				.text
					float left
				.telNum, .password
					float left
					.tel, .pwd, .confirpwd
						width 160px
						height 40px
						margin-left 10px
						padding 0 0 0 18px
						border-radius 4px
						border none
						outline none
						font-size 16px
						font-weight 600
				.check
					float left
					.checknumber
						width 110px
						height 40px
						margin-left 10px
						padding 0 0 0 20px
						border-radius 4px
						border none
						outline none
						font-size 16px
						font-weight 600
				.submit
					width 220px
					margin 0 auto
					input
						width 220px
						height 40px
						background #409EFF
						border-radius 4px
						border none
						outline none
						font-size 16px
						font-weight 600
						color #fff
			.getCheckCode
				width 180px
				height 40px
				background #f5222d
				margin 0 0 20px 42px
				border-radius 4px
				border none
				outline none
				font-size 14px
				font-weight 600
				color #fff
</style>
