function sumWithClosure(firstNum) {
    // Tu código aquí 👈
    function innerSum(secondNum = 0) {
        function subInnerSum(thirdNum = 0){
            return firstNum+secondNum+thirdNum;
        }
      return subInnerSum;
    }
    return innerSum;
  }
  
console.log(sumWithClosure(2)(1)(1));