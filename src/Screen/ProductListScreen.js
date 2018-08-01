import React, { Component } from 'react'

import {
    SearchBar, Button, WhiteSpace, WingBlank, NavBar, Icon, Carousel, Grid, Text, ListView, Flex, Tabs, Badge, SwipeAction, Card

} from 'antd-mobile';

import ProdectManager from '../DataSever/ProductManager';
import ListItem from '../ViewComponent/ListItem';
const tabs = [
    { title: <Badge >水果</Badge> },
    { title: <Badge >蔬菜</Badge> },
    { title: <Badge >肉食</Badge> },
    { title: <Badge >零食</Badge> },
    { title: <Badge >调料</Badge> },
];

export default class ProductListScreen extends Component {
    constructor(props) {
        super(props)

        const dataSource = new ListView.DataSource({
            rowHasChanged:(row1, row2) => row1 !== row2,
        })

        this.state = {
            dataSource,
            refreshing:false,
        }
    }
  render() {
    return (
      <div>
        <NavBar
            mode="dark"
            icon={<Icon type="left"/>}
            onLeftClick={()=>{
                this.props.history.goBack();
            }}
        >
            分类
        </NavBar>
        <WhiteSpace/>
        <SearchBar placeholder="搜索东西" maxLength={10} />
        <Tabs 
            tabs={tabs} 
            renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}
            onTabClick={async(tab, index) => {
                this.setState({refresing:true});
                const result=await ProdectManager.SearchProduct(index);
                console.log(result);
                this.setState((preState)=>{
                    return{
                        dataSource:preState.dataSource.cloneWithRows(result)
                        
                    }  
                    
                })
                console.log(this.state.dataSource); 
            }}
        >
         <ListView
            useBodyScroll={true}
            dataSource={this.state.dataSource}
            />
            }
            renderRow={(dataSource)=>{
                return (
                    <ListItem
                        {...dataSource}
                    />
                )
            }}
        />
            
        </Tabs>
      </div>
    )
  }
}
