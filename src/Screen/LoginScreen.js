import React, { Component } from 'react'
import { 
    Button,
    NavBar,
    WingBlank, 
    WhiteSpace ,
    List,
    InputItem,
    Toast
} from 'antd-mobile';
import UserManager from '../DataSever/UserManager'
export default class LoginScreen extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         password:''
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
        <img src={logo}/>
        <List>
            <InputItem
                type={'text'}
                value={this.state.username}
                onChange={(username)=>{this.setState({username})}}
                placeholder={"请输入用户名"}
            >
            用户名
            </InputItem>
            <InputItem
                type={'password'}
                value={this.state.password}
                onChange={(password)=>{this.setState({password})}}
                placeholder={"请输入密码"}
            >
            密码
            </InputItem>
        </List>
        <WhiteSpace/>
        <WingBlank>
            <Button
                type={'primary'}
                onClick={async()=>{
                    const result=await userManager.login(this.state.username,this.state.password);
                    console.log(result);
                    if(result.success===false)
                    {
                        Toast.fail(result.errorMessage);
                        return;
                    }
                }}
            >
            登录
            </Button>
            <WhiteSpace/>
            <Button
                type={'primary'}
                onClick={async()=>{
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
