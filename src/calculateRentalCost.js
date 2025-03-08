/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const fullAmount = days * 40;

  if (days < 3) {
    return fullAmount;
  }

  if (days < 7) {
    return fullAmount - 20;
  }

  return fullAmount - 50;
}

module.exports = calculateRentalCost;
