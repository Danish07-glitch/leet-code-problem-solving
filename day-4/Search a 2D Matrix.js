var searchMatrix = function(matrix, target) {
    

    const m = matrix[0].length,n = matrix.length;
    if (target < matrix[0][0] || target > matrix[n-1][m-1]) return false;

    let low = 0,high = matrix.length-1;
    let mid;
    // console.log(m,n)
    while (low <= high) {
        mid = Math.floor((low+high)/2)
        // console.log(mid)

        if (target <= matrix[mid][m-1] && target >= matrix[mid][0]) break;
        if (target < matrix[mid][0]) high = mid - 1;
        else if (target > matrix[mid][m-1]) low = mid + 1;
    }


    return binarySearch(target,matrix[mid])
};

function binarySearch(target,nums) {
    let low = 0,high = nums.length-1;
  
    while (low <= high) {
      console.log(low,high)
        let mid = Math.floor((low+high)/2);
        if(target == nums[mid]) return true;

        if(target < nums[mid]) high = mid - 1;
        else low = mid + 1;
    }

    return false
}