import { describe, expect, it } from "vitest";
import { resumeContent } from "./resume";

describe("resumeContent", () => {
  it("provides the same required structure for both languages", () => {
    for (const locale of ["zh-TW", "en"] as const) {
      const content = resumeContent[locale];

      expect(content.profile.name).toBeTruthy();
      expect(content.values).toHaveLength(4);
      expect(Object.keys(content.sectionBriefs)).toEqual([
        "values",
        "experience",
        "projects",
        "skills",
        "about"
      ]);
      expect(content.projects).toHaveLength(6);
      expect(content.experience.length).toBeGreaterThanOrEqual(7);
      expect(content.experience.every((item) => item.highlights.length >= 2)).toBe(true);
      expect(content.skills).toHaveLength(6);
      expect(content.education.items.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("provides evidence cards and summaries for every section brief", () => {
    for (const locale of ["zh-TW", "en"] as const) {
      for (const brief of Object.values(resumeContent[locale].sectionBriefs)) {
        expect(brief.summary.length).toBeGreaterThanOrEqual(1);
        expect(brief.cards.length).toBeGreaterThanOrEqual(3);
        expect(brief.cards.every((card) => card.title && card.description)).toBe(true);
      }
    }
  });

  it("does not expose private phone, birthday, or detailed street address", () => {
    const serialized = JSON.stringify(resumeContent);

    expect(serialized).not.toContain("0921");
    expect(serialized).not.toContain("1990/12/14");
    expect(serialized).not.toContain("集美街");
  });

  it("keeps social links absent until real URLs are supplied", () => {
    expect(resumeContent["zh-TW"].profile.socials).toEqual([]);
    expect(resumeContent.en.profile.socials).toEqual([]);
  });

  it("uses a cross-platform apostrophe in the English contact heading", () => {
    expect(resumeContent.en.labels.sections.contact).toBe("Let's build systems that last");
    expect(resumeContent.en.labels.sections.contact).not.toContain("’");
  });
});
