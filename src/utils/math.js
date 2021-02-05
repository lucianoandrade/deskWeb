export const round = (value, decimals = 2) => {
  const multiplier = 10 ** decimals;
  const adjustment = 1 / (10 ** (decimals + 2));
  let newValue = value + adjustment;
  newValue = Math.round(newValue * multiplier);
  return newValue / multiplier;
};

export const getServiceOrderPercentage = (total, quantity) => {
  return round(quantity / total)
};