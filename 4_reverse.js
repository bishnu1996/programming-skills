var reverse = function(x) {
    let newStr = "";
    if(x < (-2)**31 || x > (2)**31){
        return 0;
    }else{
        let str = x.toString();
        for(let i = str.length-1;i >= 0;i--){
            if(i === 0 && str[i] === '-'){
                newStr = '-'+newStr;
            }
                newStr += str[i];
        } 
    }
     let rev = parseInt(newStr);
        if(rev < (-2)**31 || rev > (2)**31){
            return 0;
  
}
      return rev;
};