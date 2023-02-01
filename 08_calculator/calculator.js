const add = function(a,b) {
  return a+b
	
};

const subtract = function(a,b) {
  return a-b
	
};

const sum = function(arr) {
  let total=0;
  for(let i=0 ;i<arr.length;i++){
    total+=arr[i];

  }
	return total
};

const multiply = function(arr) {
  let total=1;
  for(let i=0 ;i<arr.length;i++){
    total*=arr[i];

  }
	return total
};

const power = function(a,b) {
  return a**b
	
};

const factorial = function(num) {
  let res=1;
  if (num===0){
    return 1
  }
  
  else {
    //res= factorial(num-1)*num;
    for(let i=1; i<num+1;i++ ){
      res*=i;
    }
  }

  return res
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
