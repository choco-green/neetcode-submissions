class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let lastIndex = arr.length - 1;
        let currMax = arr[lastIndex];
        arr[lastIndex] = -1;
        for(let i = arr.length - 2; i >= 0; i--) {
            if (arr[i] < currMax) {
                arr[i] = currMax;
            } else {
                [arr[i], currMax] = [currMax, arr[i]];
            }
        }
        return arr
    }
}
