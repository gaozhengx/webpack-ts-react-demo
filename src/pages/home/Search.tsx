
import React from 'react';
import { Input } from 'antd';
import './index.scss'
const { Search } = Input;

export default class App extends React.Component<any, any> {

    render() {
        const { handleSearchChange } = this.props;
        return (
            <>
                <Search
                    placeholder="请输入种类"
                    onSearch={(v) => handleSearchChange(v)}
                    className="search"
                    enterButton="搜索"
                />
            </>
        );
    }
}
