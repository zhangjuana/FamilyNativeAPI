
import React, { Component } from 'react'
import {
  Carousel,
  WingBlank,
  NavBar,
  SearchBar,
  Icon,
  Button,
  WhiteSpace,
  Grid,
  Card
} from 'antd-mobile';
import ListItem from 'antd-mobile/lib/list/ListItem';
const data = [
  {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '蔬菜'
  },
  {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '水果'
  },
  {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '肉食'
  },
  {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '零食'
  },
  {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '茶叶'
  },
  {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '海鲜'
  },
  {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '饮料'
  },
  {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: '乳品'
  },
]


export default class AScreen extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    value: '美食',
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => { this.props.history.goBack() }}
        >
          有好东西
  </NavBar>
{/* 搜索 */}
        <WhiteSpace />
        <SearchBar placeholder="Search" maxLength={8} />
        <WhiteSpace />
{/* 走马灯 */}
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>

        {/* 宫格 */}
        <Grid
          data={data}
          hasLine={false}
          onClick={(item, index) => {
            console.log(item);
            console.log(index);
          }}
        />
          <WhiteSpace/>
            <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Card>
    今日特卖
      <Card.Header
        title="xxx"
        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
        extra={<span>火热促销中</span>}
      />
      <Card.Body>
        <div>1天12:12:12</div>
      </Card.Body>
      <Card.Footer content="footer content" extra={<font color="red">￥</font>} />
    </Card>
    <WhiteSpace size="lg" />
  </WingBlank>


      </div>
    );
  }
}

