<template>
	<div class="loginContainer">
		<div class="title">登录</div>
		<div class="loginWrap">
			<form action="" method="POST" class="loginForm">
				<div class="inputBox">
					<div class="text">账号</div>
					<div class="telNum">
						<input type="tel" name="tel" class="tel" id="tel" v-model="loginForm.accout" placeholder="请输入您的手机号">
					</div>
				</div>
				<div class="inputBox">
					<div class="text">密码</div>
					<div class="password">
						<input type="password" name="password" class="pwd" v-model="loginForm.password" id="pwd" placeholder="密码">
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
						<input type="button" @click="login" value="登录">
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
// import axios from 'axios'

export default {
	data () {
		return {
			loginForm: {
				accout: '',
				password: ''
			}
		}
	}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import './Login'
</style>
