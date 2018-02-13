<template>
	<div class="loginContainer">
		<div class="title">
			注册
			<router-link to="/login" class="toLogin">登录</router-link>
		</div>
		<div class="loginWrap">
			<form action="" method="POST" class="loginForm" @submit.prevent="submit">
				<div class="inputBox">
					<div class="text">账号</div>
					<div class="telNum">
						<input type="tel" name="accout" v-model="registerForm.accout" class="tel" id="2" placeholder="请输入您的手机号">
					</div>
				</div>
				<button class="getCheckCode">免费获取短信验证码</button>
				<div class="inputBox">
					<div class="text">短信验证码</div>
					<div class="check">
						<input type="text" name="checknumber" class="checknumber" id="1" />
					</div>
				</div>
				<div class="inputBox">
					<div class="text">密码</div>
					<div class="password">
						<input type="password" name="password" v-model="registerForm.accout" class="pwd" id="3" placeholder="密码">
					</div>
				</div>
				<div class="inputBox">
					<div class="text">确认密码</div>
					<div class="password">
						<input type="password" name="confirpwd" class="confirpwd" id="4" placeholder="确认密码">
					</div>
				</div>
				<div class="inputBox">
					<div class="submit">
						<input type="submit" name="submit" class="" id="5" value="提交">
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
// import 'whatwg-fetch'
// import 'es6-promise'

export default {
	data () {
		return {
			registerForm: {
				accout: '',
				password: ''
			}
		}
	},
	methods: {
		submit () {
			axios.post('http://111.230.222.214:8001/yyk/register', {
				accout: '123',
				password: '123',
				origin: 'test',
				verCode: '123'
			}).then(res => {
				console.log(res.data)
			})
			axios.post('http://111.230.222.214:8001/yyk/login', {
				accout: '123',
				password: '123'
			}).then(res => {
				console.log(res.data)
			})
			// fetch('http://111.230.222.214:8001/yyk/register', {
			// 	method: 'POST',
			// 	body: 'account=123&password=123&origin=test&verCode=123'
			// }).then(res => res.json())
			// 	.then(data => {
			// 		console.log(data)
			// 	})

			// fetch('http://111.230.222.214:8001/yyk/login', {
			// 	method: 'POST',
			// 	body: 'account=123&password=123'
			// }).then(res => res.json())
			// 	.then(data => {
			// 		console.log(data)
			// 	})
		}
	}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import './Register'
</style>
