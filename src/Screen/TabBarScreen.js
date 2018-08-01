import React, { Component } from 'react'

import { 
    TabBar 
} from 'antd-mobile';

import UserManager from '../DataSever/UserManager';

import HomeScreen from '../Screen/HomeScreen';
import PersonScreen from '../Screen/PersonScreen';
import TrolleyScreen from '../Screen/TrolleyScreen';
export default class TabBarScreen extends Component {
    componentDidMount(){
        if(UserManager.isLogin()===false){
            this.props.history.replace('/');
            return;
        }
        if(localStorage.selected){
            this.setState({selected:localStorage.selected})
        }
    }
    constructor(props) {
      super(props)
    
      this.state = {
         selected:'HomeSreen'
      }
    }

  render() {
    return (
      <div style={{position:'fixed',height:'100%',width:'100%',top:0}}>
        <TabBar>
            <TabBar.Item
                key='HomeScreen'
                title='首页'
                selected={'HomeScreen'===this.state.selected}
                onPress={()=>{
                    this.setState({selected:'HomeSreen'})
                    localStorage.selected='HomeSreen';
                }}
                icon={{uri:'http://localhost:46560/HeadImg/AHome.png'}}
                selectedIcon={{uri:'http://localhost:46560/HeadImg/BHome.png'}}
            >
                <HomeScreen {...this.props}/>
            </TabBar.Item>
            <TabBar.Item
                key='TrolleyScreen'
                title='购物车'
                selected={'TrolleyScreen'===this.state.selected}
                onPress={()=>{
                    this.setState({selected:'TrolleyScreen'})
                    localStorage.selected='TrolleyScreen';
                }}
                icon={{uri:'http://localhost:46560/HeadImg/ATrolley.png'}}
                selectedIcon={{uri:'http://localhost:46560/HeadImg/BTrolley.png'}}
            >
                <TrolleyScreen {...this.props}/>
            </TabBar.Item>
            <TabBar.Item
                key='PersonScreen'
                title='个人'
                selected={'PersonScreen'===this.state.selected}
                onPress={()=>{
                    this.setState({selected:'PersonScreen'})
                    localStorage.selected='PersonScreen';
                }}
                icon={{uri:'http://localhost:46560/HeadImg/APerson.png'}}
                selectedIcon={{uri:'http://localhost:46560/HeadImg/BPerson.png'}}
            >
                <PersonScreen {...this.props}/>
            </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
