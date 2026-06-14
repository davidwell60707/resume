import { describe, expect, it } from "vitest";
import { resumeContent } from "./resume";

describe("resumeContent", () => {
  it("provides the same required structure for both languages", () => {
    for (const locale of ["zh-TW", "en"] as const) {
      const content = resumeContent[locale];

      expect(content.profile.name).toBeTruthy();
      expect(content.values).toHaveLength(4);
      expect(content.projects).toHaveLength(4);
      expect(content.experience.length).toBeGreaterThanOrEqual(7);
      expect(content.skills).toHaveLength(6);
      expect(content.education.items.length).toBeGreaterThanOrEqual(3);
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
});
