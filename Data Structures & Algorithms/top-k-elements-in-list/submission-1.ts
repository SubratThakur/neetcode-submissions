class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = new Map();
        nums.forEach((num)=>{
           freqMap.set(num, (freqMap.get(num)||0)+1); 
        });
        const numFreq = Array.from(freqMap);
        numFreq.sort((num1, num2)=> num2[1]-num1[1]);
        const result = [];
        for(let i =0;i<k && i<numFreq.length;i++){
            result.push(numFreq[i][0]);
        }
        return result;
    }
}
