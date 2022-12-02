import React from "react";
import styles from "./styles.module.css";
import ButtonComponent from "../Buttons/button";
import { Form, Col, Row, Space, Input } from "antd";
import { LockFilled, MailFilled, UserOutlined } from "@ant-design/icons";
import SignupInterface from "./signup.interface";
import useSignup from "../../hooks/useSignup";

const SignupComponent = ({ login }: SignupInterface) => {
  const signUp = useSignup();

  const onSubmit = async (values: any) => {
    signUp.mutate(values);
  };

  return (
    <>
      <div>
        <Row
          justify="space-around"
          align="middle"
          className={styles.signupContainer}
        >
          <Col span={10} className={styles.form}>
            <Space direction="vertical">
              <h1 style={{ fontWeight: "bold ", color: "#663399" }}>Sign Up</h1>
              <Form onFinish={onSubmit}>
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    size={"middle"}
                    prefix={<UserOutlined />}
                    placeholder={"First Name"}
                    style={{
                      width: "100%",
                      borderRadius: "50px",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input
                    size={"middle"}
                    prefix={<UserOutlined />}
                    placeholder={"Last Name"}
                    style={{
                      width: "100%",
                      borderRadius: "50px",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input
                    size={"middle"}
                    prefix={<MailFilled />}
                    placeholder={"Email"}
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
                    size={"middle"}
                    prefix={<LockFilled />}
                    placeholder={"Password"}
                    style={{
                      width: "100%",
                      borderRadius: "50px",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    size={"middle"}
                    prefix={<LockFilled />}
                    placeholder={"Confirm Password"}
                    style={{
                      width: "100%",
                      borderRadius: "50px",
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <ButtonComponent
                    type={"submit"}
                    label={"CREATE ACCOUNT"}
                    styles={{
                      width: "100%",
                      color: "#fffffb",
                      backgroundColor: "#663399",
                      height: 90 / 2,
                      borderRadius: "50px",
                      fontWeight: "bold",
                      fontStyle: "Segoe UI",
                      border: "none",
                    }}
                  />
                </Form.Item>
              </Form>
            </Space>
          </Col>
          <Col span={8}>
            <Space direction="vertical">
              <h1
                style={{ fontWeight: "bold ", color: "white", marginBottom: 0 }}
              >
                Already a member?
              </h1>
              {login}
            </Space>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SignupComponent;
