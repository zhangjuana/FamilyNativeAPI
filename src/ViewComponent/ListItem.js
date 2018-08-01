import React, { Component } from 'react'
import {
    Card,
    SwipeAction,
   
} from 'antd-mobile';
export default class ListItem extends Component {
  render() {
    return (
      <div>
        <SwipeAction>
            <Card
                onClick={()=>{
                    if(this.props.onItemClick){
                        this.props.onItemClick();
                    }
                }}
            >
                <Card.Header
                    title={this.props.Name}
                    thumbStyle={{ width: '40px', height: '40px' }}
                    extra={'好吃'}
                />
            </Card>
        </SwipeAction>
      </div>
    )
  }
}
