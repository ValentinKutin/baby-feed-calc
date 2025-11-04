import { describe, it, expect } from "vitest";
import { getFeedCount } from "../getFeedCount";

const YEAR = 365;
const TWO_WEEKS = 14;
const oneMonth = YEAR / 12;
const twoMonths = YEAR / 6;
const fourMonths = YEAR / 3;

describe("getFeedCount", () => {
  it("returns 8-10 feeds for age below 2 weeks", () => {
    expect(getFeedCount(0)).toEqual({ min: 8, max: 10 });
    expect(getFeedCount(7)).toEqual({ min: 8, max: 10 });
    expect(getFeedCount(TWO_WEEKS - 1)).toEqual({ min: 8, max: 10 });
  });

  it("switches to 7-8 feeds at 14 days and until 1 month", () => {
    expect(getFeedCount(TWO_WEEKS)).toEqual({ min: 7, max: 8 });
    expect(getFeedCount(20)).toEqual({ min: 7, max: 8 });
    expect(getFeedCount(oneMonth - 1)).toEqual({ min: 7, max: 8 });
  });

  it("switches to 6-7 feeds at exactly 1 month and until 2 months", () => {
    expect(getFeedCount(oneMonth)).toEqual({ min: 6, max: 7 });
    expect(getFeedCount(45)).toEqual({ min: 6, max: 7 });
    expect(getFeedCount(twoMonths - 1)).toEqual({ min: 6, max: 7 });
  });

  it("switches to 5-6 feeds at exactly 2 months and until 4 months", () => {
    expect(getFeedCount(twoMonths)).toEqual({ min: 5, max: 6 });
    expect(getFeedCount(90)).toEqual({ min: 5, max: 6 });
    expect(getFeedCount(fourMonths - 1)).toEqual({ min: 5, max: 6 });
  });

  it("switches to 4-5 feeds at 4 months and later", () => {
    expect(getFeedCount(fourMonths)).toEqual({ min: 4, max: 5 });
    expect(getFeedCount(150)).toEqual({ min: 4, max: 5 });
    expect(getFeedCount(365)).toEqual({ min: 4, max: 5 });
  });
});
