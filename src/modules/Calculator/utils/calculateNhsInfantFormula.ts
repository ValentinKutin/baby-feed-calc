import { CalculationInput, CalculationResult } from "../types";

// Source https://111.wales.nhs.uk/livewell/pregnancy/bottleformulacommonquest
export function calculateNhsInfantFormula(
  input: CalculationInput
): CalculationResult | null {
  if (input.age > 365 / 2) {
    return null;
  }

  const weightCoefficient = input.weight / 1000;
  return {
    dailyVolumeMin: +(150 * weightCoefficient).toFixed(0),
    dailyVolumeMax: +(200 * weightCoefficient).toFixed(0),
  };
}
