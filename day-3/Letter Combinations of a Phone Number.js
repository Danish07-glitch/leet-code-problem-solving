var letterCombinations = function(digits) {
    
    if(digits.length == 0) return []

  var ans = []

  var data = {
      '2' : ['a', 'b', 'c'],
      '3' : ['d', 'e', 'f'],
      '4' : ['g', 'h', 'i'],
      '5' : ['j', 'k', 'l'],
      '6' : ['m', 'n', 'o'],
      '7' : ['p', 'q', 'r', 's'],
      '8' : ['t', 'u', 'v'],
      '9' : ['w', 'x', 'y', 'z']
  }

  function backtrac(str,index){
      if(str.length==digits.length){
          ans.push(str)
      }
      else{
          let a=data[digits[index]]
          for(let i=0;i<a.length;i++){
              backtrac(str+a[i],index+1)
          }
      }
  }
  backtrac("",0)

  return ans



};