import React, { Component } from 'react'

import {
  NavBar,
  List,
  InputItem,
  WhiteSpace,
  WingBlank,
  Button,
  Toast,
  ImagePicker,
  Icon
} from 'antd-mobile';
import userManager from '../DataSever/UserManager';
export default class UpdateMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nickname: '',
      files: []
    }
  }
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => { this.props.history.goBack() }}
        >
          修改用户信息
        </NavBar>
        <ImagePicker
          files={this.state.files}
          onChange={(files) => { this.setState({ files }) }}
          selectable={this.state.files.length < 1}
        />
        <WhiteSpace />
        <List>
          <InputItem
            type={"text"}
            value={this.state.nickname}
            onChange={(nickname) => { this.setState({ nickname }) }}
            placeholder={"请输入昵称"}
          >
            昵称
          </InputItem>
        </List>
        <WhiteSpace />
        <WingBlank>
          <Button
            type={"primary"}
            onClick={async () => {
              if (this.state.files.length === 0) {
                Toast.fail("请选择头像", 1);
                return;
              }
              const result = await userManager.UpdateCustomer(this.state.nickname, this.state.files[0]);
              if (result.success === false) {
                Toast.fail(result.errorMeaage);
                return;
              }
              this.props.history.push('UpdatePersonScreen');
            }}
          >
            提交修改
          </Button>
        </WingBlank>
      </div>
    )
  }
}
