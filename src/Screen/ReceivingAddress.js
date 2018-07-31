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
    ListView,
} from 'antd-mobile';

import UserManager from '../DataSever/UserManager';

import AddressManager from '../DataSever/AddressManager';
import ReceivingAddresList from '../Compoments/ReceivingAddressList'

export default class ReceivingAddres extends Component{

    async componentDidMount(){

        if(UserManager.isLogin() === false){
            return;
        }
        const result = await AddressManager.SearchAddress()
        console.log(result);
        if(result.success === false){
            Toast.fail(result.errorMessage);
            return;
        }
        this.setState((preState)=>{
            return{
                dataSource:preState.dataSource.cloneWithRows(result)
            }   
        })

    }

    constructor(props) {
        super(props)

        const dataSource = new ListView.DataSource({
            rowHasChanged:(row1, row2) => row1 !== row2,
        })

        this.state = {
            dataSource,
        }
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="light"
                    onLeftClick={this.props.history.goBack}
                >
                    收货地址
                </NavBar>
                <WhiteSpace/>
                <ListView
                    useBodyScroll={true}
                    dataSource={this.state.dataSource}
                    renderRow={(message)=>{
                        return (
                            <ReceivingAddresList 
                                {...message}
                            />
                        )
                    }}
                />
            </div>
        )
    }
}