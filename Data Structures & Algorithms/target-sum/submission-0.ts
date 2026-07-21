class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number, currentSum: number = 0, currentIndex:number =0): number {
        if(target===currentSum && currentIndex===nums.length){
            return 1;
        } 
        if(currentIndex>nums.length-1){
            return 0;
        }
        let sum1 = this.findTargetSumWays(nums, target, currentSum+nums[currentIndex], currentIndex+1);
        let sum2 = this.findTargetSumWays(nums, target, currentSum-nums[currentIndex], currentIndex+1);
        return sum1+sum2;
    }
}
