const sumAll = function(r1,r2) {
  if (typeof r1!=="number" || typeof r2!=="number"){
    return "ERROR"
  }
  if( r1<0 || r2<0){
    return "ERROR"
  } 
  
  let res;
  r1>r2?res=Math.floor((r1*(r1+r2))/2): res=Math.floor((r2*(r1+r2))/2);

  return res
};

// Do not edit below this line
module.exports = sumAll;
