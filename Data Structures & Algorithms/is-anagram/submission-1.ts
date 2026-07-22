class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        return JSON.stringify(s.split("").sort()) === JSON.stringify(t.split("").sort())
    }
}
