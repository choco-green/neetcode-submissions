class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const freq = new Map<string, number>();
        for(const c of s) {
            freq.set(c, (freq.get(c) ?? 0) + 1);
        }

        for(const c of t) {
            const val = freq.get(c);
            if (!val) return false;
            if (val < 1) return false;
            if (val == 1) freq.delete(c);
            freq.set(c, val - 1);
        }

        for (const v of freq.values()) {
            if (v != 0) return false;
        }

        return true
    }
}
