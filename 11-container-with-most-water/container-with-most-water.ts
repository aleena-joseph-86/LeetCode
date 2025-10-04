function maxArea(height: number[]): number {
   let start = 0;
   let end = height.length;
   let req_area = 0
   while(start<=end) {
        let h = Math.min(height[start], height[end]);
        let b = end - start;
        let area = b * h;
        if(area > req_area) req_area = area ; 
        height[start]<=height[end] ? start++ : end--
    }
    return req_area
};
