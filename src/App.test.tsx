import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import App from "./App";
import "./test/setup";

describe("App", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "";
  });

  it("switches between Traditional Chinese and English and persists the choice", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("魏大為");

    await user.click(screen.getByRole("button", { name: "English" }));

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("David Wei");
    expect(document.documentElement.lang).toBe("en");
    expect(window.localStorage.getItem("resume-locale")).toBe("en");
  });

  it("does not render social links when URLs are unavailable", () => {
    render(<App />);

    expect(screen.queryByRole("link", { name: /GitHub/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /LinkedIn/i })).not.toBeInTheDocument();
  });

  it("expands a selected project and updates its accessible state", async () => {
    const user = userEvent.setup();
    render(<App />);

    const expandButton = screen.getByRole("button", {
      name: /展開.*電信反詐與情資管理平台/
    });

    expect(expandButton).toHaveAttribute("aria-expanded", "false");
    await user.click(expandButton);
    expect(expandButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/資料同步與批次排程/)).toBeVisible();
  });
});
