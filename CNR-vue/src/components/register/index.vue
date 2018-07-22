<template>
    <div>
    	<mt-field placeholder="请输入正确的手机号" type="number" v-model="phoneNum" :state="phoneNumState"></mt-field>
    	<mt-field v-model="code" :state="codeState">
			<span @click.stop = "sendCode">{{codeStr}}</span>
		</mt-field>
		<mt-field  :state="passwordState" type="password" v-model="password" placeholder="请输入您的密码"></mt-field>
    	<div class="registerBtn" @click='registerAction'>注&nbsp;&nbsp;册</div>
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>