<template>
    <div>
        <p>
            <span>用户名：</span>
            <span><input type="text" v-model="FormInp.user" placeholder="请输入用户名"></span>
        </p>
        <p>
            <span>密码：</span>
            <span><input type="password" v-model="FormInp.pwd" placeholder="请输入密码"></span>
        </p>
        <button @click="handleSub">登录</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
           FormInp:{
               user:'',
               pwd:''
           } 
        }
    },
    methods: {
        handleSub(){
            console.log(this.FormInp)
        }
    }
}
</script>

<style>

</style>
