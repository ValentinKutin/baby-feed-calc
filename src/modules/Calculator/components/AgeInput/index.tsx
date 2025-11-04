import { useState } from "react";

const dayInMs = 1000 * 60 * 60 * 24;
const now = new Date();

function formatDateToISOString(date: Date): string {
  return date.toISOString().split("T")[0];
}

function getDaysFromDate(date: Date): number {
  return Math.floor((now.getTime() - date.getTime()) / dayInMs);
}

type AgeInputProps = {
  value: number;
  onChange(days: number): void;
};

export function AgeInput({ onChange }: AgeInputProps) {
  const [date, setDate] = useState(new Date());
  const computedDate = formatDateToISOString(date);
  const maxDate = formatDateToISOString(new Date());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setDate(date);
    onChange(getDaysFromDate(date));
  };

  return (
    <p>
      <span>Date of birth: </span>
      <input
        type="date"
        value={computedDate}
        max={maxDate}
        onChange={handleChange}
      />
    </p>
  );
}
