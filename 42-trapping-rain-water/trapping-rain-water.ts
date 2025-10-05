function trap(height: number[]): number {
    let total = 0;
    const n = height.length;

    let prefixMax = new Array(n);
    let sufficMax = new Array(n);

    prefixMax[0] = height[0];
    for(let i = 1; i < n; i++) prefixMax[i] = Math.max(prefixMax[i-1], height[i]);

    sufficMax[n-1] = height[n-1];
    for(let i = n-2; i>=0; i--) sufficMax[i] = Math.max(sufficMax[i+1],height[i]);

    for(let i = 0; i < n; i++) total+=Math.min(prefixMax[i], sufficMax[i]) - height[i];
    return total;
};