import React, { Component } from 'react'
import {
    Button,
    NavBar,
    WingBlank,
    WhiteSpace,
    List,
    InputItem,
    Toast
} from 'antd-mobile';
import UserManager from '../DataSever/UserManager'
export default class LoginScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Phone: '',
            pwd: ''
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
                <List>
                    <InputItem
                        type={'text'}
                        value={this.state.Phone}
                        onChange={(Phone) => { this.setState({ Phone }) }}
                        placeholder={"请输入用户名"}
                    >
                        用户名
                    </InputItem>
                    <InputItem
                        type={'password'}
                        value={this.state.pwd}
                        onChange={(pwd) => { this.setState({ pwd }) }}
                        placeholder={"请输入密码"}
                    >
                        密码
                     </InputItem>
                </List>
                <WhiteSpace />
                <WingBlank>
                    <Button
                        type={'primary'}
                        onClick={async () => {
                            const result = await UserManager.login(this.state.Phone, this.state.pwd);
                            console.log(result);
                            if (result.success === false) {
                                Toast.fail(result.errorMessage);
                                return;
                            }
                            this.props.history.push("TabBarScreen");
                        }}
                    >
                        登录
                    </Button>
                    <WhiteSpace />
                    <Button
                        type={'primary'}
                        onClick={async () => {
                            this.props.history.push('RegisterScreen');
                        }}
                    >
                        注册
                     </Button>
                </WingBlank>
            </div>
        )
    }
}
