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