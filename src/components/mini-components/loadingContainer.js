import React, { Component } from "react";
import { Row, Col, Skeleton } from "antd";

class loadingContainer extends Component {
  render() {
    return (
      <div>
        <Row style={{ marginTop: "30px" }}>
          <Col span={6}>
            <Skeleton active title={false} />
            <Skeleton active title={false} />
            <Skeleton active title={false} />
          </Col>
          <Col span={6}>
            <Skeleton active title={false} />
            <Skeleton active title={false} />
            <Skeleton active title={false} />
          </Col>
          <Col span={6}>
            <Skeleton active title={false} />
            <Skeleton active title={false} />
            <Skeleton active title={false} />
          </Col>
          <Col span={6}>
            <Skeleton active title={false} />
            <Skeleton active title={false} />
            <Skeleton active title={false} />
          </Col>
        </Row>
        <Row style={{ marginTop: "60px" }}>
          <Col span={6}>
            <Skeleton active title={false} />
            <Skeleton active title={false} />
            <Skeleton active title={false} />
          </Col>
          <Col span={6}>
            <Skeleton active title={false} />
            <Skeleton active title={false} />
            <Skeleton active title={false} />
          </Col>
          <Col span={6}>
            <Skeleton active title={false} />
            <Skeleton active title={false} />
            <Skeleton active title={false} />
          </Col>
          <Col span={6}>
            <Skeleton active title={false} />
            <Skeleton active title={false} />
            <Skeleton active title={false} />
            <Skeleton active title={false} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default loadingContainer;
