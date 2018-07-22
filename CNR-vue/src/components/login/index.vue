<template>
    <div>
    	<mt-field placeholder="请输入正确的手机号" type="number" v-model="phoneNum" :state="phoneNumState"></mt-field>
		<mt-field  :state="passwordState" type="password" v-model="password" placeholder="请输入您的密码"></mt-field>
    	<div class="loginBtn" @click='loginAction'>登&nbsp;&nbsp;录</div>
    </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>