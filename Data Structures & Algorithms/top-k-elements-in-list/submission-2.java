class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        if(k<1){
            return new int[0];
        }
        Map<Integer, Integer> frequencyMap = new HashMap();
        for(int num: nums){
            Integer freq = frequencyMap.getOrDefault(num, 0);
            freq++;
            frequencyMap.put(num, freq);
        }
        System.out.println(frequencyMap);
        Queue<NumberFrequency> maxHeap = new PriorityQueue<NumberFrequency>(
            (p1, p2)-> Integer.compare(p2.getFrequency(), p1.getFrequency())
            );
        frequencyMap.forEach((key, value)-> maxHeap.add(new NumberFrequency(key, value)));
        int[] result = new int[k];
        for(int i =0;i<k;i++){
            NumberFrequency nf= maxHeap.poll();
            result[i] = nf.getNumber();
        }
        return result;
    }
}

class NumberFrequency {
    private int number;
    private int freq;

    NumberFrequency(int number, int freq) {
        this.number = number;
        this.freq = freq;
    }

    public int getNumber() {
        return this.number;
    }

    public int getFrequency() {
        return this.freq;
    }
}
