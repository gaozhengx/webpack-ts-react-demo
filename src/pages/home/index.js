import React, { Component } from 'react'
import { Row, Col, Table, Button } from 'antd';
import './index.scss'
import { fruitsApi } from '../../services'
import { connect } from 'react-redux'
import { logout } from '../../actions'
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

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    this.setState({
                        pagination: res.data.data.pagination,
                        fruits: res.data.data.fruits,
                    })
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
        const { fruits, pagination } = this.state;
        const { logout } = this.props;
        return (
            <>
                <Row className="root">
                    <Col span={12} offset={6} className="login-btn">
                        <Button type="primary" onClick={logout}>退出登录</Button>
                    </Col>
                </Row>
                <Row >
                    <Col span={12} offset={6}>
                        <Table
                            columns={columns}
                            dataSource={fruits}
                            bordered={false}
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


export default connect(null, { logout })(Home);