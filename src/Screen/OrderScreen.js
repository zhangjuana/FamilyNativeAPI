import React, { Component } from 'react'
import { Tabs, WhiteSpace,NavBar,Icon } from 'antd-mobile';
import OrderListScreen from '../Screen/OrderListScreen';

export default class Search extends Component {

    renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
      <p>{tab.title}</p>
    </div>);

  render() {
    const tabs = [
      { title: '全部' },
      { title: '待付款' },
      { title: '代发货' },
      { title: '待收货' },
      { title: '待评价' },
    ];

    return (
      <div>
          <NavBar
                    mode="dark"
                    icon={<Icon type="left"/>}
                    onLeftClick={()=>{this.props.history.goBack()}}
                >
                  我的订单
        </NavBar>
        <WhiteSpace />
        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
         <OrderListScreen/>
        </Tabs>
        <WhiteSpace />
      </div>
    );
    }
}
