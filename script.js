function mincost(arr)
{ 
//write your code here
// return the min cost
  if(arr.length<2)
  {
	  return 0;
  }
	const totalCost=arr.reduce((accumulator,currentValue)=>{
		arr.sort((a,b)=>a-b);

		const combinedCost=arr[0]+arr[1];
		arr.splice(0,2);
		return accumulator+combinedCost;
	},0);
	return totalCost;
}

module.exports=mincost;
