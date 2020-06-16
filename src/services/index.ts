import axios from 'axios';


// 生产环境
const isDev = process.env.NODE_ENV === 'development';
const service = axios.create({
    baseURL: isDev ? 'http://localhost:3000' : ''
})


export const fruitsApi = {
    // 初始化数据
    getFruitList: (page:number) => {
        return service.get(`/api/list?page=${page}`);
    },

    searchFruitByCategory: (v: string) => {
        return service.get(`/api/category?category=${v}`);
    }
}