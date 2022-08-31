var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let max = 0;
    while(left < right){
        let leftHeight = height[left];
        let rightHeight = height[right];
        let minimumHeight = Math.min(leftHeight,rightHeight);
        max = Math.max(max,minimumHeight * (right - left));
        if(leftHeight < rightHeight){
            left ++;
        }else{
            right --
        }
    }
    return max
};