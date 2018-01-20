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
export default {
	data () {
		return {}
	}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import './Register'
</style>
