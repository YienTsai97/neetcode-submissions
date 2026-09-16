class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {

        //edge case
        if(m === 0) {
        for(let i = 0; i < n; i++ ){
            nums1[i] = nums2[i]
            }
        }


       //get the last index of nums1
       let last = m + n - 1

       //merge nums2 to nums1 in reverse order
        while( m > 0 && n > 0){
            if ( nums1[m-1] > nums2[n-1]){
                nums1[last] = nums1[m-1]
                m--
            } else {
                nums1[last] = nums2[n-1]
                n--
            }
            last --
        }

        //fill nums1 with left over element
        while (n > 0){
            nums1[last] = nums2[n-1]
            n--
            last--
        }

    }
}
