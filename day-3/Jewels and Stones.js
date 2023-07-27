// Using Hash Map
var numJewelsInStones = function(jewels, stones) {
    let count={}
    let res=0
    for(let i of stones){
      count[i]=count[i]?count[i]+1:1
    }
    
    for(let k of jewels){
      
      if(k in count){
        res +=count[k]
      }
    }
    return res
};