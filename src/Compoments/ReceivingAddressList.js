import React, { Component } from 'react'

import {
    
} from '../DataSever/URLConfig';

import './ReceivingAddressList.css'


import { 
    WingBlank, 
    WhiteSpace ,
    Card,
    Grid
} from 'antd-mobile';

export default class ReceivingAddressList extends Component {

    
  render() {

    return (
        <div
            onClick={()=>{
                if(this.props.onItemClick){
                    this.props.onItemClick();
                }   
            }}
        >
            <WingBlank>
                <WhiteSpace/>
                <Card>
                    <Card.Header
                        title={this.props.Addressee+"   "+this.props.Phone}
                    />
                    <Card.Body>
                        <span>
                            {this.props.SaveNameExtend+this.props.CityNameExtend+this.props.AreaNameExtend+this.props.Addresss}
                        </span>
                    </Card.Body>
                    <Card.Footer
                        content={"编辑 删除"}
                    />
                </Card>
            </WingBlank>
        </div>
    )
  }
}