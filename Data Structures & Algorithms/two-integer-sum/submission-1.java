class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, List<Integer>> numsMap = new HashMap<Integer, List<Integer>>();
        for (int i=0;i<nums.length;i++){
            List<Integer> currentIndexs = numsMap.getOrDefault(nums[i], new ArrayList());
            currentIndexs.add(i);
            numsMap.put(nums[i], numsMap.getOrDefault(nums[i], currentIndexs));
        }
        int[] result = new int[2];
        for (int i=0;i<nums.length;i++){
            int required = target-nums[i];
            if(numsMap.containsKey(required)){
                result[0] = i;
                if(required == nums[i] && numsMap.get(required).size()>1) {
                    result[1] = numsMap.get(required).get(1);
                    break;
                } else if(required !=nums[i]) {
                    result[1] = numsMap.get(required).get(0);
                    break;
                }
            }
        }
        return result;
    }
}
