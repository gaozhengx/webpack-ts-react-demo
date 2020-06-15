const mongodb = require('./db');

// 订阅connect事件
mongodb.once('connect', async () => {
    // 获取到集合
    const col = mongodb.col('fruits');

    try {
        await col.deleteMany();
        await col.insertMany([
            { key: '1', name: "苹果", price: 5, category: "水果" },
            { key: '2', name: "香蕉", price: 3.5, category: "水果" },
            { key: '3', name: "芒果", price: 15, category: "水果" },
            { key: '4', name: "砂糖橘", price: 8, category: "水果" },
            { key: '5', name: "土豆", price: 2, category: "蔬菜" },
            { key: '6', name: "西红柿", price: 3, category: "蔬菜" },
            { key: '7', name: "茄子", price: 4, category: "蔬菜" },
            { key: '8', name: "韭菜", price: 5, category: "蔬菜" },
            { key: '9', name: "牛肉", price: 30, category: "生鲜" },
            { key: '10', name: "鱼", price: 12, category: "生鲜" },
            { key: '11', name: "大闸蟹", price: 99, category: "生鲜" },
            { key: '12', name: "鲜虾", price: 20, category: "生鲜" }
        ])

    } catch (err) {
        console.log('插入数据失败！')
        console.log(err)
    }
})