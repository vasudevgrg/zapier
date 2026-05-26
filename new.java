import java.util.HashMap;

class Solution {
    public String minWindow(String s, String t) {
        HashMap<Character, Integer> hm1 = new HashMap<>();
        HashMap<Character, Integer> hm2 = new HashMap<>();

    }

    StringBuilder sb = new StringBuilder();

    public boolean validate(HashMap<Character, Integer> hm1, HashMap<Character, Integer> hm2) {

    }

    public int recurse(String s, HashMap<Character, Integer> hm1, HashMap<Character, Integer> hm2, int i, int j) {
        if (!validate(hm1, hm2)) {
            return Integer.MAX_VALUE;
        }

        hm1.put(s.charAt(i), hm1.get(s.charAt(i)) - 1);
        int res1 = recurse(s, hm1, hm2, i + 1, j);
        hm1.put(s.charAt(i), hm1.getOrDefault(s.charAt(i), 0) + 1);

        hm1.put(s.charAt(j), hm1.get(s.charAt(j)) - 1);
        int res2 = recurse(s, hm1, hm2, i, j - 1);
        hm1.put(s.charAt(j), hm1.getOrDefault(s.charAt(j), 0) + 1);

        int tempi = i;
        int tempj = j;
        if (res1 < res2) {
            if (j - i > res1) {
                tempi = i + 1;
                tempj = j;
            }
        } else {
            if (j - i > res1) {
                tempi = i;
                tempj = j - 1;
            }
        }

        sb.delete(0, sb.length());
        sb.append(s.substring(tempi, Math.min(tempj + 1, s.length())));

        return Math.min(j - i, Math.min(res1, res2));
    }

}