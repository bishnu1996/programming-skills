function longestSubstringNotRepeating(str){
    if(!str.length){
        return 0;
    }
    let start = 0;
    let end = 0;
    let maximumLength = 0;

    uniqueSubString = new Set();
    while(end<str.length){
        if(!uniqueSubString.has(str[end])){
            uniqueSubString.add(str[end])
            end ++;
            maximumLength = Math.max(maximumLength,uniqueSubString.size);
        }else{
            uniqueSubString.delete(str[start]);
            start++;
        }
    }
    return maximumLength;
} 

let res = longestSubstringNotRepeating('abcabcbb')
console.log(res);