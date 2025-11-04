const YEAR = 365;

const TWO_WEEKS = 14;
const oneMonth = Math.floor(YEAR / 12);
const twoMonths = Math.floor(YEAR / 6);
const fourMonths = Math.floor(YEAR / 3);

type FeedCount = {
  min: number;
  max: number;
};

export function getFeedCount(age: number): FeedCount {
  if (age < TWO_WEEKS) {
    return {
      min: 8,
      max: 10,
    };
  }

  if (age < oneMonth) {
    return {
      min: 7,
      max: 8,
    };
  }

  if (age < twoMonths) {
    return {
      min: 6,
      max: 7,
    };
  }

  if (age < fourMonths) {
    return {
      min: 5,
      max: 6,
    };
  }

  return {
    min: 4,
    max: 5,
  };
}
