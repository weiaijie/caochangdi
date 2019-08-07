<template>
    <div class="login_container">
        <div class="login" :model="loginForm">
            <div class="logo"></div>
            <div class="g_list">
                <van-cell-group>
                    <van-field 
                        v-model="loginForm.username" 
                        clearable
                        placeholder="请输入你的账号" 
                    />
                </van-cell-group> 
                <van-cell-group>
                    <van-field 
                        v-model="loginForm.password" 
                        type="password" 
                        clearable
                        placeholder="请输入你的密码" 
                    />
                </van-cell-group>
            </div>
            <van-button type="primary" size="large" @click="handleLogin">登陆</van-button>
            <div class="tip">
                <p>未登陆过的用户名会自动注册</p>
            </div>
        </div>
        <van-overlay
          :show="show"
        />
        <van-loading color="#1989fa" :style="'display:' + display"/>
    </div>
</template>



<script>
import { Toast } from 'vant';
export default {
    name: 'Login',
    data() {
        return{
            loginForm: {
                username: 'admin',
                password: '111111',
            },
            show: false,
            display: 'none'
        }
    },
    watch: {
       
    },
    created() {

    },
    mounted() {
    },
    destroyed() {

    },
    methods: {
        handleLogin() {
            if(this.loginForm.password !== '111111'){
                this.$notify('密码错误')
                this.loginForm.password = ''
            }else{
                // this.show = true
                // this.display = 'block'
                Toast.loading({
                  mask: true,
                  conPrefix: 'van-loading',
                  message: '登陆中...',
                  duration: 1000
                });
                setTimeout(() => {
                    this.show = false
                    this.$router.push('/')
                },1000)
                
            }
        }
    }
}
</script>

<style lang="less" scoped>
.login_container{
    position:fixed;
    width: 100%;
    height:100%;
    background:#eee;
    .login{
        width:320px;
        padding-top:30px;
        margin:auto;
        .logo{
            background-image:url(../../icons/logo.png);
            height:100px;
            width:244px;
            margin:0 auto 20px;
            background-size:244px 100px;

        }
        .g_list{
            width: 290px;
            margin:auto;
            border-radius: 4px;
            overflow:hidden;

        }
        .van-button{
            width: 290px;
            height: 44px;
            line-height: 44px;
            background: #146fdf;
            border: none;
            border-radius: 4px;
            color: #fff;
            font-size: 16px;
            margin: 15px auto;
            display: block;
        }
        .tip{
            p{
                text-align:center;
                color:red;
                font-size:15px;
            }
        }
    }
    .van-loading{ 
        position:fixed;
        z-index: 2;
        left:50%;
        top:50%;
        margin-left:-15px;
        margin-top:-15px;
    }
}

</style>

