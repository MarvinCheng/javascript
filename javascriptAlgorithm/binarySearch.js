// worst case complexity: logn
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        console.log(left, right);
        const mid = left + Math.floor((right - left) / 2);
        console.log(mid);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let arr = [1,2,3,3,4,5,6,6];
console.log(binarySearch(arr,4));
console.log((Math.log10(27)/Math.log10(3))%1);

function binarySearch(arr, target){
    let left=0;
    let right = arr.length -1;
    while(left <= right){
        const mid = left + Math.floor((right-left) /2);
        if(arr[mid] === target){
            return mid;
        }
        if(arr[mid]< target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
