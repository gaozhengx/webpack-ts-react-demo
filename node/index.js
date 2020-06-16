const express = require('express')
const app = express()
const path = require('path')
const mongo = require('./db')


// 接口，返回分页数据，
app.get('/api/list', async (req, res) => {
    // 分⻚页查询
    const { page } = req.query
    // 获取到集合
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
    const { category } = req.query;
    const fruits = await col.find({ category: category }).toArray();
    res.json(
        {
            status: 'SUCCEED',
            data: {
                fruits,
                pagination: {
                    total: fruits.length,
                    page: 1,
                    pageSize: fruits.length
                }
            }
        }
    )
})

app.listen(8000)
