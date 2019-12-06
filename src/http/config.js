// 引入 fly
const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()

// //设置请求基地址
// fly.config.baseURL="https://wendux.github.io/"
// 配置请求基地址
// //定义公共headers
// fly.config.headers={xx:5,bb:6,dd:7}
// //设置超时
// fly.config.timeout=10000;

// 添加请求拦截器
fly.interceptors.request.use((config, promise) => {
    // 给所有请求添加自定义header
    // config.headers['X-Tag'] = 'flyio'
    return config
})

// Vue.prototype.$http=fly //将fly实例挂在vue原型上

export default fly
