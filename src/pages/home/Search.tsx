
import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

export default class App extends React.Component<any, any> {

    render() {
        const { handleSearchChange } = this.props;
        return (
            <>
                <Search
                    placeholder="搜索类别"
                    onSearch={(v) => handleSearchChange(v)}
                    style={{ width: 400 }}
                    enterButton="搜索"
                />
            </>
        );
    }
}
