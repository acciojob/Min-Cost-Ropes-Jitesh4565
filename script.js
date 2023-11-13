function minCostToConnectRopes(ropes) {
  // Ensure there are at least two ropes
  if (ropes.length < 2) {
    return 0;
  }

  // Sort the array in ascending order
  ropes.sort((a, b) => a - b);

  // Using reduce to calculate the total cost of connecting ropes
  const totalCost = ropes.reduce((accumulator, currentValue, index, array) => {
    if (index + 1 < array.length) {
      // Combine the two smallest ropes
      const combinedCost = array[index] + array[index + 1];

      // Update the next element in the array with the combined cost
      array[index + 1] = combinedCost;

      // Add the combined cost to the accumulator
      return accumulator + combinedCost;
    }

    // If we're at the last element, return the accumulator
    return accumulator;
  }, 0);

  return totalCost;
}
module.exports= minCostToConnectRopes;
