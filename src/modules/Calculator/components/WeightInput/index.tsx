type WeightInputProps = {
  value: number;
  onChange(weight: number): void;
};

export function WeightInput({ value, onChange }: WeightInputProps) {
  return (
    <p>
      Weight:{" "}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={500}
        max={10000}
      />
    </p>
  );
}
