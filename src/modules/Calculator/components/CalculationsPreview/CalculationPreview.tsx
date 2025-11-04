import { CalculationResult } from "../../types";

type CalculationPreviewProps = {
  title: string;
  calculation: CalculationResult;
};

export function CalculationPreview({
  title,
  calculation,
}: CalculationPreviewProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>
        Daily volume: {calculation.dailyVolumeMin} -{" "}
        {calculation.dailyVolumeMax} ml
      </p>
    </div>
  );
}
