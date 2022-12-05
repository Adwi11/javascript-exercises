const add = function() {
	
};

const subtract = function() {
	
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function(num) {
  let res;
  if (num===0){
    return 1
  }
  
  else {
    res= factorial(num-1)*num;
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
