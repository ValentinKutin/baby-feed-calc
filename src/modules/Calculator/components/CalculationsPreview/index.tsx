import { useMemo } from "react";
import { CalculationInput } from "../../types";
import { calculateNhsInfantFormula } from "../../utils/calculateNhsInfantFormula";
import { CalculationPreview } from "./CalculationPreview";

type CalculationsPreviewProps = {
  input: CalculationInput;
};

export function CalculationsPreview({ input }: CalculationsPreviewProps) {
  const calculations = useMemo(() => {
    const result = [];
    const nhsInfantFormula = calculateNhsInfantFormula(input);
    if (nhsInfantFormula) {
      result.push({
        title: "NHS Infant Formula",
        calculation: nhsInfantFormula,
      });
    }
    return result;
  }, [input]);

  return (
    <div>
      {calculations.map((item) => (
        <CalculationPreview
          key={item.title}
          title={item.title}
          calculation={item.calculation}
        />
      ))}
    </div>
  );
}
