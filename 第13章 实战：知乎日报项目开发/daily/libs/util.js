import axios from 'axios';

//基本配置
const Util = {
    //对应于代理中的url和port
    imgPath: 'http://127.0.0.1:8011/img',
    apiPath: 'http://127.0.0.1:8010/'
};

//获取今天的时间戳
Util.getTodayTime = function () {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}
//获取前一天的日期
Util.prevDay = function (timestamp = (new Date()).getTime()) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return year + "" + month + "" + day;
}

//ajax通用配置
//创建一个新的axios
Util.ajax = axios.create({
    // 配置默认基本路径
    baseURL: Util.apiPath
});

//添加响应拦截器
Util.ajax.interceptors.response.use(res => {
    return res.data;
});

export default Util;


