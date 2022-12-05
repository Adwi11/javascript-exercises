const removeFromArray = function(arr,...rem) {
  for (let i=0; i<arr.length; i++){
    for(let j=0; j<rem.length; j++){
      if (arr[i]===rem[j]){
        arr.splice(i,1);
      }
    }
  }
  return arr
};

// Do not edit below this line
module.exports = removeFromArray;
