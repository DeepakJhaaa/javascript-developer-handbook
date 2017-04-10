
var main = function (input) {
  var hash = {};
  for (var i = 0; i < input.length; i++) {
    if (!hash[input[i]]) hash[input[i]] = 1;
    else hash[input[i]]++;
  }
  var count = 0;
  for (var j in hash) {
    if (hash[j] % 2 !== 0) count++;
    if (count > 1) {
      console.log("false");
      console.log(hash);
      return false
    }
  }
  console.log(hash);
  console.log("true");
  return true
};

main("rats live on no evil star");