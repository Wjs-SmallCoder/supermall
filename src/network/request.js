import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // axios 拦截器
  // 全局拦截
  // axios.interceptors.request.use()
  // axios.interceptors.response.use()
  // 拦截request(请求)
  instance.interceptors.request.use(config => {
    //成功拦截
    //拦截后不return 出去，会导致config 被拦截，不能将数据传递出去
    //可以在这里将数据修改，在网络请求的时候在界面显示图标(show，hidden[hide]),某些网络请求(登录)需要携带特殊信息(比如token)
    // console.log(config);
    return config
  },err => {
    //失败拦截
  });
  // 拦截response(响应)
  instance.interceptors.response.use(
    res => {
      //拦截后不return 出去，会导致res 被拦截，不能将数据传递出去
      // console.log(res);
      return res
    },err => {
      console.log(err);
    }
  );

  // 发送真正的网络请求
  return instance(config)
}


