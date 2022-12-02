import { render, screen } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Home from "../pages";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

describe("Home Page Test", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );

  const Buttons = screen.getAllByRole("button");

  test("Buttons Rendering", () => {
    expect(Buttons).toBeTruthy();
  });
});
