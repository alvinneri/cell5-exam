import React, { createRef, useCallback, useEffect, useContext } from "react";
import style from "./style.module.css";
import { Input, Form } from "antd";
import type { FormInstance } from "antd/es/form";
import ButtonComponent from "../Buttons/button";
import { GlobalContext } from "../../pages/wrappedApp";
import useMutateProfile from "../../hooks/useMutateProfile";

const Profile = () => {
  const formRef = createRef<FormInstance>();
  const { user }: any = useContext(GlobalContext);
  const getUserDetails = useCallback(() => {
    if (formRef && user) {
      formRef?.current?.setFieldsValue({
        firstName: user?.firstName ? user.firstName : "",
        lastName: user?.lastName ? user.lastName : "",
        email: user?.email ? user.email : "",
      });
    }
  }, [user, formRef]);

  const updateData = useMutateProfile();

  const onUpdate = async (values: any) => {
    updateData.mutate(values);
  };

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  return (
    <div className={style.card_container}>
      <div className={style.card}>
        <div className={style.lower_container}>
          <Form ref={formRef} onFinish={onUpdate}>
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
                addonBefore={"First Name"}
                size={"large"}
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
                addonBefore={"Last Name"}
                size={"large"}
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
                  required: true,
                  message: "Please input your email!",
                  whitespace: true,
                },
              ]}
            >
              <Input
                addonBefore={"Email"}
                disabled={true}
                size={"large"}
                placeholder={"Email"}
                style={{
                  width: "100%",
                  borderRadius: "50px",
                }}
              />
            </Form.Item>
            <Form.Item>
              <ButtonComponent
                type={"submit"}
                label={"SAVE"}
                styles={{
                  width: "100%",
                  color: "#fffffb",
                  backgroundColor: "#663399",
                  border: "none",
                }}
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
