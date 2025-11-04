import { useMemo } from "react";
import { calculateNhsInfantFormula } from "../../utils/calculateNhsInfantFormula";
import { CalculationPreview } from "./CalculationPreview";
import { getFeedCount } from "../../utils/getFeedCount";
import { CalculationInput } from "../../types";

type CalculationsPreviewProps = {
  input: CalculationInput;
};

export function CalculationsPreview({ input }: CalculationsPreviewProps) {
  const calculations = useMemo(() => {
    const result = [];
    const nhsInfantFormula = calculateNhsInfantFormula(input);

    if (nhsInfantFormula) {
      result.push({
        title: "NHS Infant Formula (Guideline Range)",
        calculation: nhsInfantFormula,
      });
    }

    return result;
  }, [input]);

  const feedCount = getFeedCount(input.age);

  return (
    <div>
      {calculations.map((item) => (
        <CalculationPreview
          key={item.title}
          title={item.title}
          calculation={item.calculation}
          feedCount={feedCount}
        />
      ))}
    </div>
  );
}
