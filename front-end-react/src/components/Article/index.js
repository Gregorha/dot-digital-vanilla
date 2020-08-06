import React from 'react';
import { Row, Col } from 'antd';
import picture0 from '../../images/1-nature.jpg';
import './Article.css';

const Article = () => {
  return (
    <article>
      <Row className="article-wrapper" justify="center" align="middle">
        <Col xs={24} sm={24} md={12} lg={10}>
          <div class="round-image-wrapper">
            <img src={picture0} alt="nature picture" />
          </div>
        </Col>
        <Col xs={22} sm={22} md={12} lg={14}>
          <div class="article-content">
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Lectus sit amet est placerat in egestas erat imperdiet. Facilisi nullam vehicula
              ipsum a.
            </p>
            <p>
              <strong>
                Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Dictumst vestibulum rhoncus
                est pellentesque. Quis imperdiet massa tincidunt nunc pulvinar sapien. Tempor id eu nisl nunc mi ipsum
                faucibus vitae.
              </strong>
            </p>
            <p>
              <em>
                Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Varius quam quisque id diam. Fermentum
                leo vel orci porta non pulvinar. Ut faucibus pulvinar elementum integer. Consectetur lorem donec massa
                sapien faucibus et molestie ac feugiat.
              </em>
            </p>
            <p>
              Ut porttitor leo a diam sollicitudin tempor id eu nisl. Vitae suscipit tellus mauris a diam maecenas sed
              enim ut. Ipsum dolor sit amet consectetur. Nam aliquam sem et tortor consequat id porta nibh venenatis. In
              ornare quam viverra orci sagittis eu volutpat.
            </p>
          </div>
        </Col>
      </Row>
    </article>
  );
};

export default Article;
