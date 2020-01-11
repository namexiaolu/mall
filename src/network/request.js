import axios from 'axios'

export function request(config){
    return new Promise((resolve,reject) =>{
        // 创建axios实例
        const instance = axios.create({
            baseURL:'http://123.207.32.32:8000',
            timeout: 5000
        })

        // 拦截器
        axios.interceptors.request.use(config =>{
            console.log(config);  
        },err =>{
            console.log(err);
        });
        axios.interceptors.response;

        // 发送真正的网络请求
        instance(config)
            .then(res =>{
                resolve(res)
            })
            .catch(err =>{
                reject(err)
            })
    })
}