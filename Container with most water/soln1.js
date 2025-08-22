function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = -9999;

  while (left < right) {
    const diff = right - left;
    let area;
    if (height[left] < height[right]) {
      area = diff * height[left];
      left++;
    } else {
      area = diff * height[right];
      right--;
    }
    if (area > maxArea) {
      maxArea = area;
    }
  }

  return maxArea;
}

console.log(maxArea([1,1]));
