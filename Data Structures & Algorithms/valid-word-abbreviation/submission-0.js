class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let num = '';
        let wordIndex = 0;
        for(let i =0;i<abbr.length;i++){
            const charCode = abbr.charCodeAt(i);
            if(charCode>=97 && charCode <=122) {
                if(num.length>0){
                  const numVal = parseInt(num);
                  if(word.length < wordIndex + numVal) {
                    return false;
                  } else {
                    wordIndex+= numVal;
                    num='';
                  }
                }
                console.log(wordIndex + '-' + i);
                if(word.charAt(wordIndex) !== abbr.charAt(i)){
                    return false;
                } 
                wordIndex++;
            } else {
                if(num.length === 0 && abbr.charAt(i)==='0'){
                    return false;
                }
                num += abbr.charAt(i);
            }
        };
        if(num.length>0){
            const numVal = parseInt(num);
            console.log(word.length +'-'+wordIndex + '-'+ numVal);
            if(word.length !== wordIndex + numVal) {
                return false;
            }
        }
        return true;
    }
}
