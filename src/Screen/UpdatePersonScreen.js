import React, { Component } from 'react';
import {
    Button,
    Toast,
    NavBar,
    WingBlank,
    WhiteSpace,
    List,
    InputItem,
    Flex,
    Icon,
} from 'antd-mobile';
import userManager from '../DataSever/UserManager';
// import personManager from '../DataSever/PersonManager';
// import { imageBaseURL } from '../DataServer/URLConfig';
export default class UpdatePersonScreen extends Component {
    // async componentDidMount() {
    //     if (userManager.isLogin === false) {
    //         return;
    //     }
    //     const result = await personManager.getUser();
    //     if (result.success === false) {
    //         Toast.fail(result.errorMessage, 1);
    //         return;
    //     }
    //     this.setState({ user: result.data });
    // }
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         user: {
    //             nickname: '',
    //             pwd: '',
    //             image: ''
    //         },
    //     }
    // }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.goBack() }}
                >个人信息</NavBar>
                {/* <Flex
                    justify={'center'}
                    style={{ backgroundColor: '#ffffff' }}
                >
                    <img
                        alt={''}
                        // src={imageBaseURL + this.state.user.image}
                        style={{ width: '100px', height: '100px', margin: '5px' }}
                    />
                </Flex> */}
                <WhiteSpace/>
                <WingBlank>
                    <Button
                     onClick={()=>{
                        this.props.history.push('UpdateMessage');
                    }}
                    >
                        
                       
                        修改个人资料
                    </Button>
                    <WhiteSpace />
                    <Button
                        onClick={()=>{
                            this.props.history.push('UpdatePassword');
                        }}
                    >
                        修改密码
                    </Button>
                    <WhiteSpace />
                    <WhiteSpace />
                    <Button
                        type={'warning'}
                        onClick={async () => {
                            userManager.logout();
                            this.props.history.replace('/');
                        }}
                    >
                        退出登录
                    </Button>
                </WingBlank>
            </div>
        )
    }
}