import React, { useEffect } from "react";
import LoginComponent from "../../components/Login/login";
import ButtonComponent from "../../components/Buttons/button";
import Link from "next/link";
import { Layout } from "antd";
import Cookies from "js-cookie";
import Router from "next/router";

const { Content, Footer, Header } = Layout;

const LoginPage = () => {
  useEffect(() => {
    if (Cookies.get("token") != null) {
      Router.push("/");
    }
  }, []);

  return (
    <>
      <LoginComponent
        email="email"
        password="password"
        onSubmit={
          <ButtonComponent
            type={"submit"}
            label={"LOGIN"}
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
        }
        signup={
          <Link href="/signup" passHref>
            <ButtonComponent
              label={"SIGN UP"}
              styles={{
                width: 273 / 2,
                color: "#fffffb",
                backgroundColor: "#663399",
                height: 90 / 2,
                borderRadius: 50,
                fontWeight: "bold",
                fontStyle: "Segoe UI",
                border: "0.01mm solid white",
                fontSize: 37 / 2,
              }}
            />
          </Link>
        }
      />
    </>
  );
};

export default LoginPage;
