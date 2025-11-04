import { CalculationResult, FeedCount } from "../../types";
import "./style.css";

type CalculationPreviewProps = {
  title: string;
  calculation: CalculationResult;
  feedCount: FeedCount;
  source: string;
};

export function CalculationPreview({
  title,
  calculation,
  feedCount,
  source,
}: CalculationPreviewProps) {
  const minPerFeed = Math.floor(calculation.dailyVolumeMin / feedCount.max);
  const maxPerFeed = Math.floor(calculation.dailyVolumeMax / feedCount.min);

  return (
    <div>
      <div className="calculation_preview_title">
        <h3>{title}</h3>
        <span>
          <a href={source} target="_blank">
            source
          </a>
        </span>
      </div>
      <p>
        <span>Estimated daily volume:</span>{" "}
        <span>
          {calculation.dailyVolumeMin} – {calculation.dailyVolumeMax} ml
        </span>
      </p>
      <p>
        <span>Recommended feeds per day:</span>{" "}
        <span>
          {feedCount.min} – {feedCount.max} times
        </span>
      </p>
      <p>
        <span>Approximate volume per feed:</span> <span>{minPerFeed}</span> –{" "}
        <span>{maxPerFeed}</span>ml
      </p>
    </div>
  );
}
