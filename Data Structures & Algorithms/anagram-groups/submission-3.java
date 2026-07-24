
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> result = new ArrayList();
        if(strs.length>0){
            Map<String, List<String>> anagramsListMap = new HashMap();
            for(String str: strs){
                char[] strChars = str.toCharArray();
                Arrays.sort(strChars);
                String sortedKey = new String(strChars);
                List<String> anagramList = anagramsListMap.getOrDefault(sortedKey, new ArrayList());
                anagramList.add(str);
                anagramsListMap.put(sortedKey, anagramList);
            }
            anagramsListMap.forEach((key, value)-> result.add(value));
        }
        return result;
    }
}
