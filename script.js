function minCostToConnectRopes(ropes) {
  if (ropes.length < 2) {
    return 0;
  }
    
	const totalCost=ropes.reduce((accumulator,currentValue)=>{
		 ropes.sort((a, b) => a - b);
		const combinedCost=ropes[0]+ropes[1];
		ropes.splice(0,2);
		return accumulator+combinedCost;
	},0);
	return totalCost;
}
module.exports= minCostToConnectRopes;
