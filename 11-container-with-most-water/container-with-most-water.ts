function maxArea(height: number[]): number {
   let start = 0;
   let end = height.length;
   let req_area = 0
   while(1) {
        let h = Math.min(height[start], height[end]);
        let b = end - start;
        let area = b * h;
        if(area > req_area) req_area = area   
        h === height[start] ? start++ : end--
        if(start === end) break;
    }
    return req_area
};
