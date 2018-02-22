module.exports = function getZerosCount(number, base) {
  function getNum(num) {
    var n = 2;
    var arr = [];
while (num % n == 0 || n < num) {
    if (num % n !== 0) {
        n = n + 1;
        continue;
    }
    num = num / n;
    arr.push(n);
}
return arr;
}



function getCurrentPow(curr) {
    var start = arr.indexOf(curr);
    var pow = 1;
for (i = start; i < arr.length; i++) {
    
    if (arr[i + 1] == arr[i] && arr[i] == curr) {
        pow++;
    }
}
return pow;
}

function getZeros(number, basis) {
    var commonCount = 0;
    var n = basis;
    while (n < number) {
    var count = Math.floor(number / n);
    n *= basis;
    
    commonCount += count;
    }
    return Math.floor(commonCount / currentPow);
  }


    var arr = getNum(base);
    var commonResult = [];
     

for (var j = 0; j < arr.length; j++) {

        var current = arr[j];
        var currentPow = getCurrentPow(current);
        var currentZeros = getZeros(number, current);
        commonResult.push(currentZeros); 
}


function compareNumeric(a, b) {
    return a - b;
  }

  commonResult.sort(compareNumeric);
  return commonResult[0];
}