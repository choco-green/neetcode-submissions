class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // string[] = sorted character string, string[] = original str
        const map = new Map<string, string[]>();

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i].split("").sort().join();
            if (map.has(str)) {
                map.get(str)!.push(strs[i]);
            } else {
                map.set(str, [strs[i]])
            }
        }

        return [...map.values()];
    }
}