import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

// * global css
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import WrappedApp from "./wrappedApp";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WrappedApp Component={Component} pageProps={pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
