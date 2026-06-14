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

  it("opens the first project by default and allows it to be collapsed", async () => {
    const user = userEvent.setup();
    render(<App />);

    const firstProject = screen.getByRole("button", {
      name: /收合詳情.*電信反詐與情資管理平台/
    });

    expect(firstProject).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/資料同步與批次排程/)).toBeVisible();

    await user.click(firstProject);

    expect(firstProject).toHaveAttribute("aria-expanded", "false");
    expect(firstProject).toHaveAccessibleName(/查看專案詳情/);
  });

  it("keeps only one project open when another project is selected", async () => {
    const user = userEvent.setup();
    render(<App />);

    const firstProject = screen.getByRole("button", {
      name: /收合詳情.*電信反詐與情資管理平台/
    });
    const secondProject = screen.getByRole("button", {
      name: /查看專案詳情.*電信客服與企業內部管理平台/
    });

    await user.click(secondProject);

    expect(firstProject).toHaveAttribute("aria-expanded", "false");
    expect(secondProject).toHaveAttribute("aria-expanded", "true");
    expect(firstProject).toHaveAttribute("aria-controls", "anti-fraud-details");
    expect(secondProject).toHaveAttribute("aria-controls", "customer-service-details");
  });
});
