import React from "react";
import { useQuery } from "@tanstack/react-query";
import usersService from "../services/user";
import Cookies from "js-cookie";
import HeaderComponent from "../components/Header/header";
import Head from "next/head";

export const GlobalContext = React.createContext({});

function WrappedApp({ Component, pageProps }: any) {
  const token = Cookies.get("token");
  const { data: user } = useQuery(["get-me"], usersService.getMe, {
    enabled: !!token,
  });

  return (
    <GlobalContext.Provider value={{ user: user?.data?.data || null }}>
      <Head>
        <title>Cell-5-Exam</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderComponent />
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default WrappedApp;
