import React, { Component } from 'react'
import { Row, Col, Table, } from 'antd';
import './index.sass'
import { fruitsApi } from '../../services'


const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: '种类',
        dataIndex: 'category',
        key: 'category',
    },
];

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            pagination: {
                total: 0,
                page: 1,
                pageSize: 0,
            },
            fruits: []
        }
    }

    componentDidMount() {
        this.getData(this.state.pagination.page);
    }

    getData(page) {
        fruitsApi.getFruitList(page)
            .then(res => {
                if (res && res.status === 200) {
                    this.setState({ isLoading: true })
                    this.setState({
                        pagination: res.data.data.pagination,
                        fruits: res.data.data.fruits,
                    })
                    this.setState({ isLoading: false })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    handleChange(page, pageSize) {
        this.getData(page);
    }
    render() {
        const { fruits, isLoading, pagination } = this.state;
        return (
            <>
                <Row className="root" >
                    <Col span={12} offset={6}>
                        <Table
                            columns={columns}
                            dataSource={fruits}
                            bordered={false}
                            loading={isLoading}
                            pagination={
                                {
                                    defaultCurrent: 1,
                                    pageSize: pagination.pageSize,
                                    total: pagination.total,
                                    onChange: this.handleChange.bind(this)
                                }
                            }
                        />
                    </Col>
                </Row>
            </>
        )
    }
}

