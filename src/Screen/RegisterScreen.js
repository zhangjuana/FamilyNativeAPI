import React, { Component } from 'react'

import { 
    Button,
    NavBar,
    WingBlank, 
    WhiteSpace ,
    List,
    InputItem,
    Icon,
    Toast
} from 'antd-mobile';
import userManager from "../DataServer/UserManager";
export default class RegisterScreen extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Phone:'',
         pwd:''
      }
    }
    
  render() {
    return (
      <div>
        <NavBar
            mode="dark"
            icon={<Icon type="left"/>}
            onLeftClick={()=>{this.props.history.goBack()}}
        >
            注册
        </NavBar>
        <List>
            <InputItem
                type={'text'}
                value={this.state.Phone}
                onChange={(Phone)=>{this.setState({Phone})}}
                placeholder={"请输入手机号"}
            >
            用户名
            </InputItem>
            <InputItem
                type={'password'}
                value={this.state.pwd}
                onChange={(pwd)=>{this.setState({pwd})}}
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
                    const result=await userManager.register(this.state.Phone,this.state.pwd);
                    console.log(result);
                    if(result.success===false)
                    {
                        Toast.fail(result.errorMessage);
                        return;
                    }
                }}
            >
            提交
            </Button>
            <WhiteSpace/>
        </WingBlank>
      </div>
    )
  }
}
