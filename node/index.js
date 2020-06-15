const express = require('express')
const app = express()
const path = require('path')
const mongo = require('./db')


// 接口，返回分页数据，
app.get('/api/list', async (req, res) => {
    // 分⻚页查询
    const { page } = req.query
    const col = mongo.col('fruits')
    // 看看总件数
    const total = await col.find().count()
    // 每页条数
    const pageSize = 5;
    const fruits = await col
        .find()
        .skip((page - 1) * pageSize)//放弃多少条
        .limit(pageSize)
        .toArray()

    // 响应内容
    res.json({
        status: 'SUCCEED',
        data: {
            fruits,
            pagination: {
                total,//总条数
                page,//第几页
                pageSize
            }
        }
    })
})

// 查询分类

app.get('/api/category', async (req, res) => {
    const col = mongo.col('fruits');
    //分组
    const data = await col.distinct('category');
    res.json(
        {
            ok: 1,
            data
        }
    )
})

app.listen(3001)
