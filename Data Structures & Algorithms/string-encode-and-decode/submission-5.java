class Solution {

    public String encode(List<String> strs) {
        if(strs.size()==0){
            return "";
        }
        StringBuilder sizeString = new StringBuilder();
        StringBuilder actualString = new StringBuilder();
        for(String str :strs) {
            sizeString = sizeString.append(str.length()+"-");
            actualString = actualString.append(str);
        }
        return sizeString.substring(0,sizeString.length()-1) + "\n"+ actualString;
    }

    public List<String> decode(String str) {
        List<String> result = new ArrayList();
        System.out.println(str);
        if(str.length()==0){
            return result;
        }
        String[] decodeStr = str.split("\n");
        int current = 0;
        String[] sizes = decodeStr[0].split("-");
        for(String size: sizes) {

            int numSize = Integer.valueOf(size);
            String curr = decodeStr.length>1?decodeStr[1].substring(current, current+numSize):"";
            result.add(curr.length()>0? curr: "");
            current = current+numSize;
        }
        return result;
    }
}
