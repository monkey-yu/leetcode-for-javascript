var isPowerOf4= function(num){
  return Math.log10(num) / Math.log10(4) % 1 === 0
};
isPowerOf4(16);    // true
