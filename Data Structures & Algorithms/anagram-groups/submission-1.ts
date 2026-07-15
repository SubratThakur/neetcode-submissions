class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramMap = new Map();
        strs.forEach((str:string)=>{
            let charArr = str.split('');
            charArr.sort();
            const sortedChars = charArr.join('');
            if(anagramMap.has(sortedChars)){
                const currentStings:string[] = anagramMap.get(sortedChars);
                currentStings.push(str);
                anagramMap.set(sortedChars, currentStings);
            } else {
                anagramMap.set(sortedChars, [str]);
            }
        });
        const result = [];
        anagramMap.forEach((value: string[])=> result.push(value));
        return result;
    }
}
