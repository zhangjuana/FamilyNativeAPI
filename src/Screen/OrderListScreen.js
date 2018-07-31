
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import React, { Component } from 'react'
export default class Search extends Component {
    render() {
        return (
  <WingBlank>
    <WhiteSpace/>
    <Card>
      <Card.Header
        title="蛋糕"
        extra={<span>haolilai</span>}
      />
      <Card.Body>
        <div>好利来</div>
      </Card.Body>
      <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
    </Card>
    <WhiteSpace size="lg" />
  </WingBlank>
  );
}
}
























































