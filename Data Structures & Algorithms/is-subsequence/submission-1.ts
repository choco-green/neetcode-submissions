class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        if (s == "") return true;

        let sp = 0, tp = 0;
        while (tp < t.length) {
            if (sp == s.length - 1) return true;

            if(s[sp] == t[tp]) {
                sp++; tp++;
            } else {
                tp++;
            }
        }

        return false;
    }
}
