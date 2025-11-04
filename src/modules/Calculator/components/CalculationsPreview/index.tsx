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
        source:
          "https://111.wales.nhs.uk/livewell/pregnancy/bottleformulacommonquest",
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
          source={item.source}
        />
      ))}
    </div>
  );
}
