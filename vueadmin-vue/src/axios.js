import axios from "axios";
import router from "@/router";
import Element from "element-ui";

axios.defaults.baseURL = "http://localhost:8081"

const request = axios.create({
    timeout: 5000,
    headers: {
        'Content-Type': "application/json; charset=utf-8"
    }
})

request.interceptors.request.use(config => {
    // 请求头要加上jwt
    config.headers['Authorization'] = localStorage.getItem("token")
    return config
})

request.interceptors.response.use(response => {

    let res = response.data

    if (res.code === 200) {
        return response
    } else {
        Element.Message.error(res.msg ? res.msg : '系统异常')
        return Promise.reject(response.data.msg)
    }

}, error => {
    // 异常状态码情况
    // 先看看有没有自定义的异常数据(全局异常处理类)
    if (error.response.data) {
        error.massage = error.response.data.msg
    }

    // 401没有权限
    if (error.response.status === 401) {
        router.push('/login')
    }

    Element.Message.error(error.massage, {duration: 3000})
    return Promise.reject(error)
})

export default request