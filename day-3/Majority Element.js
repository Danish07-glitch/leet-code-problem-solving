
// Using Hash Map
var majorityElement = function(nums) {
    
    const count={}
    let res=0,maxCount=0
    for(let i=0;i<nums.length;i++){
        count[nums[i]]=count[nums[i]]?count[nums[i]]+1:1
        if(count[nums[i]]>maxCount){
            res=nums[i]
        }
        else{
            res
        }
        maxCount=Math.max(maxCount,count[nums[i]])
    }
    return res

};

// Using Boyer-Moore Algorithm
var majorityElement = function(nums) {
    
    
    let res=0,count=0
    for(let i=0;i<nums.length;i++){
        if(count==0){
            res=nums[i]
        }
        if(res==nums[i]){
            count++
        }
        else{
            count--
        }
        // count +=1?res===nums[i]:-1
    }
    return res

};