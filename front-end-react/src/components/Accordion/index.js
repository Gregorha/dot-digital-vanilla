import React from 'react';
import { Collapse } from 'antd';
import CarouselArrow from '../Carousel/CarouselArrow';
import { Row, Col } from 'antd';
import './Accordion.css';
import loremData from '../../loremData/lorenData';
const accordionData = loremData.slice(0, 5);

const { Panel } = Collapse;

const Accordion = () => {
  return (
    <section className="accordion-wrapper">
      <Collapse
        accordion
        className="accordion"
        bordered={false}
        expandIcon={({ isActive }) => <CarouselArrow className="arw-accordion" rotate={isActive ? 180 : 0} />}
        expandIconPosition="right"
      >
        {accordionData.map(({ picture, title, content }, index) => (
          <Panel header={title} key={index + 1}>
            <Row justify="space-between" align="middle">
              <Col xs={24} sm={24} md={7} lg={7}>
                <div class="image-frame">
                  <div class="image-frame-inside">
                    <img src={picture} class="image-fill" alt="nature picture" />
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={17} lg={17}>
                <p>{content}</p>
              </Col>
            </Row>
          </Panel>
        ))}
      </Collapse>
    </section>
  );
};

export default Accordion;
