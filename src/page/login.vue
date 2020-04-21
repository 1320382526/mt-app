<template>
    <div class="page-login">
        <div class="login-header">
            <a class="logo" href="http://www.meituan.com"></a>
        </div>
        <div class="login-panel">
            <div class="banner">
                <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
            </div>
            <div class="from">
                <h4 v-if="error" class="tips">{{error}}</h4>
                <p>
                    <span>账号登陆</span>
                </p>
                <el-input :class="{'error': error && !userName}" v-model="userName" placeholder="手机号/用户名/邮箱" prefix-icon="profile"></el-input>
                <el-input :class="{'error': error && !passWord}" v-model="passWord" type="password" placeholder="密码" prefix-icon="password"></el-input>
                <div class="foot">
                    <a href="#">忘记密码</a>
                </div>
                <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
                <p class="reg">
                    <span>还没有账号？</span>
                    <router-link :to="{name: 'register'}">免费注册</router-link>
                </p>
                <div class="oauth-wrapper">
                    <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
                    <div class="oauth cf">
                        <span class="oauth__link oauth__link--qq" data-href="/account/connect/tencent" target="_blank" id="J-third-tencent"></span>
                        <span class="oauth__link oauth__link--weibo" data-href="/account/connect/sina" target="_blank" id="J-third-sina"></span>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <ul>
                <li><a href="#">关于美团</a></li>
                <li><a href="#">加入我们</a></li>
                <li><a href="#">商家入驻</a></li>
                <li><a href="#">帮助中心</a></li>
                <li><a href="#">美团手机版</a></li>
            </ul>
            <p>©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
        </footer>
    </div>
</template>
<script>
import api from "@/api/index.js"
export default {
    data () {
        return {
            userName: '',
            passWord: '',
            error: ''
        }
    },
    methods: {
        submit () {
            if(!this.userName){
                this.error = '请输入账号'
                return false
            }
            if(!this.passWord){
                this.error = '请输入密码'
                return false
            }

            api.login({
                params: {
                    userName: this.userName,
                    password: this.passWord
                }
            }).then(res => {

                if(res.data.status == 'success') {
                    this.$router.push({name: 'index'})
                    this.$store.commit('setUserName', this.userName)
                }else {
                    this.error = res.data.msg
                }
            })
        }
    }
}
</script>
<style lang="scss">
    @import "@/assets/css/login/index.scss"
</style>
