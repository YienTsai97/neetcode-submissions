class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const start = 0
        const end = 1

        intervals = intervals.sort((a,b) => a[start] - b[start])

        let previous = intervals[0]
        let res = [previous]

        for(let current of intervals){
            if(current[start] <= previous[end]){
                previous[end] = Math.max(previous[end], current[end])
            }else{
                res.push(current)
                previous = current;
            }
        }
        return res
    }
}
