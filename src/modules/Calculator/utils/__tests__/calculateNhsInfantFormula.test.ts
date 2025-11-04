import { describe, it, expect } from "vitest";
import { calculateNhsInfantFormula } from "../calculateNhsInfantFormula";

describe("calculateNhsInfantFormula", () => {
  it("returns correct min/max for typical input (4kg, 30 days)", () => {
    const result = calculateNhsInfantFormula({ weight: 4000, age: 30 });
    expect(result).toEqual({
      dailyVolumeMin: 600,
      dailyVolumeMax: 800,
      dailyVolumeAverage: 700,
    });
  });

  it("rounds results to whole milliliters", () => {
    const result = calculateNhsInfantFormula({ weight: 3333, age: 60 });
    // 3.333 kg → min 499.95 → 500, max 666.6 → 667
    expect(result).toEqual({
      dailyVolumeMin: 500,
      dailyVolumeMax: 667,
      dailyVolumeAverage: 583,
    });
  });

  it("handles zero weight by returning 0 volumes", () => {
    const result = calculateNhsInfantFormula({ weight: 0, age: 20 });
    expect(result).toEqual({
      dailyVolumeMin: 0,
      dailyVolumeMax: 0,
      dailyVolumeAverage: 0,
    });
  });

  it("returns result when age is below the 6-month threshold", () => {
    const result = calculateNhsInfantFormula({ weight: 5000, age: 182 });
    expect(result).toEqual({
      dailyVolumeMin: 750,
      dailyVolumeMax: 1000,
      dailyVolumeAverage: 875,
    });
  });

  it("returns result when age equals the 6-month threshold (182.5 days)", () => {
    const result = calculateNhsInfantFormula({ weight: 5000, age: 182.5 });
    expect(result).toEqual({
      dailyVolumeMin: 750,
      dailyVolumeMax: 1000,
      dailyVolumeAverage: 875,
    });
  });

  it("returns null when age is above the 6-month threshold", () => {
    const result = calculateNhsInfantFormula({ weight: 5000, age: 183 });
    expect(result).toBeNull();
  });
});
