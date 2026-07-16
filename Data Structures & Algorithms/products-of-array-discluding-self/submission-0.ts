class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let zeroCount = 0;
        let totalProduct = nums.reduce((accum: number, current: number)=> {
            if(current ===0){
                zeroCount++;
                return accum *1;
            }
            return accum * current;
        }, 1);
        if(zeroCount>1) {
            totalProduct = 0;
        }
        return nums.map((num)=> {
            if(zeroCount > 1) {
                return 0;
            }
            if(zeroCount>0 && num !==0){
               return 0;
            }
            return Math.floor(totalProduct/(num===0?1:num))
        });
    }
}
