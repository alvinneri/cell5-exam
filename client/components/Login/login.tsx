import signupStyles from "./styles.module.css";
import { Form, Col, Row, Space, Input } from "antd";
import { LockFilled, UserOutlined } from "@ant-design/icons";

import LoginInterface from "./login.interface";
import React from "react";
import useLogin from "../../hooks/useLogin";

const LoginComponent = ({ onSubmit, signup }: LoginInterface) => {
  const loginData = useLogin();

  const onFinish = async (values: any) => {
    loginData.mutate(values);
  };
  return (
    <>
      <Row
        justify="space-around"
        align="middle"
        className={signupStyles.signupContainer}
      >
        <Col span={8} className={signupStyles.login}>
          <Space direction="vertical">
            <h1
              style={{
                fontWeight: "bold ",
                color: "white",
                marginBottom: "1em",
              }}
            >
              New Here?
            </h1>
            {signup}
          </Space>
        </Col>
        <Col span={10}>
          <Space direction="vertical">
            <h1 style={{ fontWeight: "bold ", color: "#663399" }}>Sign In</h1>
            <Form initialValues={{ remember: true }} onFinish={onFinish}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  size={"large"}
                  prefix={<UserOutlined />}
                  placeholder={"juandelacruz@gmail.com"}
                  style={{
                    width: "100%",
                    borderRadius: "50px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  size={"large"}
                  prefix={<LockFilled />}
                  placeholder={"Password"}
                  style={{
                    width: "100%",
                    borderRadius: "50px",
                  }}
                />
              </Form.Item>
              <Form.Item>{onSubmit}</Form.Item>
            </Form>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default LoginComponent;
