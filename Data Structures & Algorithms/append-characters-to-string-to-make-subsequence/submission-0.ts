class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s: string, t: string): number {
        let sp = 0;
        let tp = 0;
        let output = 0;

        while (sp < s.length) {
            if (s[sp] == t[tp]) {
                sp++;
                tp++
            } else {
                sp++;
            }        
        }

        while (tp < t.length) {
            output++;
            tp++;
        }

        return output;
    }
}
