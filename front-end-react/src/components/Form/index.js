import React from 'react';
import MaskedInput from 'antd-mask-input';
import { Form, Input, Row, Col } from 'antd';
import './Form.css';

const FormComponent = () => {
  // const layout = {
  //   labelCol: { span: 3 },
  //   wrapperCol: { span: 23 },
  // };

  const validateMessages = {
    required: 'O campo ${label} é obrigatório!',
    types: {
      email: '${label} não é um email válido!',
    },
  };
  return (
    <div className="form-wrapper">
      <Form layout="horizontal" name="nest-messages" validateMessages={validateMessages}>
        <Form.Item name={['user', 'name']} label="Nome" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Row justify="space-between" align="middle">
          <Col xs={24} sm={24} md={11} lg={11}>
            <Form.Item name={['user', 'email']} label="E-mail" rules={[{ type: 'email', required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={11} lg={11}>
            <Form.Item
              name={['user', 'phone']}
              label="Telefone"
              rules={[
                {
                  max: 15,
                  pattern: new RegExp(/^(\()\d{2}(\))(\s)?(\d{4}|\d{5})?(-|\s)\d{4}$/),
                  message: 'Telefone não é válido!',
                  required: true,
                },
              ]}
            >
              <MaskedInput mask="(11) 11111-1111" placeholder="(_) _____-____ " size="11" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name={['user', 'message']} label="Mensagem" rules={[{ required: true }]}>
          <Input.TextArea rows={6} />
        </Form.Item>
        <div class="submit-container"></div>
        <Row justify="center" align="middle">
          <Col xs={13} sm={8} md={6} lg={4}>
            <button id="submit-btn" type="submit">
              ENVIAR
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormComponent;
