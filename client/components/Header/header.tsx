import { UserOutlined } from "@ant-design/icons";
import { Space, Layout, Menu, Col, Row, Dropdown } from "antd";
import IconComponent from "../Icons/icon";
import React, { useContext, useEffect, useState } from "react";
import headerStyle from "./headerStyle.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { GlobalContext } from "../../pages/wrappedApp";
const { Header } = Layout;

const HeaderComponent = () => {
  const { user }: any = useContext(GlobalContext);

  const [selectedMenu, setSelectedMenu] = useState(["start"]);
  const handleLogout = () => {
    Cookies.remove("token");
  };
  const router = useRouter();

  useEffect(() => {
    if (router) {
      setSelectedMenu([router.pathname]);
    }
  }, [router]);

  const menu = () => {
    if (!user) {
      return (
        <Menu
          items={[
            {
              label: <Link href="/login">Login</Link>,
              key: "0",
            },
            {
              label: <Link href="/signup">Signup</Link>,
              key: "1",
            },
          ]}
        />
      );
    } else {
      return (
        <Menu
          items={[
            {
              label: <Link href="/profile">Profile</Link>,
              key: "0",
            },
            {
              label: (
                <a onClick={handleLogout} href="/login">
                  Logout
                </a>
              ),
              key: "1",
            },
          ]}
        />
      );
    }
  };

  return (
    <Layout>
      <Header className={headerStyle.header}>
        <Row>
          <Col span={6}>
            <Link href="/" passHref className={headerStyle.companyName}>
              TinDog
            </Link>
          </Col>
          <Col span={12}>
            <Link href="/" className={headerStyle.link}>
              Discover
            </Link>
            {user && (
              <Link href="/dogs" className={headerStyle.link}>
                My Dogs
              </Link>
            )}
          </Col>
          <Col span={3} offset={3}>
            <Space size="large">
              <Dropdown overlay={menu} trigger={["click"]}>
                <div>
                  <IconComponent icon={<UserOutlined />}></IconComponent>
                </div>
              </Dropdown>
            </Space>
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
