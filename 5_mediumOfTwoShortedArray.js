var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1,...nums2];
     arr = arr.sort(function(a,b){return a-b})
    const len = arr.length;
    if(len % 2 === 0){
        return (arr[(len/2)] + arr[(len/2)-1])/2
    }else{
        return arr[(len/2)-(1/2)];
    }
};