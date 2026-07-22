class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length()!=t.length()){
            return false;
        }
        Map<Character, Integer> charMap = new HashMap<Character, Integer>();
        for(int i =0;i<s.length();i++){
            charMap.put(s.charAt(i), charMap.getOrDefault(s.charAt(i), 0)+1);
        }

        for(int i =0;i<t.length();i++){
            Character currentTChar = t.charAt(i); 
            if(charMap.containsKey(currentTChar)){
                int currentCharCount = charMap.get(currentTChar);
                currentCharCount--;
                if(currentCharCount==0) {
                    charMap.remove(currentTChar);
                } else {
                    charMap.put(currentTChar, currentCharCount);
                }
            } else {
                return false;
            }
        }
        return charMap.isEmpty();
    }
}
