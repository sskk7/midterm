function countDigits(n){
    if(n < 0){
        return -1;
    }else{
        var no = Math.floor(n);
        return String(no).length;
    }
}