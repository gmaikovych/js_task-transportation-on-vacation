/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_PRICE = 40;
  const SHORT_STAY = 2;
  const MIDDLE_STAY = 6;
  const MIDDLE_STAY_DISCOUNT = 20;
  const LONG_STAY_DISCOUNT = 50;

  const fullAmount = days * DAY_PRICE;

  if (days <= SHORT_STAY) {
    return fullAmount;
  }

  if (days <= MIDDLE_STAY) {
    return fullAmount - MIDDLE_STAY_DISCOUNT;
  }

  return fullAmount - LONG_STAY_DISCOUNT;
}

module.exports = calculateRentalCost;
