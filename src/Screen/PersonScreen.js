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

import { imageBaseURL, SearchCustomer } from '../DataSever/URLConfig';
import UserManager from '../DataSever/UserManager';

const Item = List.Item;
const Brief = List.Brief;
const data = [
    {
        icon: 'http://localhost:46560/HeadImg/c.png',
        text: '待付款'
    },
    {
        icon: 'http://localhost:46560/HeadImg/b.png',
        text: '待发货'
    },
    {
        icon: 'http://localhost:46560/HeadImg/a.png',
        text: '待收货'
    },
    {
        icon: 'http://localhost:46560/HeadImg/d.png',
        text: '待评价'
    },
]
export default class PersonScreen extends Component {

    async componentDidMount() {
        if(UserManager.isLogin===false){
            return;
          }
        const result = await UserManager.SearchCustomer();
        if (result.success === false) {
            Toast.fail(result.errorMessage, 1);
            console.log(2);
            return;
        }
        const User = result.User[0];
        console.log(User);
        this.setState({ nickname: result.NickName, image: result.HeadImg, name: User.Name })

    }
    constructor(props) {
        super(props)

        this.state = {
            nickname: '',
            image: '',
            name: '',
        }
    }


    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                >
                    登录
                </NavBar>
                <WhiteSpace />
                <Flex
                    justify={'left'}
                    style={{ backgroundColor: '#ffffff' }}
                    wrap={'wrap'}
                >
                    <img
                        alt={''}
                        src={imageBaseURL + this.state.image}
                        style={{ width: '100px', height: '100px', margin: '5px' }}
                    />
                    <div>
                        <span style={{ display: 'block', fontSize: '25px' }}>{this.state.nickname}</span>
                        <WhiteSpace />
                        <span style={{ display: 'block', fontSize: '15px' }}>{this.state.name}</span>
                    </div>
                </Flex>
                <WhiteSpace />
                <List >
                    <Item extra="查看所有订单" arrow="horizontal" onClick={() => { }}>我的订单</Item>
                    <Item>
                        <Grid data={data} hasLine={false} columnNum={4} itemStyle={{ height: '100px' }} />
                    </Item>
                </List>
                <WhiteSpace />
                <List>
                    <Item arrow="horizontal" onClick={() => { }}>收货地址</Item>
                    <Item arrow="horizontal" onClick={() => {
                        this.props.history.push('UpdatePersonScreen');
                     }}>修改个人信息</Item>
                    <Item arrow="horizontal" onClick={() => { }}>Title</Item>
                    <Item arrow="horizontal" onClick={() => { }}>Title</Item>
                </List>
            </div>
        )
    }
}