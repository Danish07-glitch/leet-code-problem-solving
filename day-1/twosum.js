// Using Hash Map
var twoSum = function(nums, target) {

    let seen={}
    for( i=0;i<nums.length;i++){
        seen[nums[i]]=i

    }
    for( i=0;i<nums.length;i++){
        comp=target-nums[i]
        if(comp in seen && seen[comp] !=i){
            return [i,seen[comp]]
        }

    }  
};
console.log((twoSum([3,2,4],6)))

// Using two pointer array
var twoSum = function(nums, target) {

    let a=0
    let b=1
    console.log("nums.length",nums.length)
    while(a<nums.length){
    if(nums[a]+nums[b]==target){
        return [a,b]

    }
    else if(b==nums.length-1){
        a=a+1
        b=a+1
    }
        
    else{
        b++
    }
    }    
};                    
console.log((twoSum([3,2,4],6)))
