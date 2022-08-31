const expandFromCenter = (s,left,right)=>{
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--;
        right++;
    }
    return s.slice(left+1,right);
}

const longestPalindrome = (s)=> {
    
    let longest = "";
    for(let i = 0;i<s.length;i++){
        let odd = expandFromCenter(s,i,i);
        let even = expandFromCenter(s,i,i+1);
        let len = odd.length >= even.length ? odd : even;
        if(len.length > longest.length ){
            longest = len;
        }
    }
    return longest
};
