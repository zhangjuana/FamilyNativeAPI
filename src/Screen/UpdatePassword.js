import React, { Component } from 'react'

import { 
    Button,
    Toast,
    NavBar,
    WingBlank, 
    WhiteSpace ,
    List,
    InputItem,
    Icon,
    Modal
} from 'antd-mobile';

import UserManager from '../DataSever/UserManager';



export default class UpdatePassWord extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
        Pwd:'',
        newPwd:''
      }
    }
    

  render() {
    return (
      <div>
        <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => {this.props.history.goBack()}}
        >修改密码</NavBar>
        <WhiteSpace/>
        <List>
            <InputItem
                type={'text'}
                value={this.state.Pwd}
                onChange={(old_password)=>{this.setState({Pwd})}}
                placeholder={'请输入旧密码'}
            >
                旧密码
            </InputItem>
            <InputItem
                type={'text'}
                value={this.state.newPwd}
                onChange={(new_password)=>{this.setState({newPwd})}}
                placeholder={'请输入新密码'}
            >
                新密码
            </InputItem>
        </List>
        <WhiteSpace/>
        <WingBlank>
            <Button
                type={'primary'}
                onClick={async()=>{
                    const result = await accountManager.changePassword(this.state.Pwd,this.state.newPwd);
                    console.log(result);
                    if(result.success === false){
                        Toast.fail(result.errorMessage);
                        return;
                    }
                    Modal.alert('修改成功','点击确认键返回',[{
                        text:'确认',
                        onPress:()=>{this.props.history.goBack()}
                    }])
                    
                }}
            >
                提交修改
            </Button>
        </WingBlank>
      </div>
    )
  }
}
