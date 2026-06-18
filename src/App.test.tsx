import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import "./test/setup";

describe("App", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "";
  });

  it("switches between Traditional Chinese and English", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("魏大為");

    await user.click(screen.getByRole("button", { name: "English" }));

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("David Wei");
    expect(document.documentElement.lang).toBe("en");
  });

  it("observes newly rendered timeline items after the language changes", async () => {
    const user = userEvent.setup();
    const observedElements: Element[] = [];

    class CapturingIntersectionObserver {
      observe = vi.fn((element: Element) => {
        observedElements.push(element);
      });
      unobserve = vi.fn();
      disconnect = vi.fn();
    }

    window.IntersectionObserver = CapturingIntersectionObserver as unknown as typeof IntersectionObserver;

    render(<App />);

    await user.click(screen.getByRole("button", { name: "English" }));

    const englishTimelineItem = screen.getByText("Taiwan Mobile").closest("article");
    expect(englishTimelineItem).not.toBeNull();
    expect(observedElements).toContain(englishTimelineItem);
  });

  it("starts in Traditional Chinese even when an old English preference exists", () => {
    window.localStorage.setItem("resume-locale", "en");

    render(<App />);

    expect(screen.getByRole("button", { name: "中文" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("魏大為");
    expect(document.documentElement.lang).toBe("zh-TW");
  });

  it("renders the supplied profile photo instead of the portrait placeholder", () => {
    render(<App />);

    const portrait = screen.getByRole("img", { name: "魏大為" });

    expect(portrait).toHaveAttribute("src", expect.stringMatching(/profile-photo\.png$/));
    expect(screen.queryByText("PORTRAIT RESERVED")).not.toBeInTheDocument();
  });

  it("does not render social links when URLs are unavailable", () => {
    render(<App />);

    expect(screen.queryByRole("link", { name: /GitHub/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /LinkedIn/i })).not.toBeInTheDocument();
  });

  it("renders evidence briefs and concrete experience highlights", () => {
    render(<App />);

    expect(screen.getByText("近九年經驗")).toBeVisible();
    expect(screen.getByText("端到端交付")).toBeVisible();
    expect(screen.getByText(/JDK 8 升級至 JDK 17/)).toBeVisible();
    expect(screen.getByText(/需求訪談與 SA／SD 文件/)).toBeVisible();
  });

  it("opens the first project by default and allows it to be collapsed", async () => {
    const user = userEvent.setup();
    render(<App />);

    const firstProject = screen.getByRole("button", {
      name: /收合詳情.*電信反詐與情資管理平台/
    });

    expect(firstProject).toHaveAttribute("aria-expanded", "true");
    const firstProjectDetails = document.getElementById("anti-fraud-details");
    expect(firstProjectDetails).not.toBeNull();
    expect(within(firstProjectDetails as HTMLElement).getByText(/資料同步與批次排程/)).toBeVisible();

    await user.click(firstProject);

    expect(firstProject).toHaveAttribute("aria-expanded", "false");
    expect(firstProject).toHaveAccessibleName(/查看專案詳情/);
    expect(firstProjectDetails).toHaveAttribute("hidden");
    expect(firstProject.closest(".project")).not.toHaveAttribute("data-reveal");
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
