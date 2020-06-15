import axios from 'axios';

import { message } from 'antd';

// 生产环境
const isDev = process.env.NODE_ENV === 'development';
const service = axios.create({
    baseUrl: isDev ? 'http://localhost:3000' : ''
})


export const fruitsApi = {
    // 初始化数据
    getFruitList: (page) => {
        return service.get(`/api/list?page=${page}`);
    },
}