import React, { Component } from 'react'
import {
    Button,
    NavBar,
    WingBlank,
    WhiteSpace,
    List,
    InputItem,
    Toast,
    Card,
    Flex,
    Grid,
} from 'antd-mobile';

import { imageBaseURL } from '../DataSever/URLConfig';

const Item = List.Item;
const Brief = List.Brief;
const data = [
    {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: '蔬菜'
    },
    {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: '水果'
    },
    {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: '蔬菜'
    },
    {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: '水果'
    },
    {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: '水果'
    },
]
export default class PersonScreen extends Component {

    render() {
        return (
            <div>
                <Flex
                    justify={'left'}
                    style={{ backgroundColor: '#ffffff' }}
                    wrap={'wrap'}
                >
                    <img
                        alt={''}
                        // src={imageBaseURL + this.state.user.image}
                        style={{ width: '100px', height: '100px', margin: '5px' }}
                    />
                    <div>
                        <span style={{ display: 'block', fontSize: '30px' }}>用户名</span>
                        <span style={{ display: 'block', fontSize: '20px' }}>ID</span>
                    </div>
                </Flex>
                <WhiteSpace />
                <List >
                    <Item extra="查看所有订单" arrow="horizontal" onClick={() => { }}>我的订单</Item>
                    <Item>
                        <Grid data={data} hasLine={false} columnNum={5} itemStyle={{ height: '100px' }} />
                    </Item>
                </List>
                <WhiteSpace />
                <List>
                    <Item arrow="horizontal" onClick={() => { }}>收货地址</Item>
                    <Item arrow="horizontal" onClick={() => { }}>Title</Item>
                    <Item arrow="horizontal" onClick={() => { }}>Title</Item>
                    <Item arrow="horizontal" onClick={() => { }}>Title</Item>
                </List>
            </div>
        )
    }
}