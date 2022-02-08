<template>
  <el-row type="flex" class="row-bg" justify="center">
    <!--左侧内容,栅格布局-->
    <el-col :xl="6" :lg="7">
      <h2>欢迎来到VueAdmin管理系统</h2>
      <el-image :src="require('@/assets/TionKior.jpg')" style="height: 180px; width: 180px;"/>
      <p>微信 TionKior</p>
      <p>Create By TionKior</p>
    </el-col>

    <!--span占用的比例-->
    <el-col :span="1">
      <!--分割线-->
      <el-divider direction="vertical"></el-divider>
    </el-col>

    <!--右侧内容,右侧是登录-->
    <el-col :xl="6" :lg="7">
      <!--登录表单,ref='ruleForm'是给表单一个实例,后面方法用到的时候会传递一个实例-->
      <el-form :model="loginForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username" style="width: 380px;">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" style="width: 380px;">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code" style="width: 380px;">
          <el-input v-model="loginForm.code" style="width: 172px;float: left"></el-input>
          <!--验证码的图片-->
          <el-image :src="captchaImg" class="captchaImg"></el-image>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        code: '',
        // 后端返回的随机码,用于验证码的校验
        token: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
        ],
        code: [
          {required: true, message: '请输入验证码', trigger: 'blur'},
          {min: 5, max: 5, message: '长度为 5 个字符', trigger: 'blur'}
        ]
      },
      captchaImg: null
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('/login', this.loginForm).then(res => {

            // 登陆成功获取jwt
            const jwt = res.headers['authorization']
            // 把jwt保存到store中
            this.$store.commit('SET_TOKEN',jwt)
            // 跳转页面
            this.$router.push("/index")

          })

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 向后端请求验证码图片(base64格式)和随机码(token)
    getCaptcha() {
      this.$axios.get('/captcha').then(res => {

        console.log('/captcha')
        console.log(res)

        this.loginForm.token = res.data.data.token
        this.captchaImg = res.data.data.captchaImg
      })
    }
    // Result - code、msg、data

  },
  created() {
    this.getCaptcha();
  }

}
</script>

<style scoped>
/*设置背景颜色*/
.row-bg {
  background-color: #FAFAFA;
  /*覆盖所有的界面*/
  height: 100vh;
  /*设置元素居中,默认横向是主轴*/
  display: flex;
  /*上下交叉轴居中*/
  align-items: center;
  /*文字居中*/
  text-align: center;
}

/*分割线长度*/
.el-divider {
  height: 200px;
}

.captchImg {
  float: left;
  margin-left: 8px;
  /*圆角*/
  border-radius: 4px;
}
</style>