var lengthOfLongestSubstring = function(s) {
    let a=[]
    let b=[]
    let max=0
    a=s.split('')

for(let i=0;i<a.length;i++){
 
  if (b.includes(a[i])){
    
    while (b.shift() !==a[i]);
  }
    
    b.push(a[i])
    if (b.length>max){
      max=b.length
    }
    
}
return max
};