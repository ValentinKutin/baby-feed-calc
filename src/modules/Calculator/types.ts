export type CalculationResult = {
  dailyVolumeMin: number; // in ml
  dailyVolumeMax: number; // in ml
  dailyVolumeAverage: number; // in ml
};

export type CalculationInput = {
  weight: number; // in grams
  age: number; // in days
};

export type FeedCount = {
  min: number;
  max: number;
};
