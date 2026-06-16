import { describe, expect, it } from "vitest";
import styles from "./styles.css?raw";

describe("English editorial layout", () => {
  it("provides English-only desktop heading and content alignment rules", () => {
    expect(styles).toMatch(
      /@media \(min-width: 621px\)[\s\S]*html\[lang="en"\] \.section-heading\s*\{[\s\S]*grid-template-columns: clamp\(14rem, 22vw, 17rem\) minmax\(0, 1fr\);/
    );
    expect(styles).toMatch(
      /@media \(min-width: 901px\)[\s\S]*html\[lang="en"\] :is\([\s\S]*\.section-brief[\s\S]*\)\s*\{[\s\S]*margin-left: calc\(clamp\(14rem, 22vw, 17rem\) \+ 2rem\);/
    );
  });

  it("keeps the English contact heading compact without hard-coded line breaks", () => {
    expect(styles).toMatch(
      /html\[lang="en"\] \.contact-section\s*\{[\s\S]*min-height: 380px;[\s\S]*padding-block: clamp\(3\.75rem, 7vw, 5\.5rem\);/
    );
    expect(styles).toMatch(
      /html\[lang="en"\] \.contact-section h2\s*\{[\s\S]*max-width: 54rem;[\s\S]*font-family: var\(--body\);[\s\S]*font-size: clamp\(2\.8rem, 5\.5vw, 4rem\);[\s\S]*line-height: \.92;[\s\S]*text-wrap: pretty;/
    );
    expect(styles).toMatch(
      /html\[lang="en"\] \.contact-section p\s*\{[\s\S]*margin: 1\.25rem 0 0;/
    );
    expect(styles).toMatch(
      /html\[lang="en"\] \.contact-section a\s*\{[\s\S]*margin-top: 1\.25rem;/
    );
  });
});

describe("Responsive portrait and project layout", () => {
  it("uses a square editorial portrait treatment", () => {
    expect(styles).toMatch(
      /\.portrait-photo\s*\{[\s\S]*width: calc\(100% - 48px\);[\s\S]*border-radius: 0;/
    );
    expect(styles).toMatch(
      /\.portrait-frame::before\s*\{[\s\S]*inset: 14px;[\s\S]*border: 1px solid var\(--gold\);/
    );
  });

  it("keeps mobile project metadata visible in the collapsed row", () => {
    expect(styles).toMatch(
      /@media \(max-width: 620px\)[\s\S]*\.project > button\s*\{[\s\S]*grid-template-columns: 2rem minmax\(0, 1fr\) auto;/
    );
    expect(styles).toMatch(
      /@media \(max-width: 620px\)[\s\S]*\.project-period\s*\{[\s\S]*display: block;[\s\S]*grid-column: 2;/
    );
    expect(styles).toMatch(/\.project-details\[hidden\]\s*\{\s*display: none;\s*\}/);
  });
});
